import { Link } from "../util/API";

export interface INotification {
    id: string;
    created: string;
    status: 'read'|'unread';
    text: string;
    item: {
        rel: 'post'|'run'|'game'|'guide';
        uri: string;
    };
    links: Link[];
}