const MyWishlistRow = ({ book }: any) => {
  console.log(book.book);
  const { title, author, genre, publicationDate } = book.book;
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-4">{author}</td>
      <td className="px-6 py-4">{genre}</td>
      <td className="px-6 py-4">{publicationDate}</td>
    </tr>
  );
};

export default MyWishlistRow;
