"use client";
import { emailHogero, isProduction, whatsappNumber } from "../services/variables";
import { AgendasInt, PlanesInt } from '../services/interfaces';
import { formatDate } from "../services/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/agendas.module.css";

export default function Agenda(props: { agenda: AgendasInt, isNew?: boolean, agendaId: string }) {
    const { agenda, isNew, agendaId } = props;
    const planData: PlanesInt = agenda.planData!;
    const date = formatDate(agenda.fechaInicio);
    const finalHrs = formatDate(agenda.fechaInicio,planData.duration).split(", ")[1];
    return (<>
        {isNew && <center>Recuerda guardar tu número de cita.</center>}
        <div className={styles.container}>
            <h2 className={styles.title}>Número de Cita {agendaId}</h2>
            <div className={styles.info}>
                <p><strong>Servicio:</strong> {planData?.title} - {planData.cost.split("/")[0]}</p>
                <p><strong>Nombre:</strong> {agenda.nombre}</p>
                <p><strong>Teléfono:</strong> {agenda.telefono}</p>
                <p><strong>Email:</strong> {agenda.email}</p>
                <p><strong>Fecha:</strong> {date}:00 a {finalHrs}:00</p>
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
                    <li>
                        <strong>Monto:</strong> {planData.cost.split("/")[0]}
                    </li>
                </ul>
                <p>
                    Mandar comprobante por:
                </p>
                <div className={styles.actions}>
                    <a
                        className={styles.contactLink}
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hola, les envio mi comprobante de transferencia para confirmar la cita: ${agendaId}`
                        )}`}
                        target="_blank"
                    >
                        WhatsApp
                    </a>
                    <a
                        className={styles.contactLink}
                        href={`mailto:${emailHogero}?subject=${encodeURIComponent(`Comprobante de transferencia: ${agendaId}`)}&body=${encodeURIComponent(
                            `Hola,\n\nAdjunto mi comprobante de transferencia para confirmar la cita: ${agendaId}.\n\nGracias.`
                        )}`}
                        target="_blank"
                    >
                        Correo
                    </a>
                </div>
            </div>
        )}
    </>);

}
