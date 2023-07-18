import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export type CreateBookFormValues = {
  [x: string]: any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img?: string;
  _id: string;
};

export default function EditBook() {
  const { id } = useParams();
  console.log(id);

  const { data, error } = useSingleBookQuery(id);
  console.log(data);
  const book = data?.data;

  console.log(book);

  const { register, handleSubmit } = useForm();

  // const onSubmit = async (bookData: CreateBookFormValues) => {
  //   console.log(bookData);
  //   //   try {
  //   //     const response = await updateBook({ id, bookData }).unwrap();
  //   //     console.log(response.message);
  //   //     handleClose();
  //   //   } catch (error: any) {
  //   //     // console.error(error?.data?.message);
  //   //     setError(error?.data?.message);
  //   //   }
  // };

  console.log(register);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-lg w-full"></div>
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl mb-2 text-center">Edit Book</h1>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="h-[50vh] border border-gray-300 rounded-md p-10 overflow-auto"
        >
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Title</Label>
                <Input
                  defaultValue={book.title}
                  type="text"
                  id="name"
                  className="mt-2"
                  {...register('title')}
                />
              </div>
              <div>
                <Label htmlFor="name">Author</Label>
                <Input
                  defaultValue={book.author}
                  type="text"
                  id="name"
                  className="mt-2"
                  {...register('author')}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Genre</Label>
                <Input
                  defaultValue={book.genre}
                  type="text"
                  id="name"
                  className="mt-2"
                  {...register('genre')}
                />
              </div>
              <div>
                <Label htmlFor="name">Publication Date</Label>
                <Input
                  defaultValue={book.publicationDate}
                  type="text"
                  id="name"
                  className="mt-2"
                  {...register('publicationDate')}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Image Link</Label>
            <Textarea
              defaultValue={book.img}
              id="name"
              className="mt-2"
              {...register('img')}
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
