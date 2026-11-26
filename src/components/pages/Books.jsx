import { useState } from "react";

import { Search } from "lucide-react";
import Navbar from "../Navbar";
import BookCard from "../BookCard";
import Footer from "../Footer";
import { booksData } from "../data/booksData";

const books = Object.entries(booksData).map(([slug, book], index) => ({
  ...book,
  id: index + 1,
  slug,
  price: book.category,
}));

const categories = [
  "All",
  "Fiction",
  "Mystery",
  "Romance",
  "Classic",
  "Self Growth",
];

function Books() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || book.filteredCategory === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main className="bg-[#F5F0E8] min-h-screen">
        {/* Page Heading */}
        <section className="text-center px-6 pt-20 pb-14">
          <p className="text-xs uppercase tracking-[4px] text-[#A36B45] mb-5">
            The Book Collection
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-[#29231F]">
            Explore Our <span className="italic text-[#A36B45]">Books.</span>
          </h1>

          <p className="text-[#7B7066] max-w-xl mx-auto mt-6 leading-8">
            From timeless classics to modern stories, discover books that
            inspire your imagination and stay with you.
          </p>
        </section>

        {/* Search */}
        <section className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-md flex items-center gap-3 bg-white border border-[#DDD3C5] rounded-full px-5 py-3">
              <Search size={18} className="text-[#A36B45]" />

              <input
                type="text"
                placeholder="Search by title or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none bg-transparent text-sm text-[#29231F] placeholder:text-[#A99D91]"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#29231F] text-white"
                    : "bg-[#EAE2D7] text-[#5C5148] hover:bg-[#A36B45] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 pb-24">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="font-serif text-2xl text-[#29231F]">
                No books found.
              </h2>
              <p className="text-[#8A7D70] mt-3">
                Try another title or category.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Books;
