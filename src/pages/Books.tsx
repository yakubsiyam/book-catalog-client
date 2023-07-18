import ProductCard from '@/components/BookCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

export default function Books() {
  const { isLoading, error, data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

  const booksData = data?.data;

  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="max-w-7xl mx-auto relative">
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
            <h1 className="text-2xl uppercase">Availability</h1>
            <div className="flex items-center space-x-2 mt-3">
              <Switch id="in-stock" />
              <Label htmlFor="in-stock">In stock</Label>
            </div>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-2xl uppercase">Price Range</h1>
            <div className="max-w-xl">
              <Slider
                defaultValue={[150]}
                max={150}
                min={0}
                step={1}
                onValueChange={(value) => handleSlider(value)}
              />
            </div>
            {/* <div>From 0$ To {priceRange}$</div> */}
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {booksData?.map((book: IBook) => (
            <ProductCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
