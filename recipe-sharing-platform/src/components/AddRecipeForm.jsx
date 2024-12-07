import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send data to an API
    console.log({ title, summary, image, ingredients: ingredients.split(','), instructions });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded p-2 w-full mb-2" required />
      <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="border rounded p-2 w-full mb-2" required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="border rounded p-2 w-full mb-2" required />
      <textarea placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="border rounded p-2 w-full mb-2" required />
      <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="border rounded p-2 w-full mb-2" required />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;