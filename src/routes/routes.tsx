import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Books';
import Checkout from '@/pages/AddNewBook';
import Signup from '@/pages/Signup';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import BookDashboard from '@/pages/BookDashboard';
import MyWishlistDashBoard from '@/pages/MyWishlistDashBoard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Products />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/add-book',
        element: <Checkout />,
      },
      {
        path: '/dashboard',
        element: <BookDashboard />,
      },
      {
        path: '/dashboard/my-wishlist',
        element: <MyWishlistDashBoard />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
