import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { IBook } from '@/types/globalTypes';
import bookDummy from '@/assets/images/bookDummy.jpg';
import { useAppSelector } from '@/redux/hook';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const handleAddBookWishlist = (book: IBook) => {
    toast({
      description: 'Book Added Your Wishlist',
    });
  };

  const { user } = useAppSelector((state) => state.user);

  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img
            src={book?.img?.length !== 0 ? book?.img : bookDummy}
            alt="book"
            className="h-[250px] mx-auto w-auto"
          />
          <h1 className="text-xl font-semibold mt-2">{book?.title}</h1>
        </Link>
        <p>Author: {book?.author}</p>
        <p className="text-sm">Genre: {book?.genre}</p>
        <p className="text-sm">Publication Date: {book?.publicationDate}</p>
        {user?.email && (
          <Button variant="default" onClick={() => handleAddBookWishlist(book)}>
            Add to wishlist
          </Button>
        )}
      </div>
    </div>
  );
}
