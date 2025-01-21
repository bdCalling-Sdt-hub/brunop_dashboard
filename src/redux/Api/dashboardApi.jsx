import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    totalUserCount: builder.query({
      query: () => {
        return {
          url: "/dashboard/count",
          method: "GET",
        };
      },
    }),
    getUserGrowth: builder.query({
      query: (year) => {
        return {
          url: `/dashboard/user-growth?year=${year}`,
          method: "GET",
        };
      },
    }),

    getIncomeGrowth: builder.query({
      query: (year) => {
        return {
          url: `/dashboard/income-overview?year=${year}`,
          method: "GET",
        };
      },
    }),

    getPendingPremierUser: builder.query({
      query: () => {
        return {
          url: "/dashboard/padding_premium_request",
          method: "GET",
        };
      },
    }),

    /** category api integration */
    getAllCategory: builder.query({
      query: () => {
        return {
          url: "/category/get-all",
          method: "GET",
        };
      },
      providesTags: ["allCategory"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/category/add-category",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/category/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    editCategory: builder.mutation({
      query: ({ formData, id }) => {
        console.log(formData, id);
        return {
          url: `/category/edit/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    getSingleSubscribePlan: builder.query({
      query: (id) => {
        return {
          url: `/plan/subscribe/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    approveDeclineMemberRequest: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `/plan/subscribe/${id}/request?status=${status}`,
          method: "PATCH",
        };
      },
    }),
    /** Get all Notification */
    getAllNotification: builder.query({
      query: () => {
        return {
          url: "/notification/get-all-notifications",
          method: "GET",
        };
      },
      providesTags: ["notification"],
    }),
    /** Delete Notification */
    deleteNotification: builder.mutation({
      query: (id) => {
        return {
          url: `/notification/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["notification"],
    }),
    /** Get all user */
    getAllUser: builder.query({
      query: ({ search }) => {
        return {
          url: `/auth/users?searchTerm=${search}`,
          method: "GET",
        };
      },
      providesTags: ["blockUser"],
    }),
    /** Block user */
    blockUser: builder.mutation({
      query: (id) => {
        return {
          url: `/auth/user-block-unblock/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["blockUser"],
    }),

    /** Setting APIs */
    getAboutUs: builder.query({
      query: () => {
        return {
          url: "/dashboard/get-terms-conditions",
          method: "GET",
        };
      },
      providesTags: ["aboutUs"],
    }),
    updateAboutUs: builder.mutation({
      query: (data) => {
        return {
          url: "/dashboard/add-terms-conditions",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["aboutUs"],
    }),
    getRulesAndRegulation: builder.query({
      query: () => {
        return {
          url: "/dashboard/get-privacy-policy",
          method: "GET",
        };
      },

      providesTags: ["terms"],
    }),
    updateRulesAndRegulation: builder.mutation({
      query: (data) => {
        return {
          url: "/dashboard/add-privacy-policy",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useTotalUserCountQuery,
  useGetUserGrowthQuery,
  useGetIncomeGrowthQuery,
  useGetPendingPremierUserQuery,
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useGetSingleSubscribePlanQuery,
  useApproveDeclineMemberRequestMutation,
  useGetAllNotificationQuery,
  useDeleteNotificationMutation,
  useGetAllUserQuery,
  useBlockUserMutation,
  useUpdateAboutUsMutation,
  useGetAboutUsQuery,
  useGetRulesAndRegulationQuery,
  useUpdateRulesAndRegulationMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = useApi;
