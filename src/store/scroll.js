import { defineStore } from "pinia";
import { hyyStore } from './Hyy'
export const userStore = defineStore({
    id: 'scroll',//命名,唯一
    state: () => {
        return {
            X: 0,
            Y:0
        }
    },
    getters: {
      
    },

    actions: {
        setUserinfor(data) {
            //可直接通过this访问state属性
            this.X = data.X
            //可以直接导入访问Hyy的参数
            // console.log(hyyStore().list);
        }
    }
})