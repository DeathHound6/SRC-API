import { Link } from "../util/API";

export class Genre implements IGenre {
    readonly id: string;
    readonly name: string;
    readonly links: Link[];

    constructor(data: IGenre) {
        this.id = data.id;
        this.name = data.name;
        this.links = data.links;
    }
}

export interface IGenre {
    id: string;
    name: string;
    links: Link[];
}