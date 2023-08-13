import { Link } from "../util/API";

export interface IEngine {
    id: string;
    name: string;
    links: Link[];
}