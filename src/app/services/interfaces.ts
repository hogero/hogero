export interface AgendasInt {
    nombre: string;
    telefono: string;
    email: string;
    fechaInicio: string;
    fechaFin: string;
    duracion: number;
    direccion: string;
    confirmacion?: boolean;
    planId?: string;
    nombrePlan?: string;
}

export interface DictT<T> {
    [date: string]: T
}

export interface LoadingData {
    loading: boolean;
    message?: string;
}

export interface PlanesInt {
    id: number;
    title: string;
    description: string;
    features: string[];
    cost: string;
    duration: number;
}