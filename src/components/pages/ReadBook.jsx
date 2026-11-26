import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, User, Bookmark, Lightbulb } from "lucide-react";
import { booksData } from "../data/booksData";



function ReadBook() {
  const { bookId } = useParams();
  const book = booksData[bookId];

  const [activeTab, setActiveTab] = useState("about");

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0]">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[#29231F]">Book Not Found</h1>
          <Link
            to="/books"
            className="inline-block mt-6 text-[#A36B45] hover:underline"
          >
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "about", label: "About the Book" },
    { id: "summary", label: "Summary" },
    { id: "themes", label: "Main Themes" },
    { id: "learn", label: "What You'll Learn" },
    { id: "author", label: "About the Author" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/books"
          className="inline-flex items-center gap-2 text-sm text-[#8A7D70] hover:text-[#A36B45] transition"
        >
          <ArrowLeft size={18} />
          Back to Books
        </Link>

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-12">
          <div>
            <div className="h-96 overflow-hidden rounded-2xl bg-[#EDE5DA] shadow-lg">
              <img
                src={book.cover}
                alt={`${book.title} book cover`}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-center text-sm text-[#8A7D70] mt-5">
              {book.category}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[4px] uppercase text-[#A36B45]">
              Discover Your Next Read
            </p>

            <h1 className="font-serif text-4xl md:text-5xl mt-4">
              {book.title}
            </h1>

            <p className="text-[#8A7D70] mt-3">By {book.author}</p>

            <div className="w-full h-px bg-[#DED5CA] my-8" />

            <div className="flex flex-wrap gap-3 border-b border-[#DED5CA] pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm px-4 py-2 rounded-full transition ${
                    activeTab === tab.id
                      ? "bg-[#704B37] text-white"
                      : "text-[#8A7D70] hover:bg-[#EDE5DA]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-10 min-h-[260px]">
              {activeTab === "about" && (
                <div>
                  <h2 className="font-serif text-2xl mb-5">About the Book</h2>
                  <p className="text-[#71665D] leading-8">{book.description}</p>
                </div>
              )}

              {activeTab === "summary" && (
                <div>
                  <h2 className="font-serif text-2xl mb-5">Story Overview</h2>
                  <p className="text-[#71665D] leading-8">{book.summary}</p>
                </div>
              )}

              {activeTab === "themes" && (
                <div>
                  <h2 className="font-serif text-2xl mb-5">Main Themes</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {book.themes.map((theme, index) => (
                      <div
                        key={index}
                        className="bg-white p-5 rounded-xl border border-[#E9E0D6] flex items-center gap-3"
                      >
                        <Bookmark
                          size={18}
                          className="text-[#A36B45] shrink-0"
                        />
                        <span className="text-sm">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "learn" && (
                <div>
                  <h2 className="font-serif text-2xl mb-5">
                    What You'll Learn
                  </h2>
                  <div className="flex gap-4 bg-[#EEE6DC] p-6 rounded-xl">
                    <Lightbulb size={24} className="text-[#A36B45] shrink-0" />
                    <p className="text-[#71665D] leading-8">{book.learn}</p>
                  </div>
                </div>
              )}

              {activeTab === "author" && (
                <div>
                  <h2 className="font-serif text-2xl mb-5">About the Author</h2>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#EEE6DC] p-4 rounded-full">
                      <User size={25} className="text-[#A36B45]" />
                    </div>
                    <p className="text-[#71665D] leading-8">
                      {book.authorInfo}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadBook;
