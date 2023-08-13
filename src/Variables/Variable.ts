import { Link } from "../util/API";

export interface Variable {
    id: string;
    name: string;
    category: string|null;
    scope: {
        type: 'global'|'full-game'|'all-levels'|'single-level';
        level?: string;
    };
    mandatory: boolean;
    'user-defined': boolean;
    'obsoletes': boolean;
    values: {
        values: {
            [key: string]: VariableValue;
        };
        default: string|null;
    };
    'is-subcategory': boolean;
    links: Link[];
}

export interface VariableValue {
    label: string;
    rules: string;
    flags: {
        miscellaneous: boolean;
    }
}