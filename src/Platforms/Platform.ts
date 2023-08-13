import { Link } from "../util/API";

export interface IPlatform {
    id: string;
    name: string;
    released: number;
    links: Link[];
}