import { baseApi } from "./baseApi";

const manageManagerApi =  baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllManager  : builder.query({
            query : ({searchTerm , page})=>{
                return {
                    url : `/dashboard/get_all_manager?searchTerm=${searchTerm}&page=${page}`, method : 'GET'
                }
            },
            providesTags :['manager']
        }),
        getAllFeedBack : builder.query({
            query :()=>{
                return {
                    url : '/notification/feedback',
                    method : "GET"
                }
            },
            providesTags : ['feedback']
        }),
        replyFeedback  : builder.mutation({
            query : (data)=>{
                return {
                    url : '/notification/replay-feedback',
                    method :'PATCH',
                    body : data
                }
            },
            invalidatesTags : ['feedback']
        }),
        createManager :  builder.mutation({
            query :(data)=>{
                return {
                    url : '/auth/register',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags : ['manager']
        })
    })
})

export const { useGetAllManagerQuery , useGetAllFeedBackQuery , useReplyFeedbackMutation , useCreateManagerMutation} = manageManagerApi