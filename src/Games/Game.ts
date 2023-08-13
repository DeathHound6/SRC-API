import { RunTime } from "../Runs/Run";
import { Asset, Link } from "../util/API";

export interface IGame {
    id: string;
    names: {
        international: string;
        japanese: string;
        twitch: string;
    };
    abbreviation: string;
    weblink: string;
    released: number;
    'release-date': string;
    ruleset: {
        'show-milliseconds': boolean;
        'require-verification': boolean;
        'require-video': boolean;
        'run-times': RunTime[];
        'default-time': RunTime;
        'emulators-allowed': boolean;
    };
    romhack: boolean;
    gametypes: any[];
    platforms: string[];
    regions: string[];
    genres: any[];
    engines: any[];
    developers: any[];
    publishers: any[];
    moderators: {
        [id: string]: 'moderator'|'super-moderator';
    };
    created: string;
    assets: {
        logo: Asset;
        'cover-tiny': Asset;
        'cover-small': Asset;
        'cover-medium': Asset;
        'cover-large': Asset;
        icon: Asset;
        'trophy-1st': Asset;
        'trophy-2nd': Asset;
        'trophy-3rd': Asset;
        'trophy-4th': Asset;
        background: Asset;
        foreground: Asset;
    };
    links: Link[];
}

/**
 * Represents a game when they have been fetched in bulk
 */
export interface IBulkGame {
    id: string;
    names: {
        international: string;
        japanese: string;
    };
    abbreviation: string;
    weblink: string;
}