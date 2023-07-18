import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.jpg';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import NewTenBooks from './NewTenBooks';
export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            DECIDING <br /> WHAT TO READ NEXT?
          </h1>
          <p className="text-secondary font-semibold text-xl">
            You’re in the right place
          </p>
          <div className="text-primary mt-20">
            <p>Tell us what titles or genres you’ve enjoyed in the past, </p>
            <p>and we’ll give you surprisingly insightful recommendations.</p>
          </div>
          <Button>Read More</Button>
        </div>
        <div className="relative -right-14">
          <img className="object-scale-down h-120 w-96" src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-black text-primary uppercase mb-10">
            Recently Add Books
          </h1>
          <NewTenBooks />
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all Books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
