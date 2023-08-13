import { Link } from "../util/API";

export interface Publisher {
    id: string;
    name: string;
    links: Link[];
}