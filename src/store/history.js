import { reqCompareHistory } from '@/api'

export default {
    state: {
        historyList: []
    },
    mutations: {
        setHistoryList(state, list) {
            state.historyList = list
        }
    },
    actions: {
        getHistoryList(context, currentPage, PageSize, keyword, dateStart, dateEnd) {
            let result = reqCompareHistory(currentPage, PageSize);
            if (result.code == 200) {
                context.commit('setHistoryList', result)
            }

        }
    },
    getters: {

    },
};