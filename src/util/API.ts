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

export enum Orderby {
    GAME = "game",
    CATEGORY = "category",
    LEVEL = "level",
    PLATFORM = "platform",
    REGION = "region",
    EMULATED = "emulated",
    DATE = "date",
    SUBMITTED = "submitted",
    STATUS = "status",
    VERIFYDATE = "verify-date"
}
