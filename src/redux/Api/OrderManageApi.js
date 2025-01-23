import { baseApi } from "./baseApi";

const orderManageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: ({ page, searchTerm }) => {
        return {
          url: `/orders/get-all?page=${page}&searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    updateOrderStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/orders/update-status`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});
export const { useGetAllOrderQuery, useUpdateOrderStatusMutation } =
  orderManageApi;
