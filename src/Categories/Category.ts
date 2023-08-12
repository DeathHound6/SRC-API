import { Link } from "../util/API";

export interface Category {
    id: string;
    name: string;
    weblink: string;
    type: 'per-game'|'per-level';
    rules: string;
    players: {
        type: 'exactly'|'up-to';
        value: number;
    };
    miscellaneous: boolean;
    links: Link[];
}