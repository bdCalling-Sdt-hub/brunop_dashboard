import { baseApi } from "./baseApi";

const subCategory = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllSubCategory  : builder.query({
            query  :(search)=>{
                let queryParams = '';

                if (search?.value !== 'all') {
                    const value = search?.value;
                    const label = search?.label;
                    queryParams = `${label}=${value}`;
                }
                return  {
                    url : `/sub-category/get-all${queryParams ? `?${queryParams}` : ''}`,
                    method : 'GET'
                }
            },
            providesTags : ['subCategory']
        }),
        deleteSubCategory :  builder.mutation({
            query : (id)=>{
                return {
                    url : `/sub-category/delete/${id}`,
                    method : 'DELETE'
                }
            },
            invalidatesTags :['subCategory']
        }),
        editSubCategory :  builder.mutation({
            query : ({id, data})=>{
                return {
                    url : `/sub-category/edit/${id}`,
                    method : 'PATCH',
                    body :  data
                }
            },
            invalidatesTags :['subCategory']
        }),
        createSubCategory : builder.mutation({
            query : (data)=>{
                return {
                    url : '/sub-category/add',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags :['subCategory']
        })
        
    })
})
export const {useGetAllSubCategoryQuery , useDeleteSubCategoryMutation , useEditSubCategoryMutation , useCreateSubCategoryMutation} = subCategory