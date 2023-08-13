import { Link } from "../util/API";

export interface Platform {
    id: string;
    name: string;
    released: number;
    links: Link[];
}