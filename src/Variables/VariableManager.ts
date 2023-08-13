import { SpeedrunAPIClient } from "../Client";
import { HTTPMethod } from "../util/HTTP";
import { Variable } from "./Variable";

export class VariableManager {
    private client: SpeedrunAPIClient;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    /**
     * Get a single variable by its ID
     */
    async GetVariableById(id: string): Promise<Variable> {
        const res = this.client._request(`variables/${id}`, HTTPMethod.GET, {});
        return new Variable((await res).data.data);
    }
}