

export interface CardProduct {
    type: CardProductType;
    place: string;
    startTime: string;
    finishTime: string;
    precio: number;
}

export type CardProductType = 'Vuelo' | 'Hospedaje' | 'Paquetes';