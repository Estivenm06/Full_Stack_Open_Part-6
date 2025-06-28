import path from "path";
import fs from "fs/promises";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.join(__dirname, "db.json");

const anecdotes = async (req, res) => {
  if (req.method === "GET") {
    try {
      const dbData = await fs.readFile(dbPath, "utf-8");
      const dataParsed = JSON.parse(dbData);
      res.status(200).send(dataParsed.anecdotes);
    } catch (error) {
      res.send({ error: "Error trying to fetch database." });
    }
  } else if (req.method === "POST") {
    try {
      const { content, votes } = req.body;

      if (!content || content.length < 5) {
        return res.status(400).json({
          error: "too short anecdote, must have length 5 or more",
        });
      }

      const dbData = await fs.readFile(dbPath, "utf-8");
      const dataParsed = JSON.parse(dbData);
      const alreadyExists = dataParsed.anecdotes.find(
        (anecdote) => anecdote.content === content
      );
      if (alreadyExists) {
        
        res.status(401).send({ error: "This anecdote already exists" });
        return;
      }
      const newAnecote = { id: Date.now(), content, votes };
      dataParsed.anecdotes.push(newAnecote);
      await fs.writeFile(dbPath, JSON.stringify(dataParsed, null, 2));

      res.status(201).send(newAnecote);
    } catch (error) {
      res.send({ error: "Error trying to create anecdote." });
    }
  } else if (req.method === "PUT") {
    try {
      const { content, id, votes } = req.body;

      if (!content || content.length < 5) {
        return res.status(400).json({
          error: "too short anecdote, must have length 5 or more",
        });
      }
      const dbData = await fs.readFile(dbPath, "utf-8");
      const dataParsed = JSON.parse(dbData);
      const index = dataParsed.anecdotes.findIndex(
        (anecdote) => anecdote.id === id
      );

      if (index === -1) {
        return res.status(404).json({ error: "Anecdote not found" });
      }
      dataParsed.anecdotes[index] = { id, content, votes };
      await fs.writeFile(dbPath, JSON.stringify(dataParsed, null, 2));

      res.send(dataParsed.anecdotes[index]);
    } catch (error) {
      res.send({ error: "Error trying to update anecdote." });
    }
  } else {
    res.status(500).json({ error: "unknown method" });
  }
};

export default anecdotes;
