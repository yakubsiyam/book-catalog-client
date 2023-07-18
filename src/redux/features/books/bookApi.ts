import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/book',
      providesTags: ['addBook'],
    }),
    //* get searched book
    getSearchedBook: builder.query({
      query: (data) => `/book?searchTerm=${data}`,
      providesTags: ['addBook'],
    }),
    getMyAllBooks: builder.query({
      query: (userEmail) => `/book/my-book/${userEmail}`,
      providesTags: ['addBook'],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['addBook'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['addBook'],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query({
      query: (id) => `book/comment/${id}`,
      providesTags: ['comments'],
    }),
    addNewWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['addWishlist'],
    }),
    getMyAllWishlist: builder.query({
      query: (userEmail) => `/wishlist/${userEmail}`,
      providesTags: ['addWishlist'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useAddNewBookMutation,
  useGetMyAllBooksQuery,
  useAddNewWishlistMutation,
  useGetMyAllWishlistQuery,
  useDeleteBookMutation,
  useGetSearchedBookQuery,
} = bookApi;
