export interface AgendasInt {
    id: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaInicio: string;
    fechaFin: string;
    duracion: number;
    direccion: string;
}

export interface DictT<T> {
    [date: string]: T
}