import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/book',
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `book/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    // getComment: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `book/comment/${id}`,
    //     method: 'GET',
    //   }),
    //   invalidatesTags: ['comments'],
    // }),
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
} = bookApi;
