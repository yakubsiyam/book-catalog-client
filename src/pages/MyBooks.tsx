import { useGetMyAllBooksQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import MyBooksRow from './MyBooksRow';

const MyBooks = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { data } = useGetMyAllBooksQuery(user?.email);
  const books = data?.data;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Book Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author Name
            </th>
            <th scope="col" className="px-6 py-3">
              Genre
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book: IBook) => (
            <MyBooksRow book={book} key={book?._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
