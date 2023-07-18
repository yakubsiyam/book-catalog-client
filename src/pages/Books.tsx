import ProductCard from '@/components/BookCard';
import { useGetSearchedBookQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';
import Loader from '@/shared/Loader';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Books() {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);

  // For searching
  const { data, isLoading } = useGetSearchedBookQuery(search, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });

  useEffect(() => {
    console.log('all books data', data);
    setBookData(data?.data);
  }, [data]);

  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="max-w-7xl mx-auto relative">
      {isLoading && <Loader />}
      {user?.email && (
        <Link to="/add-book">
          <button className="mt-5 w-1/7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
            Add Your Book
          </button>
        </Link>
      )}
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-2xl uppercase">Search And Filter</h1>
            <div className="flex items-center space-x-2 mt-3">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {bookData?.map((book: IBook) => (
            <ProductCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
