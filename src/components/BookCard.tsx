import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { IBook } from '@/types/globalTypes';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const handleAddBookWishlist = (book: IBook) => {
    toast({
      description: 'Book Added Your Wishlist',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <h1 className="text-xl font-semibold">{book?.title}</h1>
        <p>Author: {book?.author}</p>
        <p className="text-sm">Genre: {book?.genre}</p>
        <p className="text-sm">Publication Date: {book?.publicationDate}</p>
        <Link to={`/book-details/${book._id}`} className="w-full">
          <Button variant="default">See Details</Button>
        </Link>
        <Button variant="default" onClick={() => handleAddBookWishlist(book)}>
          Add to wishlist
        </Button>
      </div>
    </div>
  );
}
