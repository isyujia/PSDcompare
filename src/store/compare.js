import { reqWorkCode, reqFreshWorkObj, reqCompareStatus } from '@/api'

const state = {
    /**
     * {
            "id": 109,
            "workCode": "dd4a376b-4ffb-44f4-9303-6b0bd50f3c8d",
            "orderId": 362,
            "status": "未支付",
            "serialNumber": "2022033100465275",
            "createTime": "2022-03-31T00:46:52.041",
            "path": null,
            "fee": null,
            "title": null
        }
     */
    workObj: {}
}

const mutations = {
    setWorkObj(state, data) {
        state.workObj = data
    },
    setWorkStatus(state, status) {
        state.workObj.status = status
    },
}

const actions = {
    getWorkCode(context) {
        reqWorkCode().then((result) => {
            // console.log(result);
            if (result.status == 200) {
                context.commit('setWorkObj', result.data.data)
            }
        });
    },
    freshWorkObj(context, compareId) {
        return reqFreshWorkObj(compareId).then((r) => {
            if (r.status == 200) {
                context.commit('setWorkObj', r.data.data)
            }
        })
    },
    freshCompareWorkStatus(context, compareResultUrl) {
        let o = context.state.workObj;
        o.compareResultUrl = compareResultUrl
        context.commit('setWorkObj', o)
    },
    reqAndRreshCompareWorkStatus(context, workCode) {
        return reqCompareStatus(workCode).then((r) => {
            if (r.data.errcode == 0 && r.data.data.urls.length > 0) {
                let o = context.state.workObj;
                o.compareResultUrl = r.data.data.urls[0]
                context.commit('setWorkObj', o)
            }
        });
    },
    async reqAndRreshCompareWorkWithStatus(context, compareId) {
        await context.dispatch('freshWorkObj', compareId)
        return context.dispatch('reqAndRreshCompareWorkStatus', state.workObj.workCode)
    }
}

const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}