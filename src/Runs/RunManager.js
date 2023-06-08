const SpeedrunAPIClient = require("../Client");
const Run = require("./Run");

module.exports = class RunManager {
    /**
     * 
     * @param {SpeedrunAPIClient} client 
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Gets a list of matching runs
     * @param {object} params A list of parameters
     * @param {string?} params.user User ID. When given, only returns runs played by that user
     * @param {string?} params.guest When given, only returns runs done by that guest
     * @param {string?} params.examiner User ID. When given, only returns runs examined by that user
     * @param {string?} params.game Game ID. When given, restricts to that game
     * @param {string?} params.level Level ID. When given, restricts to that level
     * @param {string?} params.category Category ID. When given, restricts to that category
     * @param {string?} params.platform Platform ID. When given, restricts to that platform
     * @param {string?} params.region Region ID. When given, restricts to that region
     * @param {bool?} params.emulated When true, only games run on emulator will be returned
     * @param {"new"|"verified"|"rejected"|null} params.status Filter by run status
     * @param {"game"|"category"|"level"|"platform"|"region"|"emulated"|"date"|"submitted"|"status"|"verify-date"} params.orderby Order the returned results
     * @param {"asc"|"desc"} params.direction Ascending or descending order
     * @returns {Promise<Run[]>}
     */
    async GetRuns(params = {}) {
        if (!params.orderby)
            params.orderby = "game";
        if (!params.direction)
            params.direction = "desc";
        const query = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            query.append(key, String(value));
        const res = this.client._request({ endpoint: `runs?${query.toString()}`, method: "get" });
        return (await res).data.map(e => new Run(e));
    }
}