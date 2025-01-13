"use client"
import { Suspense, useEffect, useState } from "react";
import { DataService } from "../services/getData.services";
import { Spinner } from '../components/Spinner';
import { API_GEN } from "../services/variables";
import { AgendasInt, LoadingData } from '../services/interfaces';
import { formatDate, showToast } from "../services/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/agendas.module.css";
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const dataService = new DataService();
  const initAgenda: AgendasInt = {
    direccion: "", duracion: 0, email: "", fechaFin: "", fechaInicio: "", nombre: "", telefono: ""
  }
  const [loading, setLoading] = useState<LoadingData>({ loading: false });
  const [agenda, setAgenda] = useState<AgendasInt>();
  const [agendaId, setAgendaId] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const searchParams = useSearchParams()
  const existsIdParam = searchParams.keys().some(el => el == "agendaId")

  useEffect(() => {
    const idParam = searchParams.get('agendaId')
    if (idParam) {
      setAgendaId(idParam)
      getAgenda(idParam)
    }else{
      setAgenda(undefined);
      setAgendaId("");
    }
  }, [searchParams])

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!agendaId.match(/^[a-zA-Z0-9]{10}$/)) {
      newErrors.agendaId = "El número de agenda es de 10 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getAgenda = async (id: string) => {
    setLoading({ loading: true, message: "Buscando agenda, espere un momento" });
    const reqAgendas = await dataService.requestGet(`${API_GEN}/agenda?agendaId=${id}`);
    if (reqAgendas.ok) {
      const agenda = reqAgendas.data
      if (agenda.length > 0) {
        setAgenda(agenda[0]);
      } else {
        showToast("No sé encontró ninguna agenda con ese número.", "warning")
      }
    } else {
      showToast(reqAgendas.error?.message, "error")
    }
    setLoading({ loading: false });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setAgenda(undefined);
      getAgenda(agendaId);
    }
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.target;
    const data = value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10);
    setAgendaId(data);
  }

  return (<Suspense>
    {!existsIdParam && <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formSearch}>
        <input
          type="text"
          value={agendaId}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Escribe el número de tu cita"
        />
        <button type="submit" className={styles.submitButton}>
          Consultar
        </button>
      </div>
      {errors.agendaId && <p className={styles.error}>{errors.agendaId}</p>}
    </form>
    }
    {agenda && <>
      {existsIdParam && <center>Recuerda guardar tu número de cita.</center>}
      <div className={styles.container}>
        <h2 className={styles.title}>Número de Cita {agendaId}</h2>
        <div className={styles.info}>
          <p><strong>Nombre:</strong> {agenda.nombre}</p>
          <p><strong>Teléfono:</strong> {agenda.telefono}</p>
          <p><strong>Email:</strong> {agenda.email}</p>
          <p><strong>Fecha:</strong> {formatDate(agenda.fechaInicio)}:00</p>
          <p><strong>Dirección:</strong> {agenda.direccion}</p>
          <p>
            <strong>Confirmación:</strong>{" "}
            <span className={agenda.confirmacion ? styles.confirmed : styles.pending}>
              {agenda.confirmacion ? "Confirmada" : "Pendiente"}
            </span>
          </p>
        </div>
      </div>
      {!agenda.confirmacion && (
        <div className={styles.note}>
          <p>
            Para confirmar la cita, es necesario realizar una transferencia a la cuenta bancaria:
          </p>
          <ul>
            <li>
              <strong>Banco BBVA:</strong> 4152314024643333
            </li>
            <li>
              <strong>Titular:</strong> Karla Itzel Ramos Romero
            </li>
            <li>
              <strong>Concepto:</strong> {agendaId}
            </li>
          </ul>
        </div>
      )}
    </>
    }
    {loading.loading && <Spinner message={loading.message} />}
  </Suspense>);

}
