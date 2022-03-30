import { reqWorkCode, reqFreshWorkObj } from '@/api'

export default {
    state: {
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
    },
    mutations: {
        setWorkObj(state, data) {
            state.workObj = data
        },
        setWorkStatus(state, status) {
            state.workObj.status = status
        }
    },
    actions: {
        getWorkCode(context) {
            reqWorkCode().then((result) => {
                // console.log(result);
                if (result.status == 200) {
                    context.commit('setWorkObj', result.data.data)
                }
            });
        },
        freshWorkObj(context, compareId) {
            reqFreshWorkObj(compareId).then((r) => {
                if (r.status == 200) {
                    context.commit('setWorkObj', r.data.data)
                }
            })
        }
    },
    getters: {

    },
}