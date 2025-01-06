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