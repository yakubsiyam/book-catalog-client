import ProductCard from '@/components/BookCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewTenBooks() {
  const { isLoading, error, data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

  const booksData = data?.data;

  const firstTenBooks = booksData?.slice(0, 10);
  console.log(firstTenBooks);

  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="grid grid-cols-4 gap-10 pb-20">
      {firstTenBooks?.map((book: IBook) => (
        <ProductCard book={book} key={book._id} />
      ))}
    </div>
  );
}
