import { defineStore } from "pinia";

export const hyyStore = defineStore("hyyStore", {
    state: () => {
        return {
            list: ["黄黄", "小红", "无脑程序员"]
        }
    },
    getters: {},
    actions: {}
});