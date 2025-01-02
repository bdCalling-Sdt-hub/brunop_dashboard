import { baseApi } from "./baseApi";

const productManageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: ({ page, searchTerm }) => {
                return {
                    url: `/products/get-all?page=${page}&searchTerm=${searchTerm}`,
                    method: "GET"
                }
            },
            providesTags: ['AllProduct']
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/products/delete/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['AllProduct']
        }),
        addNewProduct : builder.mutation({
            query : (formData)=>{
                return {
                    url : '/products/create',
                    method : 'POST',
                    body :  formData
                }
            },
            invalidatesTags: ['AllProduct']
        }),
        getSingleProduct : builder.query({
            query : (id)=>{
                return {
                    url : `/products/get-details-admin/${id}`,
                    method : "GET"
                }
            }
        }),
        updateProducts :  builder.mutation({
            query : ({id, data})=>{
                return {
                    url : `/products/update/${id}`,
                    method : 'PATCH',
                    body : data
                }
            },
            invalidatesTags: ['AllProduct']

        })
    })
})
export const { useGetAllProductQuery, useDeleteProductMutation , useAddNewProductMutation , useGetSingleProductQuery , useUpdateProductsMutation } = productManageApi