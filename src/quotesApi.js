import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.quotable.io/",
  }),
  endpoints: (builder) => ({
    RandomQuote: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useRandomQuoteQuery } = quotesApi;
