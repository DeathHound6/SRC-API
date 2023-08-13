import { Link } from "../util/API";

export class Category implements ICategory {
    readonly id: string;
    readonly name: string;
    readonly weblink: string;
    readonly type: CategoryType;
    readonly rules: string;
    readonly players: { type: CategoryPlayerType; value: number; };
    readonly miscellaneous: boolean;
    readonly links: Link[];

    constructor(data: ICategory) {
        this.id = data.id;
        this.name = data.name;
        this.weblink = data.weblink;
        this.type = data.type;
        this.rules = data.rules;
        this.players = data.players;
        this.miscellaneous = data.miscellaneous;
        this.links = data.links;
    }
}

export interface ICategory {
    id: string;
    name: string;
    weblink: string;
    type: CategoryType;
    rules: string;
    players: {
        type: CategoryPlayerType;
        value: number;
    };
    miscellaneous: boolean;
    links: Link[];
}

export enum CategoryType {
    PERGAME = 'per-game',
    PERLEVEL = 'per-level'
}

export enum CategoryPlayerType {
    EXACTLY = 'exactly',
    UPTO = 'up-to'
}