app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.get("/", (req, res) => {
  res.send("API is working!");
});
