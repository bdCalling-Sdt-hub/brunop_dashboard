import { baseApi } from "./baseApi";

const customerManageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: ({ isPremium, searchTerm }) => {
        let url;
        if (isPremium) {
          url = `/dashboard/get_user_list?customerType=PREMIUM&searchTerm=${searchTerm}`;
        } else {
          url = `/dashboard/get_user_list?customerType=REGULAR&searchTerm=${searchTerm}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["customer"],
    }),
    blockUnblockCustomer: builder.mutation({
      query: (data) => {
        return {
          url: "/dashboard/block-unblock",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["customer"],
    }),
    sendRequestUser: builder.mutation({
      query: (payload) => {
        // console.log("Payload:", payload);

        return {
          url: `/dashboard/send_premium_request?userId=${payload.userId}`,
          method: "PATCH",
          body: payload.data,
        };
      },
    }),
  }),
});
export const {
  useGetAllCustomerQuery,
  useBlockUnblockCustomerMutation,
  useSendRequestUserMutation,
} = customerManageApi;
