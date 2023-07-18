import { api } from '@/redux/api/apiSlice';

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['addWishlist'],
    }),
    // getMyAllBooks: builder.query({
    //   query: (userEmail) => `/book/my-book/${userEmail}`,
    // }),
  }),
});

export const { useAddNewWishlistMutation } = wishlistApi;
