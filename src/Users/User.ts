import { Link } from "../util/API";

export interface IUser {
    id: string;
    name: {
        international: string;
        japanese: string|null;
    };
    weblink: string;
    'name-style': {
        style: string;
        color: {
            light: string;
            dark: string;
        };
    };
    role: string;
    signup: string;
    location: {
        country: {
            code: string;
            names: {
                international: string;
                japanese: string;
            };
        };
        region: {
            code: string;
            names: {
                international: string;
                japanese: string;
            };
        };
    };
    twitch: {
        uri: string|null;
    };
    hitbox: {
        uri: string|null;
    };
    youtube: {
        uri: string|null;
    };
    twitter: {
        uri: string|null;
    };
    speedrunslive: {
        uri: string|null;
    };
    links: Link[];
}