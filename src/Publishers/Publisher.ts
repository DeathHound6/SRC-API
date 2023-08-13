import { Link } from "../util/API";

export interface IPublisher {
    id: string;
    name: string;
    links: Link[];
}