import { toast, ToastOptions } from 'react-toastify';

type ToastType = "info" | "success" | "warning" | "error";

interface ShowToastOptions extends ToastOptions {
    type?: ToastType;
}

export const showToast = (
    message: string,
    type: ToastType = "info",
    options?: ShowToastOptions
) => {
    toast(message, { type, ...options });
};


export const todayToNDays = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(0);
    date.setMinutes(0);
    return date;
}

export const generateAllowedTimes = (startHour: number, endHour: number): Date[] => {
    const times: Date[] = [];
    const currentDate = new Date(); // Día base para las horas
    for (let hour = startHour; hour <= endHour; hour++) {
        const time = new Date(currentDate.setHours(hour, 0, 0, 0));
        times.push(new Date(time)); // Agregar cada hora completa
    }
    return times;
};

export const getJSON = async (response: Response) => {
    let data;
    try {
        data = await response.json();
    } catch {
        data = response
    }
    return data;
}

export const formatDate = (dateString: string, addHrs?: number) => {
    const date = new Date(dateString);
    if(addHrs){
        date.setHours(date.getHours()+addHrs);
    }
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return date.toLocaleString("es-ES", options).replace(/:00$/, ""); // Eliminar segundos
};