app.post('/recipes', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.status(201).send(recipe);
});

app.get('/recipes', async (req, res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});
