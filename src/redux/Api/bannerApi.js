import { baseApi } from "./baseApi";

const bannerApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllBanner : builder.query({
            query  :()=>{
                return {
                    url : '/adds/all-adds',
                    method : 'GET'
                }
            },
            providesTags : ['banner']
        }),
        deleteBanner :  builder.mutation({
            query : (id)=>{
                return {
                    url : `/adds/delete-adds/${id}`,method : 'DELETE'
                }
            },
            invalidatesTags : ['banner']
        })
     })
})
export const { useGetAllBannerQuery , useDeleteBannerMutation } = bannerApi; 