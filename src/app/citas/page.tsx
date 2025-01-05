"use client"
import { useEffect, useState } from "react";
import { DataService } from "../services/getData.services";
import { SpinnerComponent } from '../components/SpinnerComponent';
import { API_GEN } from "../services/variables";

export default function Home() {
  const dataService = new DataService();
  const [loading, setLoading] = useState<boolean>(true);
  const [agendas, setAgendas] = useState<Agendas[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const reqAgendas = await dataService.requestGet(`${API_GEN}/agendas`);
      if(reqAgendas.ok){
        setAgendas(reqAgendas.data)
      }
      setLoading(false);
    }
    dataFetch();
  }, []);
  return (<>
    {loading ?
      <SpinnerComponent message="Obteniendo días disponibles" /> :
      <div className="">
        {agendas.map((el)=>{
          return <span key={el.id}>{el.nombre}: {el.fechaInicio}</span>
        })}
      </div>}
  </>
  );
}
