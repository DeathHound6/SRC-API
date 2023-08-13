import { RunPlace, RunTime } from "../Runs/Run";
import { Link } from "../util/API";

export interface Leaderboard {
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
    runs: RunPlace[];
    links: Link[];
}