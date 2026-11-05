import { baseApi } from "../baseApi";

export interface OwnerRequest {
  id: string;
  userId: string;
  businessName: string;
  licenseDocUrl?: string;
  verificationStatus: string;
  commissionRate: number;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  };
}

export interface OwnerRequestsResponse {
  data: OwnerRequest[];
  meta?: {
    total?: number;
  };
}

export type OwnerRequestDetailsResponse =
  | OwnerRequest
  | { data: OwnerRequest };

export const adminDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ownerRequests: builder.query<OwnerRequestsResponse, void>({
      query: () => ({
        url: "/owner/owner-request",
        method: "GET",
      }),
      providesTags: ["owner"],
    }),
    singleOwnerRequests: builder.query<OwnerRequestDetailsResponse, string>({
      query: (id: string) => ({
        url: `/owner/owner-request/${id}`,
        method: "GET",
      }),
      providesTags: ["owner"],
    }),
    approveOwnerApplication: builder.mutation<unknown, string>({
      query: (userId) => ({
        url: `/admin/owner-applications/${userId}/approve`,
        method: "PATCH",
      }),
      invalidatesTags: ["owner"],
    }),
    rejectOwnerApplication: builder.mutation<unknown, string>({
      query: (userId) => ({
        url: `/admin/owner-applications/${userId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["owner"],
    }),
  }),
});

export const {
  useOwnerRequestsQuery,
  useSingleOwnerRequestsQuery,
  useApproveOwnerApplicationMutation,
  useRejectOwnerApplicationMutation,
} = adminDashboardApi;
