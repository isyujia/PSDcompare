import requests from "./axios"
let backgroundUrl = 'http://127.0.0.1:8081'
export const reqCompareHistory = (currentPage, PageSize) => requests({ url: `/compare/${currentPage}/${PageSize}`, type: 'get' })

export const SearchHistory = ({ pageSize, currentPage, keywords, startTime, endTime }) => requests.post('/compare/search', { keyWords: keywords, maxPage: pageSize, startPage: currentPage, startTime, endTime })

export const checkOrderStatus = ({ outTradeNo }) => requests.get('/order-log/checkOrderStatus', { params: { outTradeNo } })

export const reqWorkCode = () => requests.get('/compare/getWorkCode')

export const selectCompareLog = (currentPage, pageSize) => requests.get(`/compare/${currentPage}/${pageSize}`)

export const reqQRCodeUrl = (id) => `${backgroundUrl}/compare/getQRCode?id=${id}&size=250`

export const reqQRCode = (id) => requests.get(`/compare/getQRCode?id=${id}&size=250`)

//轮询支付状态
export const reqGetCompareOrderStatus = (compareId) => requests.get('/compare/getStatus', { params: { id: compareId } })

//刷新workObj对象，获取两个文件码
export const reqFreshWorkObj = (id) => requests.get(`/compare/getFileCodes`, { params: { id } })

//上传对比文件
export const reqUploadFile = ({ file, workcode, filecode }) => {
    let form = new FormData()
    form.append('file', file)
    form.append('workcode', workcode)
    form.append('filecode', filecode)
    return requests.post('/cadpare/upload', form, { baseURL: 'http://139.9.203.100:9721' })
}

//查询对比状态
export const reqCompareStatus = (workcode) => requests.get('/cadpare/status', { params: { workcode }, baseURL: 'http://139.9.203.100:9721' })

//启动对比任务
export const reqStartCompare = ({ workcode, pair }) => requests.post('/cadpare/start', { workcode, pair }, { baseURL: 'http://139.9.203.100:9721' })

//下载结果
export const reqCompareResultDownload = (workcode) => requests.get('/cadpare/download', { params: { workcode }, baseURL: 'http://139.9.203.100:9721' })

export const reqDownloadUrl = (compareId, workcode) => `${backgroundUrl}/compare/download?id=${compareId}&workcode=${workcode}`