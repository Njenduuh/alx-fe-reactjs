import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import HomePage from './components/HomePage';  // Import HomePage component
import RecipeDetail from './components/RecipeDetail'; // Import RecipeDetail component

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Routes> {/* Define all routes inside Routes */}
        <Route path="/" element={<HomePage />} /> {/* Home route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe detail route */}
      </Routes>
    </Router>
  );
}

export default App;
