import { IRunPlace, RunTime } from "../Runs/Run";
import { Link } from "../util/API";

export class Leaderboard implements ILeaderboard {
    readonly weblink: string;
    readonly game: string;
    readonly category: string;
    readonly level: string | null;
    readonly platform: string | null;
    readonly region: string | null;
    readonly emulators: boolean | null;
    readonly 'video-only': boolean;
    readonly timing: RunTime;
    readonly values: { [id: string]: string; };
    readonly runs: IRunPlace[];
    readonly links: Link[];

    constructor(data: ILeaderboard) {
        this.weblink = data.weblink;
        this.game = data.game;
        this.category = data.category;
        this.level = data.level;
        this.platform = data.platform;
        this.region = data.region;
        this.emulators = data.emulators;
        this.timing = data.timing;
        this.values = data.values;
        this.runs = data.runs;
        this.links = data.links;
    }
}

export interface ILeaderboard {
    weblink: string;
    game: string;
    category: string;
    level: string|null;
    platform: string|null;
    region: string|null;
    emulators: boolean|null;
    'video-only': boolean;
    timing: RunTime;
    values: {
        [id: string]: string;
    };
    runs: IRunPlace[];
    links: Link[];
}