import { Link } from "../util/API";

export interface Level {
    id: string;
    name: string;
    weblink: string;
    rules: string;
    links: Link[];
}