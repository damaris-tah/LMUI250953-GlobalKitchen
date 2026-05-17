const Recipe = require('../models/recipeModel');

exports.createRecipe = async (data) => {
  return await Recipe.create(data);
};

exports.getRecipes = async (filter) => {
  return await Recipe.find(filter);
};

exports.updateRecipe = async (id, data) => {
  return await Recipe.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};
