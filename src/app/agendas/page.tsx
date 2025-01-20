"use client";
import { useEffect, useState } from "react";
import { DataService } from "../services/getData.services";
import { Spinner } from '../components/Spinner';
import { API_GEN, emailHogero, whatsappNumber } from "../services/variables";
import { AgendasInt, LoadingData } from '../services/interfaces';
import { formatDate, showToast } from "../services/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/agendas.module.css";
import { useSearchParams } from 'next/navigation'
import Agenda from "../components/Agenda";
import dynamic from 'next/dynamic'

const ConsultaCita = ()=> {
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
    } else {
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
      const agenda: AgendasInt[] = reqAgendas.data
      if (agenda.length > 0) {
        agenda[0].duracion = agenda[0].duracion;
        setAgenda(agenda[0],);
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

  return (<>
    {!existsIdParam && <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formSearch}>
        <input
          type="text"
          name="cita"
          value={agendaId}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Escribe el número de tu cita"
          autoComplete="true"
        />
        <button type="submit" className={styles.submitButton}>
          Consultar
        </button>
      </div>
      {errors.agendaId && <p className={styles.error}>{errors.agendaId}</p>}
    </form>
    }
    {agenda &&
      <Agenda agenda={agenda} agendaId={agendaId} isNew={existsIdParam}></Agenda>
    }
    {loading.loading && <Spinner message={loading.message} />}
  </>);

}

export default dynamic(() => Promise.resolve(ConsultaCita), {
  ssr: false
});
