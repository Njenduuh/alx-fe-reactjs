import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Add state for steps
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required');
      return;
    }

    // Mock submission (replace with actual logic as needed)
    console.log({ title, ingredients, steps });
    setError('');
    alert('Recipe submitted successfully!');

    // Clear form fields
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded shadow">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Recipe Title"
        />
      </div>
      <div>
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="List of ingredients (comma-separated)"
        />
      </div>
      <div>
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)} // Update steps state
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Step-by-step instructions"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
