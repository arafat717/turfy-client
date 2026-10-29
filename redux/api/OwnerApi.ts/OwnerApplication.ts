/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../baseApi";



export const ownerApplication = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    ownerApplication: builder.mutation({
      query: (credentials: any) => ({
        url: "/owner/owner-request",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["owner"],
    }),
  }),
});

export const {
    useOwnerApplicationMutation
} = ownerApplication;
