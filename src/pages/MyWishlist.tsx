import { useGetMyAllWishlistQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import MyWishlistRow from './MyWishlistRow';

const MyWishlist = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { data } = useGetMyAllWishlistQuery(user?.email, { refetchOnMountOrArgChange: true, pollingInterval: 30000, });
  const books = data?.data;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-center mb-3 text-2xl font-bold">My WishList Table</h1>
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
              Publication Date
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book: IBook) => (
            <MyWishlistRow book={book} key={book?._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWishlist;
