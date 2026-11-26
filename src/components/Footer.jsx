import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#29231F] text-[#F5F0E8] px-8 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-bold tracking-widest"
            >
              BOOKORA
            </Link>

            <p className="text-sm text-[#BDB1A4] leading-7 mt-6 max-w-xs">
              A world of stories, ideas, and imagination. Discover the beauty of
              reading with BOOKORA.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif text-xl mb-6">Explore</h3>

            <div className="flex flex-col gap-4 text-sm text-[#BDB1A4]">
              <Link to="/" className="hover:text-[#C28B62] transition-colors">
                Home
              </Link>

              <Link
                to="/books"
                className="hover:text-[#C28B62] transition-colors"
              >
                Books
              </Link>

              <Link
                to="/about"
                className="hover:text-[#C28B62] transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Discover More */}
          <div>
            <h3 className="font-serif text-xl mb-6">Discover More</h3>

            <p className="text-sm text-[#BDB1A4] leading-7 max-w-xs">
              Explore new stories, discover different perspectives, and find
              inspiration in every page.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#A99D91]">
          <p>©️ 2026 BOOKORA. All rights reserved.</p>

          <p className="italic font-serif text-sm">Stories worth keeping.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
