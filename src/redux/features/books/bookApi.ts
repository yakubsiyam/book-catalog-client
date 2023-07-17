import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/book',
    }),
    getMyAllBooks: builder.query({
      query: (userEmail) => `/book/my-book/${userEmail}`,
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
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useAddNewBookMutation,
  useGetMyAllBooksQuery,
} = bookApi;
