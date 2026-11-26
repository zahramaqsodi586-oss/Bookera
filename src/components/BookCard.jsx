import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";


function BookCard({ book }) {
  const bookId = book.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <div className="group">
      <Link to={`/read/${bookId}`} className="block">
        <div className="relative h-80 overflow-hidden rounded-xl bg-[#EDE5DA] shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
          <img
            src={book.cover}
            alt={`${book.title} book cover`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-5 pt-16">
            <span className="text-xs tracking-widest text-white/80">
              <BookOpen size={15} className="inline mr-2" />
              VIEW BOOK
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-5">
        <h3 className="font-serif text-xl text-[#29231F]">{book.title}</h3>
        <p className="text-sm text-[#8A7D70] mt-2">{book.author}</p>
        <p className="text-sm font-semibold text-[#A36B45] mt-3">
          {book.price}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
