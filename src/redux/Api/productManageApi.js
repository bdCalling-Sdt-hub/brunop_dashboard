import { baseApi } from "./baseApi";

const productManageApi = baseApi.injectEndpoints({
    endpoints  :(builder)=>({
        getAllProduct : builder.query({
            query : ({page , searchTerm})=>{
                return {
                    url : `/products/get-all?page=${page}&searchTerm=${searchTerm}`,
                    method : "GET"
                }
            },
            providesTags : ['AllProduct']
        }),
        deleteProduct  : builder.mutation({
                query : (id)=>{
                    return {
                        url : `/products/delete/${id}`,
                        method : 'DELETE'
                    }
                },
                invalidatesTags : ['AllProduct']
            })
    })
})
export const { useGetAllProductQuery , useDeleteProductMutation } = productManageApi