import { ENUM_TAG_TYPE } from "../tagTypes";
import { baseApi } from "./baseApi";

const CART_API = "/carts";
const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCart: build.mutation({
      query: (data: Record<string, any>) => ({
        url: CART_API,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.cart],
    }),
    getCarts: build.query({
      query: (arg: Record<string, any>) => ({
        url: CART_API,
        method: "GET",
        params: arg,
      }),
      providesTags: [ENUM_TAG_TYPE.cart],
    }),
    getCart: build.query({
      query: (id: string) => ({
        url: `${CART_API}/${id}`,
        method: "GET",
      }),
      providesTags: [ENUM_TAG_TYPE.cart],
    }),
    updateCart: build.mutation({
      query: ({ id, data }) => ({
        url: `${CART_API}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.cart],
    }),
    deleteCart: build.mutation({
      query: (id: string) => ({
        url: `${CART_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ENUM_TAG_TYPE.cart],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
