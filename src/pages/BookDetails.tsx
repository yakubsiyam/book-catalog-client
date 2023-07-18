import BookReview from '@/components/BookReview';
import { useParams } from 'react-router-dom';
import bookDummy from '@/assets/images/bookDummy.jpg';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';

export default function BookDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  const book = data?.data;

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.img?.length !== 0 ? book?.img : bookDummy} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Genre: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publicationDate}</p>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
