
import { Routes,Route } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Booklist from "./components/Booklist/Booklist";
import Home  from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="book" element={<Booklist/>} />
        <Route path="/book/:id" element={<BookDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
