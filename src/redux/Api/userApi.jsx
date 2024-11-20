import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        loginAdmin : builder.mutation({
            query : (data)=>{
               return {
                url : '/auth/login',
                method : 'POST',
                body : data
               } 
            }
        }),
        getProfile :  builder.query({
            query : ()=>{
                return{
                    url : '/auth/profile',
                    method : 'GET'
                }
            },
            providesTags : ['updateProfile']
        }),
        forgotPassword : builder.mutation({
            query : (email)=>{
                return {
                    url : '/auth/forgot-password',
                    method : 'POST',
                    body : email
                }
            }
        }),
        verifyOtp : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/verify-otp',
                    method : 'POST',
                    body :  data
                }
            }
        }) ,
        resetPassword :  builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/reset-password',
                    method : 'POST',
                    body : data
                }
            }
        }),
        updateProfile : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/edit-profile',
                    method : 'PATCH',
                    body : data
                }
            },
            invalidatesTags : ['updateProfile']
        }),
        changePassword :  builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/change-password',
                    method : 'PATCH',
                    body : data
                }
            }
        })
    })
})

export const {useLoginAdminMutation , useGetProfileQuery , useForgotPasswordMutation , useVerifyOtpMutation , useResetPasswordMutation , useUpdateProfileMutation , useChangePasswordMutation

 } = useApi