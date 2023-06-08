const axios = require("axios").default;

const RunManager = require("./Runs/RunManager");

module.exports = class SpeedrunAPIClient {
    /**
     * @param {string} apiKey Your API Key. Obtained from https://www.speedrun.com/user/{Username}/settings/apikey
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiVersion = "v1";

        this.RunManager = new RunManager();
    }

    /**
     * @private
     * @param {object} options
     * @param {string} options.endpoint
     * @param {"get"|"post"|"delete"|"put"|"patch"} options.method
     * @param {object} options.data
     * @returns {Promise}
     */
    async _request({ endpoint, method, data }) {
        const url = `https://speedrun.com/api/${this.apiVersion}/${endpoint}`;
        const config = { headers: { "X-API-Key": this.apiKey, Accept: "application/json" }};
        let res = new Promise();
        if (method == "get")
            res = axios.get(url, config);
        else if (method == "delete")
            res = axios.delete(url, config);
        else if (method == "patch")
            res = axios.patch(url, data, config);
        else if (method == "post")
            res = axios.post(url, data, config);
        else if (method == "put")
            res = axios.put(url, data, config);
        return await res;
    }
}