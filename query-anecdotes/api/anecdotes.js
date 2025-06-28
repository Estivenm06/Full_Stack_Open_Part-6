import fs from "fs";
import path from "path";

const tmpDbPath = path.join("tmp", "db.json");

const anecdotesHandler = (req, res) => {
  if (req.method === "GET") {
    try {
      const data = fs.readFileSync(tmpDbPath, "utf-8");
      const anecdotes = JSON.parse(data);
      res.status(200).json(anecdotes);
    } catch (error) {
      res.status(500).json({ error: "Failed to read anecdotes." });
    }
  } else if (req.method === "POST") {
    try {
      const { content, votes = 0 } = req.body;

      if (!content || content.length < 5) {
        return res.status(400).json({
          error: "too short anecdote, must have length 5 or more",
        });
      }

      const data = fs.readFileSync(tmpDbPath, "utf-8");
      const anecdotes = JSON.parse(data);
      const alreadyExists = anecdotes.anecdotes.find(anecdote => anecdote.content === content)
      
      if(alreadyExists) {
        return res.status(401).send({error: 'This anecdote already exists.'})
      }

      const newAnecdote = {
        id: Date.now().toString(),
        content,
        votes
      };

      anecdotes.anecdotes.push(newAnecdote);
      fs.writeFileSync(tmpDbPath, JSON.stringify(anecdotes, null, 2));

      res.status(201).json(newAnecdote);
    } catch (error) {
      res.status(500).json({ error: "Failed to save anecdote." });
    }
  } else if (req.method === "PUT") {
    try {
      const { id, content, votes } = req.body;

      if (!content || content.length < 5) {
        return res.status(400).json({
          error: "too short anecdote, must have length 5 or more",
        });
      }

      const data = fs.readFileSync(tmpDbPath, "utf-8");
      const anecdotes = JSON.parse(data);

      const anecdoteIndex = anecdotes.anecdotes.findIndex((a) => a.id === id);
      if (anecdoteIndex === -1) {
        return res.status(404).json({ error: "Anecdote not found" });
      }

      anecdotes.anecdotes[anecdoteIndex] = { id, content, votes };
      fs.writeFileSync(tmpDbPath, JSON.stringify(anecdotes, null, 2));

      res.status(200).json(anecdotes.anecdotes[anecdoteIndex]);
    } catch (error) {
      res.status(500).json({ error: "Failed to update anecdote." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default anecdotesHandler;
