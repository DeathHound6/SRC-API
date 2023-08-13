export interface Asset {
    uri: string;
    widht: number;
    height: number;
}

export interface Link {
    rel: string;
    uri: string;
}

export enum Direction {
    DESC = 'desc',
    ASC = 'asc'
}
