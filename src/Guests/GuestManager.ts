import { SpeedrunAPIClient } from "../Client";
import { HTTPMethod } from "../util/HTTP";
import { Guest } from "./Guest";

export class GuestManager {
    private client: SpeedrunAPIClient;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    /**
     * Get a single guest runner by their username
     */
    async GetGuestByName(name: string): Promise<Guest> {
        const res = await this.client._request(`guests/${name}`, HTTPMethod.GET, {});
        return new Guest((await res).data.data);
    }
}