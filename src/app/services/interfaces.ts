export interface AgendasInt {
    nombre: string;
    telefono: string;
    email: string;
    fechaInicio: string;
    fechaFin: string;
    duracion: number;
    direccion: string;
    confirmacion?: boolean;
}

export interface DictT<T> {
    [date: string]: T
}

export interface LoadingData {
    loading: boolean;
    message?: string;
}