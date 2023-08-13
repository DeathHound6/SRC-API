import { Link } from "../util/API";

export interface Run {
    id: string;
    weblink: string;
    game: string;
    level: string|null;
    category: string;
    videos: {
        text: string;
        links: ({ uri: String; })[];
    };
    comment: string;
    status: {
        status: RunStatus;
        examiner: string;
        'verify-date': string;
    };
    players: Player[];
    date: string;
    submitted: string|null;
    times: {
        primary: string;
        'primary_t': number;
        realtime: string;
        'realtime_t': number;
        'realtime_noloads': string;
        'realtime_noloads_t': number;
        ingame: string|null;
        'ingame_t': number;
    };
    system: {
        platform: string;
        emulated: boolean;
        region: string|null;
    };
    splits: Link;
    values: {
        [id: string]: string;
    };
    links: Link[];
}

export interface Player {
    rel: string;
    id?: string;
    name?: string;
    uri: string;
}

export enum RunStatus {
    VERIFIED = 'verified',
    NEW = 'new',
    REJECTED = 'rejected'
}

export interface RunPlace {
    place: number;
    run: Run
}

export enum RunTime {
    REALTIME = 'realtime',
    REALTIME_NOLOADS = 'realtime_noloads',
    INGAME = 'ingame'
}