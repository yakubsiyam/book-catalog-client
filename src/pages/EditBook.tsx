import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  useAddNewBookMutation,
  useSingleBookQuery,
} from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hook';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditBook() {
  const { id } = useParams();

  const { data, error } = useSingleBookQuery(id);
  const book = data?.data;

  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [publicationDate, setPublicationDate] = useState<string>('');
  const [img, setImg] = useState<string>('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle({ ...book, title: event.target.value });
  };

  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handlePublicationDateChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPublicationDate(event.target.value);
  };

  const handleImgChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setImg(event.target.value);
  };

  const [postNewBook, { isLoading, isError, isSuccess }] =
    useAddNewBookMutation();

  console.log(isLoading, isError, isSuccess);

  const { user } = useAppSelector((state) => state.user);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      title: title,
      author: author,
      genre: genre,
      publicationDate: publicationDate,
      img: img,
      userEmail: user?.email,
    };

    console.log(options);

    postNewBook(options);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationDate('');
    setImg('');
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-lg w-full"></div>
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl mb-2 text-center">Edit Book</h1>
        <form
          onSubmit={handleSubmit}
          className="h-[50vh] border border-gray-300 rounded-md p-10 overflow-auto"
        >
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Title</Label>
                <Input
                  onChange={handleTitleChange}
                  value={book.title}
                  type="text"
                  id="name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="name">Author</Label>
                <Input
                  onChange={handleAuthorChange}
                  value={author}
                  type="text"
                  id="name"
                  className="mt-2"
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Genre</Label>
                <Input
                  onChange={handleGenreChange}
                  value={genre}
                  type="text"
                  id="name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="name">Publication Date</Label>
                <Input
                  onChange={handlePublicationDateChange}
                  value={publicationDate}
                  type="text"
                  id="name"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Image Link</Label>
            <Textarea
              onChange={handleImgChange}
              value={img}
              id="name"
              className="mt-2"
            />
          </div>
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Your Book
          </button>
        </form>
      </div>
    </div>
  );
}
