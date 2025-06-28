import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.join(__dirname, ".public/db.json");

const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

const validator = (request, response, next) => {
  console.log();

  const { content } = request.body;

  if (request.method === "POST" && (!content || content.length < 5)) {
    return response.status(400).json({
      error: "too short anecdote, must have length 5 or more",
    });
  } else {
    next();
  }
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(validator);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
