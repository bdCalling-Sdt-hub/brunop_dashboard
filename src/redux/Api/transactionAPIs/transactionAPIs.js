import { baseApi } from "../baseApi";

const transactionAPIs = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTransactionOrders: builder.query({
      query: () => ({
        url: "/payment/get-transition-list",
        method: "GET",
      }),

      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionOrdersQuery } = transactionAPIs;
