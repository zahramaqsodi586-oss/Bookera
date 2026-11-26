
import { BookOpen, Heart, Compass } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F0E8]">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 text-center">
          <p className="text-xs uppercase tracking-[4px] text-[#A36B45] mb-6">
            Our Story
          </p>

          <h1 className="font-serif text-5xl md:text-7xl text-[#29231F] leading-tight">
            A Love for
            <br />
            <span className="italic text-[#A36B45]">Every Story.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#74695F] leading-8 mt-8">
            BOOKORA is a place created for people who believe that
            every book holds a new perspective, every page brings
            inspiration, and every story has the power to stay with us.
          </p>
        </section>

        {/* Image and Story */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000"
            alt="A cozy library filled with books"
            className="w-full h-[480px] object-cover rounded-t-full shadow-lg"
          />

          <div>
            <p className="text-xs uppercase tracking-[4px] text-[#A36B45] mb-5">
              Why BOOKORA?
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-[#29231F] leading-tight">
              A little space
              <br />
              for big ideas.
            </h2>

            <p className="text-[#74695F] leading-8 mt-7">
              We believe reading is more than a habit. It is a journey
              through different worlds, cultures, emotions, and ideas.
              BOOKORA brings together a collection of stories for
              curious minds and passionate readers.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#EAE2D7] px-8 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[4px] text-[#A36B45] mb-5">
                What We Believe
              </p>

              <h2 className="font-serif text-4xl md:text-5xl text-[#29231F]">
                The Heart of BOOKORA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <BookOpen size={35} className="mx-auto text-[#A36B45]" />
                <h3 className="font-serif text-2xl mt-6 text-[#29231F]">
                  Love of Reading
                </h3>
                <p className="text-[#74695F] leading-7 mt-4">
                  Celebrating the joy of discovering a new book
                  and getting lost in its pages.
                </p>
              </div>

              <div className="text-center">
                <Heart size={35} className="mx-auto text-[#A36B45]" />
                <h3 className="font-serif text-2xl mt-6 text-[#29231F]">
                  Meaningful Stories
                </h3>
                <p className="text-[#74695F] leading-7 mt-4">
                  Appreciating stories that inspire, connect,
                  and leave a lasting impression.
                </p>
              </div>

              <div className="text-center">
                <Compass size={35} className="mx-auto text-[#A36B45]" />
                <h3 className="font-serif text-2xl mt-6 text-[#29231F]">
                  Endless Discovery
                </h3>
                <p className="text-[#74695F] leading-7 mt-4">
                  Exploring different ideas, perspectives,
                  and worlds through books.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

     <Footer />
    </>
  );
}

export default About;