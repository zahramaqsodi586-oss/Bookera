import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F0E8]">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div>
            <p className="uppercase tracking-[4px] text-xs text-[#A36B45] mb-6">
              A World Between Pages
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#29231F]">
              Every Book
              <br />
              Opens a<span className="italic text-[#A36B45]"> New World.</span>
            </h1>

            <p className="text-[#6D6258] leading-8 mt-7 max-w-lg">
              Discover stories that inspire, ideas that stay, and books that
              take you somewhere beyond imagination.
            </p>

            <Link
              to="/books"
              className="inline-flex items-center gap-3 mt-10 bg-[#29231F] text-white px-8 py-4 rounded-full text-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#A36B45] hover:shadow-xl"
            >
              Explore Books
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000"
              alt="Books arranged on a table"
              className="w-full h-[520px] object-cover rounded-t-full shadow-xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-[#E8DCCB] p-6 rounded-xl shadow-lg">
              <p className="font-serif italic text-xl text-[#29231F]">
                Find your next story.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-[#EAE2D7] py-20 px-8 text-center">
          <p className="text-xs uppercase tracking-[4px] text-[#A36B45] mb-5">
            Welcome to Bookora
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-[#29231F] max-w-3xl mx-auto leading-tight">
            More than books.
            <br />A place for curious minds.
          </h2>

          <p className="text-[#6D6258] max-w-xl mx-auto mt-6 leading-8">
            Every story has something to offer. Find inspiration, explore new
            perspectives, and enjoy the beauty of reading.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
