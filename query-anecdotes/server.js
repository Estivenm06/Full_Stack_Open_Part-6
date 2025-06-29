import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const validator = (request, response, next) => {
  const anecdotes = router.db.get("anecdotes").value();
  const { votes, id, content } = request.body;

  if (request.method === "POST") {
    try {
      const alreadyExists = anecdotes.some(
        (anecdote) => anecdote.content === content
      );
      if (alreadyExists) {
        return response.status(400).json({
          error: "Anecdote with this content already exists",
        });
      }
      const newAnecdote = {
        id: Date.now().toString(),
        content,
        votes,
      };
      anecdotes.push(newAnecdote);
      console.log("Anecdote saved successfully. ", newAnecdote);
      return response.status(201).json(newAnecdote);
    } catch (error) {
      console.error("Error trying to save anecdote ", error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  if (request.method === "PUT") {
    try {
      const alreadyExists = anecdotes.some(
        (anecdote) => anecdote.content === content && anecdote.id !== id
      );
      if (alreadyExists) {
        return response.status(400).json({
          error: "Another anecdote with this content already exists",
        });
      }

      const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
      if (!anecdote) {
        return response.status(401).json({ error: "Anecdote not found it." });
      }
      anecdote.votes = votes;
      return response.send(anecdote);
    } catch (error) {
      console.error("Error trying to update anecdote ", error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  next();
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(validator);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
