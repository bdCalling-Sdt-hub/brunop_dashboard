import { baseApi } from "./baseApi";

const productManageApi = baseApi.injectEndpoints({
    endpoints  :(builder)=>({
        getAllProduct : builder.query({
            query : ({page , searchTerm})=>{
                return {
                    url : `/products/get-all?page=${page}&searchTerm=${searchTerm}`,
                    method : "GET"
                }
            }
        })
    })
})
export const { useGetAllProductQuery } = productManageApi