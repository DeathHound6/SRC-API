import { Link } from "../util/API";

export class Variable implements IVariable {
    readonly id: string;
    readonly name: string;
    readonly category: string | null;
    readonly scope: { type: "global" | "full-game" | "all-levels" | "single-level"; level?: string | undefined; };
    readonly mandatory: boolean;
    readonly 'user-defined': boolean;
    readonly obsoletes: boolean;
    readonly values: { values: { [key: string]: IVariableValue; }; default: string | null; };
    readonly 'is-subcategory': boolean;
    readonly links: Link[];

    constructor(data: IVariable) {
        this.id = data.id;
        this.name = data.name;
        this.category = data.category;
        this.scope = data.scope;
        this.mandatory = data.mandatory;
        this["user-defined"] = data["user-defined"];
        this.obsoletes = data.obsoletes;
        this.values = data.values;
        this["is-subcategory"] = data["is-subcategory"];
        this.links = data.links;
    }
}

export interface IVariable {
    id: string;
    name: string;
    category: string|null;
    scope: {
        type: 'global'|'full-game'|'all-levels'|'single-level';
        level?: string;
    };
    mandatory: boolean;
    'user-defined': boolean;
    obsoletes: boolean;
    values: {
        values: {
            [key: string]: IVariableValue;
        };
        default: string|null;
    };
    'is-subcategory': boolean;
    links: Link[];
}

export interface IVariableValue {
    label: string;
    rules: string;
    flags: {
        miscellaneous: boolean;
    }
}