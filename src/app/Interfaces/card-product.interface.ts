

export interface CardProduct {
    type: CardProductType;
    place: string;
    startTime: string;
    finishTime: string;
}

export type CardProductType = 'Vuelo' | 'Hospedaje' | 'Paquetes';