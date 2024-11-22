import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          {/* Route for the main recipe list */}
          <Route path="/" element={<RecipeList />} />

          {/* Route for adding a new recipe */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />

          {/* Route for viewing recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
