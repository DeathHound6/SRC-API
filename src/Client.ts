import { APIVersion, HTTPMethod, _request } from "./util/HTTP";
import { RunManager } from "./Runs/RunManager";
import { CategoryManager } from "./Categories/CategoryManager";

export class SpeedrunAPIClient {
    private apiKey: string;
    public RunManager: RunManager;
    public CategoryManager: CategoryManager;

    /**
     * @param {string} apiKey Your API Key. Obtained from https://www.speedrun.com/user/{Username}/settings/apikey
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.CategoryManager = new CategoryManager(this);
        this.RunManager = new RunManager(this);
    }

    async _request(endpoint: string, method: HTTPMethod, data: object) {
        return await _request(APIVersion.V1, this.apiKey, endpoint, method, data);
    }
}
