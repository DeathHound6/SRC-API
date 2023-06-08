const axios = require("axios").default;

module.exports = class SpeedrunAPIClient {
    /**
     * @param {string} apiKey Your API Key. Obtained from https://www.speedrun.com/user/{Username}/settings/apikey
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiVersion = "v1";
    }

    /**
     * @private
     * @param {object} options
     * @param {string} options.endpoint
     * @param {"get"|"post"|"delete"|"put"|"patch"} options.method
     * @param {object} options.data
     * @param {Function?} callback 
     * @returns {Promise|null}
     */
    _request({ endpoint, method, data }, callback) {
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

        if (callback)
            res.then(callback);
        else
            return res;
    }
}