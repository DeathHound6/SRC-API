module.exports = class Run {
    constructor(data) {
        this.id = data.id;
        this.weblink = data.weblink;
        this.game = data.game;
        this.level = data.level;
        this.category = data.category;
        this.videos = data.videos;
        this.comment = data.comment;
        this.status = data.status;
        this.players = data.players;
        this.date = data.date;
        this.submitted = data.submitted;
        this.times = data.times;
        this.system = data.system;
        this.splits = data.splits;
        this.values = data.values;
        this.links = data.links;
    }
}