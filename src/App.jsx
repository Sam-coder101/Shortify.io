import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FlashcardPage from "./pages/FlashcardPage";
import About from "./pages/About";
import TodoList from "./pages/Todo";
import YouTubeSearch from "./pages/YouTubeSearch";
import GoogleImageSearch from "./pages/googleimg"



const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards"
           element={<FlashcardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/youtube" element={<YouTubeSearch />} />
          <Route path="/gglimg" element={<GoogleImageSearch/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
