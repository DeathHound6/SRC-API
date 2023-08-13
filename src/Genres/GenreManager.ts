import { SpeedrunAPIClient } from "../Client";
import { Direction } from "../util/API";
import { HTTPMethod, _formatQueryParameters } from "../util/HTTP";
import { Genre, IGenre } from "./Genre";

export class GenreManager {
    private client: SpeedrunAPIClient;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }

    /**
     * Get all genres
     */
    async GetGenres(params?: IGetGenresQuery): Promise<Genre[]> {
        if (!params)
            params = {orderby: 'name', direction: Direction.DESC} as IGetGenresQuery;
        const query = await _formatQueryParameters(params);
        const res = this.client._request(`genres?${query.toString()}`, HTTPMethod.GET, {});
        return (await res).data.data.map((e: IGenre) => new Genre(e));
    }

    /**
     * Get a single genre by its ID
     */
    async GetGenreById(id: string): Promise<Genre> {
        const res = await this.client._request(`genres/${id}`, HTTPMethod.GET, {});
        return new Genre((await res).data.data);
    }
}

export interface IGetGenresQuery {
    orderby: 'name',
    direction: Direction
}