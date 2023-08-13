import { Link } from "../util/API";

export class Guest implements IGuest {
    readonly name: string;
    readonly links: Link[];

    constructor(data: IGuest) {
        this.name = data.name;
        this.links = data.links;
    }
}

export interface IGuest {
    name: string;
    links: Link[];
}