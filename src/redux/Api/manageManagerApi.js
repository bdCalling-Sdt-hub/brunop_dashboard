import { baseApi } from "./baseApi";

const manageManagerApi =  baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllManager  : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get_all_manager', method : 'GET'
                }
            }
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
        })
    })
})

export const { useGetAllManagerQuery , useGetAllFeedBackQuery , useReplyFeedbackMutation } = manageManagerApi