import { SpeedrunAPIClient } from "../Client";
import { IRun, RunStatus, Run, IPlayer } from "./Run";
import { HTTPMethod, _formatQueryParameters } from "../util/HTTP";
import { Direction, Orderby } from "../util/API";

export class RunManager {
    private client: SpeedrunAPIClient;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    /**
     * Get all runs
     */
    async GetRuns(params?: IGetRunsQuery): Promise<Run[]> {
        if (!params)
            params = {'direction': Direction.DESC, 'orderby': Orderby.GAME} as IGetRunsQuery
        const query = await _formatQueryParameters(params);
        const res = await this.client._request(`runs?${query.toString()}`, HTTPMethod.GET, {});
        return (await res).data.data.map((e: IRun) => new Run(e));
    }

    /**
     * Get a single run by it's ID
     */
    async GetRunById(id: String): Promise<Run> {
        const res = await this.client._request(`runs/${id}`, HTTPMethod.GET, {});
        return new Run((await res).data.data);
    }

    /**
     * Submit a run to the leaderboards
     * 
     * This endpoint requires Authorization
     */
    async PostRun(run: IPostRunData): Promise<Run> {
        const res = this.client._request("runs", HTTPMethod.POST, {'run': run});
        // TODO: Add error handling
        return new Run((await res).data.data);
    }
}

export interface IGetRunsQuery {
    orderby: Orderby,
    direction: Direction,
    status: RunStatus|null,
    emulated: boolean|null,
    region: string|null,
    platform: string|null,
    category: string|null,
    level: string|null,
    game: string|null,
    examiner: string|null,
    guest: string|null,
    user: string|null
}

export interface IPostRunData {
    category: string;
    level?: string;
    date?: string;
    region?: string;
    platform?: string;
    verified?: boolean;
    times: {
        realtime?: number,
        'realtime_noloads'?: number,
        ingame?: number
    };
    players?: IPlayer[];
    emulated: boolean;
    video: string;
    comment?: string;
    splitsio?: string;
    variables: {
        [id: string]: IRunVariable
    }
}

export interface IRunVariable {
    type: RunVariableType,
    value: string;
}

export enum RunVariableType {
    PREDEFINED = 'pre-defined',
    USERDEFINED = 'user-defined'
}