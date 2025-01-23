import { baseApi } from "../baseApi";

const shippingAPIs = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GetAllOrders: builder.query({
    //   query: () => ({
    //     url: "/orders/get-all",
    //     method: "GET",
    //   }),
    // }),

    sendShippingNotification: builder.mutation({
      query: (payload) => ({
        url: `/dashboard/send-provide-shipping-info-notification/${payload.orderId}`, // API endpoint
        method: "POST", // HTTP method
        // body: payload.data, // Request body
      }),
    }),

    GetAllOrders: builder.query({
      query: ({ page, searchTerm }) => {
        return {
          url: `/orders/get-all?page=${page}&searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
    }),

    CreateShippingCost: builder.mutation({
      query: (shippingData) => {
        const { orderId, amount } = shippingData;
        // Construct the URL with query parameters
        const url = `/dashboard/charge-shipping-cost?orderId=${orderId}&amount=${amount}`;

        return {
          url,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useCreateShippingCostMutation,
  useSendShippingNotificationMutation,
} = shippingAPIs;
