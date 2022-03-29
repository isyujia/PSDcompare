import { requests } from "@/api"

export const reqCompareHistory = (currentPage, PageSize) => requests.get(`/compare/${currentPage}/${PageSize}`)