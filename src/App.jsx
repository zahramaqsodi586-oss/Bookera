import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import About from "./components/pages/About";
import ReadBook from "./components/pages/ReadBook.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/read/:bookId" element={<ReadBook />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;