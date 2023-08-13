import { default as axios } from "axios";

export enum HTTPMethod {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE
}

export enum APIVersion {
    V1 = "v1",
    V2 = "v2"
}

export async function _request(apiVersion: APIVersion, apiKey: string, endpoint: string, method: HTTPMethod, data: object) {
    const url = `https://speedrun.com/api/${apiVersion}/${endpoint}`;
    const config = { headers: { "X-API-Key": apiKey, Accept: "application/json" }};
    let res: Promise<any> | undefined = undefined;
    if (method == HTTPMethod.GET)
        res = axios.get(url, config);
    else if (method == HTTPMethod.DELETE)
        res = axios.delete(url, config);
    else if (method == HTTPMethod.PATCH)
        res = axios.patch(url, data, config);
    else if (method == HTTPMethod.POST)
        res = axios.post(url, data, config);
    else if (method == HTTPMethod.PUT)
        res = axios.put(url, data, config);
    return await res;
}

export async function _formatQueryParameters(params: object): Promise<URLSearchParams> {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(params))
        query.append(key, String(value));
    return query;
}