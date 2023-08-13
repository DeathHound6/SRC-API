import { Link, Asset } from "../util/API";

export interface ISeries {
    id: string;
    name: {
        international: string;
        japanese: string;
    };
    abbreviation: string;
    weblink: string;
    moderators: object;
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
        'trophy-4th': Asset|null;
        background: Asset;
        foreground: Asset|null;
    };
    links: Link[];
}