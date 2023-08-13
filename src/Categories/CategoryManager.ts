import { SpeedrunAPIClient } from "../Client";
import { ICategory, Category } from "./Category";

export class CategoryManager {
    private client: SpeedrunAPIClient;

    constructor(client: SpeedrunAPIClient) {
        this.client = client;
    }
}