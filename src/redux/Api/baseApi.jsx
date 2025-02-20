import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://143.110.241.146:5055/",
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview"],
  endpoints: () => ({}),
});

export const imageUrl = "http://143.110.241.146:5055/";
