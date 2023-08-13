import { SpeedrunAPIClient } from "../Client";
import { Run, RunData, RunStatus } from "./Run";
import { HTTPMethod } from "../../util/HTTP";
import { Direction } from "readline";

export class RunManager {
    private client;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    async GetRuns(params: GetRunsQuery): Promise<Run[]> {
        if (!params.orderby)
            params.orderby = "game";
        if (!params.direction)
            params.direction = "desc";
        const query = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            query.append(key, String(value));
        const res = this.client._request(`runs?${query.toString()}`, HTTPMethod.GET, {});
        return (await res).data.data.map((e: RunData) => new Run(e));
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
    orderby: "game"|"category"|"level"|"platform"|"region"|"emulated"|"date"|"submitted"|"status"|"verify-date",
    direction: Direction,
    status: RunStatus|null,
    emulated: Boolean|null,
    region: String|null,
    platform: String| null,
    category: String| null,
    level: String|null,
    game: String|null,
    examiner: String|null,
    guest: String|null,
    user: String|null
}

export interface PostRunData {

}