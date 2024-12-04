import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router> {/* Wrap everything with Router */}
      <Routes> {/* Define routes inside Routes */}
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe detail route */}
      </Routes>
    </Router>
  );
}

export default App;
