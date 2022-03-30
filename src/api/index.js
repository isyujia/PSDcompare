import requests from "./axios"

export const reqCompareHistory = (currentPage, PageSize) => requests({ url: `/compare/${currentPage}/${PageSize}`, type: 'get' })

export const SearchHistory = ({ pageSize, currentPage, keywords, startTime, endTime }) => requests.post('/compare/search', { keyWords: keywords, maxPage: pageSize, startPage: currentPage, startTime, endTime })

export const checkOrderStatus = ({ outTradeNo }) => requests.get('/order-log/checkOrderStatus', { params: { outTradeNo } })

export const getWorkCode = () => requests.get('/compare/getWorkCode')

export const selectCompareLog = (currentPage, pageSize) => requests.get(`/compare/${currentPage}/${pageSize}`)