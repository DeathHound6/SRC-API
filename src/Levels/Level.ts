import { Link } from "../util/API";

export interface ILevel {
    id: string;
    name: string;
    weblink: string;
    rules: string;
    links: Link[];
}