cc.Class({
    extends: cc.Component,

    properties: {
        tipsLabel: {displayName: "提示", default: null, type: cc.Label},
        word: {displayName: "提示语", default: ""},
    },


    start() {
        this.tipsLabel.string = this.word;
        // this.tipsLabel.string = this.word + "- new Version";
    },

    update(dt) {

    },
});
