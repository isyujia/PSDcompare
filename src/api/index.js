import requests from "./axios"

export const reqCompareHistory = (currentPage, PageSize) => requests({ url: `/compare/${currentPage}/${PageSize}`, type: 'get' })

export const SearchHistory = ({pageSize, currentPage, keywords, startTime, endTime}) => requests.post('/compare/search', { keywords, maxPage: pageSize, startPage: currentPage, startTime, endTime })


