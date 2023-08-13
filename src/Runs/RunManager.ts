import { SpeedrunAPIClient } from "../Client";
import { IRun, RunStatus, Run } from "./Run";
import { HTTPMethod } from "../util/HTTP";
import { Direction, Orderby } from "../util/API";

export class RunManager {
    private client;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    async GetRuns(params: GetRunsQuery): Promise<Run[]> {
        if (!params.orderby)
            params.orderby = Orderby.GAME;
        if (!params.direction)
            params.direction = Direction.DESC;
        const query = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            query.append(key, String(value));
        const res = this.client._request(`runs?${query.toString()}`, HTTPMethod.GET, {});
        return (await res).data.data.map((e: IRun) => new Run(e));
    }

    async GetRunById(id: String): Promise<Run> {
        const res = this.client._request(`runs/${id}`, HTTPMethod.GET, {});
        return new Run((await res).data.data);
    }

    /**
     * Submit a run to the leaderboards
     * 
     * This endpoint requires Authorization
     */
    async PostRun(run: PostRunData): Promise<Run> {

    }
}

export interface GetRunsQuery {
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

export interface PostRunData {

}