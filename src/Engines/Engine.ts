import { Link } from "../util/API";

export interface Engine {
    id: string;
    name: string;
    links: Link[];
}