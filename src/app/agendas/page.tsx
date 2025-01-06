"use client"
import { forwardRef, useEffect, useState } from "react";
import { DataService } from "../services/getData.services";
import { Spinner } from '../components/Spinner';
import { API_GEN } from "../services/variables";
import { AgendasInt, DictDates } from "../services/interfaces";
import { todayToNDays } from "../services/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { setHours } from "date-fns";

export default function Page() {
  const dataService = new DataService();
  const [loading, setLoading] = useState<boolean>(true);
  const [agenda, setAgenda] = useState<AgendasInt>({
    direccion: "", duracion: 0, email: "", fechaFin: "", fechaInicio: todayToNDays(1).toISOString(), id: 0, nombre: "", telefono: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [excludeDates, setExcludeDates] = useState<DictDates>({});

  useEffect(() => {
    const dataFetch = async () => {
      const reqAgendas = await dataService.requestGet(`${API_GEN}/agendas`);
      if (reqAgendas.ok) {
        const agendas: AgendasInt[] = reqAgendas.data;
        const objAgendas: DictDates = {};
        agendas.forEach(a => {
          const fechaInicio = new Date(a.fechaInicio);
          const fechasDuracion: Date[] = [];
          let i = 0
          while (i <= a.duracion) {
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
      }
      setLoading(false);
    }
    dataFetch();
  }, []);

  const CustomInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
    function CustomInput({ value, onClick }: any, ref: any) {
      return (
        <button
          type="button"
          onClick={onClick}
          ref={ref as React.Ref<HTMLButtonElement>}
          className=""
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          {value || "Selecciona una fecha y hora"}
        </button>
      );
    }
  );

  const getExcludedTimes = (date: Date | null) => {
    return date ? excludeDates[date.toLocaleDateString()] : [];
  };

  return (<>
    {loading ?
      <Spinner message="Obteniendo días disponibles" /> :
      <div className="form-agenda">
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
          minTime={setHours(0, selectedDate?.toLocaleDateString() == new Date().toLocaleDateString() ? new Date().getHours() + 3 : 9)} // Hora mínima: 09:00
          maxTime={setHours(0, 17)}
          excludeTimes={getExcludedTimes(selectedDate)}
          minDate={todayToNDays(0)}
          id="validationCustom01"
          required
        />
      </div>}
  </>);

}
