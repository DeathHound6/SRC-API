import { Link } from "../util/API";

export class Run implements IRun {
    readonly id: string;
    readonly weblink: string;
    readonly game: string;
    readonly level: string | null;
    readonly category: string;
    readonly videos: { text: string; links: { uri: String; }[]; };
    readonly comment: string;
    readonly status: { status: RunStatus; examiner: string; 'verify-date': string; };
    readonly players: IPlayer[];
    readonly date: string;
    readonly submitted: string | null;
    readonly times: { primary: string; primary_t: number; realtime: string; realtime_t: number; realtime_noloads: string; realtime_noloads_t: number; ingame: string | null; ingame_t: number; };
    readonly system: { platform: string; emulated: boolean; region: string | null; };
    readonly splits: Link;
    readonly values: { [id: string]: string; };
    readonly links: Link[];

    constructor(data: IRun) {
        this.id = data.id;
        this.weblink = data.weblink;
        this.game = data.game;
        this.level = data.level;
        this.category = data.category;
        this.videos = data.videos;
        this.comment = data.comment;
        this.status = data.status;
        this.players = data.players;
        this.date = data.date;
        this.submitted = data.submitted;
        this.times = data.times;
        this.system = data.system;
        this.splits = data.splits;
        this.values = data.values;
        this.links = data.links;
    }
}

export interface IRun {
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
    players: IPlayer[];
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

export interface IPlayer {
    rel: string;
    id?: string;
    name?: string;
    uri: string;
}

export interface IRunPlace {
    place: number;
    run: IRun;
}

export enum RunStatus {
    VERIFIED = 'verified',
    NEW = 'new',
    REJECTED = 'rejected'
}

export enum RunTime {
    REALTIME = 'realtime',
    REALTIME_NOLOADS = 'realtime_noloads',
    INGAME = 'ingame'
}