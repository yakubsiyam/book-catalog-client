import BookReview from '@/components/BookReview';
// import { Button } from '@/components/ui/button';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
// import { IProduct } from '@/types/globalTypes';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookDummy from '@/assets/images/bookDummy.jpg';

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
