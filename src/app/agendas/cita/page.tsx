"use client"
import { forwardRef, useEffect, useState } from "react";
import { DataService } from "../../services/getData.services";
import { Spinner } from '../../components/Spinner';
import { API_GEN, PLANES } from "../../services/variables";
import { AgendasInt, DictT, LoadingData } from '../../services/interfaces';
import { showToast, todayToNDays } from "../../services/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { setHours } from "date-fns";
import styles from "../../styles/agendas.module.css";
import Agenda from "@/app/components/Agenda";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const AgendarCita = () => {
  const searchParams = useSearchParams();
  const dataService = new DataService();
  const planId = searchParams.get("sesionId") ?? "0"
  const auxPlan = PLANES.find(p => p.id == Number(planId));
  const initAgenda: AgendasInt = {
    direccion: "", duracion: auxPlan?.duration ?? 0, nombrePlan: auxPlan?.title ?? "", planId, email: "", fechaFin: "", fechaInicio: "", nombre: "", telefono: ""
  }
  
  const [loading, setLoading] = useState<LoadingData>({ loading: false });
  const [agenda, setAgenda] = useState<AgendasInt>({ ...initAgenda });
  const [agendaId, setAgendaId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [excludeDates, setExcludeDates] = useState<DictT<Date[]>>({});

  useEffect(() => {
    const dataFetch = async () => {
      setLoading({ loading: true, message: "Obteniendo agendas disponibles" });
      await updateAgendas();
      setLoading({ loading: false });
    }
    dataFetch();
  }, []);

  const updateAgendas = async () => {
    const reqAgendas = await dataService.requestGet(`${API_GEN}/agendas`);
    if (reqAgendas.ok) {
      const agendas: AgendasInt[] = reqAgendas.data;
      const objAgendas: DictT<Date[]> = {};
      agendas.forEach(a => {
        const fechaInicio = new Date(a.fechaInicio);
        const fechasDuracion: Date[] = [];
        let i = 0
        while (i < a.duracion) {
          const fechaDuracion = new Date(a.fechaInicio);
          fechaDuracion.setHours(fechaInicio.getHours() + i);
          fechasDuracion.push(fechaDuracion);
          i++;
        }
        if (fechaInicio.toLocaleDateString() in objAgendas) {
          objAgendas[fechaInicio.toLocaleDateString()].push(...fechasDuracion);
        } else {
          objAgendas[fechaInicio.toLocaleDateString()] = [...fechasDuracion];
        }
      });
      setExcludeDates(objAgendas);
    } else {
      showToast("Error al obtener las agendas disponibles, intente más tarde", "error")
    }
  }

  const CustomInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
    function CustomInput({ value, onClick }: any, ref: any) {
      return (
        <button
          type="button"
          onClick={onClick}
          ref={ref as React.Ref<HTMLButtonElement>}
          className={styles.input}
        >
          {value || "Selecciona una fecha y hora"}
        </button>
      );
    }
  );

  const getExcludedTimes = (date: Date | null) => {
    return date ? excludeDates[date.toLocaleDateString()] : [];
  };

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validaciones
  const validateData = () => {
    const newErrors: { [key: string]: string } = {};

    if (!agenda.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!agenda.direccion.trim()) {
      newErrors.direccion = "La dirección es obligatoria.";
    }

    if (!agenda.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    if (!agenda.telefono.match(/^\d{10}$/)) {
      newErrors.telefono = "El teléfono debe contener 10 dígitos.";
    }

    if (agenda.duracion == 0) {
      newErrors.duracion = "La sesión es obligatoria.";
    }

    if (!agenda.fechaInicio) {
      newErrors.fechaInicio = "La fecha de inicio es obligatoria.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Si el input es teléfono, solo permitir números
    if (name === "telefono") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setAgenda({ ...agenda, [name]: numericValue });
    } else if (name === "duracion") {
      const pl = PLANES.find(p => p.id == Number(value)) ?? {duration:0,title:""};
      setAgenda({ ...agenda, [name]: pl.duration, nombrePlan: pl.title, planId: value });
    } else {
      setAgenda({ ...agenda, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateData()) {
      setLoading({ loading: true, message: "Generando agenda, espere un momento" });
      const reqAgendas = await dataService.requestPost(`${API_GEN}/agenda`, agenda);
      if (reqAgendas.ok) {
        await updateAgendas();
        showToast("Agenda generada correctamente", "success");
        setAgendaId(reqAgendas.data.agendaId);
        const link = document.createElement("a");
        link.href = `/hogero/agendas?agendaId=${reqAgendas.data.agendaId}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        await updateAgendas();
        showToast(reqAgendas.error?.message, "error");
      }
      setLoading({ loading: false });
    }
  }

  const handleNewAgenda = () => {
    setAgendaId("")
    setAgenda({ ...initAgenda });
    setSelectedDate(null);
  }

  return (<>
    {loading.loading ?
      <Spinner message={loading.message} /> :
      <>
        {agendaId == "" && <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nombre Paciente</label>
            <input
              type="text"
              name="nombre"
              value={agenda.nombre}
              onChange={handleChange}
              className={styles.input}
              placeholder="Escribe tu nombre"
            />
            {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={agenda.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="correo@ejemplo.com"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={agenda.telefono}
              onChange={handleChange}
              maxLength={10}
              className={styles.input}
              placeholder="1234567890"
            />
            {errors.telefono && <p className={styles.error}>{errors.telefono}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={agenda.direccion}
              onChange={handleChange}
              className={styles.input}
              placeholder="Escribe tu dirección (Calle,Colonia,CP,Ciudad)"
            />
            {errors.direccion && <p className={styles.error}>{errors.direccion}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Fecha Agenda</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => { setSelectedDate(date); setAgenda({ ...agenda, fechaInicio: date?.toISOString()! }) }}
              showTimeSelect
              locale={es}
              dateFormat="Pp"
              timeFormat="HH:mm"
              timeIntervals={60}
              placeholderText="Selecciona una fecha y hora"
              customInput={<CustomInput />}
              timeCaption="Hora"
              minTime={setHours(0, 9)} // Hora mínima: 09:00
              maxTime={setHours(0, 17)}
              excludeTimes={getExcludedTimes(selectedDate)}
              minDate={todayToNDays(1)}
              className={styles.label}
            />
            {errors.fechaInicio && <p className={styles.error}>{errors.fechaInicio}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Sesión</label>
            <select
              name="duracion"
              value={agenda.planId}
              onChange={handleChange}
              className={styles.select}
            >
              <option value={0}>--Selecciona la sesión--</option>
              {PLANES.map((plan, index) => (<option key={index} value={plan.id}>{plan.title}</option>))}
            </select>
            {errors.duracion && <p className={styles.error}>{errors.duracion}</p>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Agendar
          </button>
        </form>}
        {agendaId !== "" && <>
          <Agenda agenda={agenda} agendaId={agendaId} isNew={true} />
          <div className={styles.divNewAgenda}>
            <button className={styles.newAgenda} onClick={handleNewAgenda}>Nueva cita</button>
          </div>
        </>}
      </>
    }
  </>);
}

export default dynamic(() => Promise.resolve(AgendarCita), {
  ssr: false
});
