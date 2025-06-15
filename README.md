# Full Stack Open Part 6 - Redux and React Query Projects

This repository contains three separate projects that demonstrate the use of Redux and React Query in React applications. Each project is structured as an independent application with its own dependencies and configurations.

## Project Structure

```
.
├── README.md
├── query-anecdotes/
├── redux-anecdotes/
└── unicafe-redux/
```

### 1. **Query Anecdotes**

This project demonstrates the use of React Query for managing server state and asynchronous operations.

#### Features:
- Fetch anecdotes from a JSON server.
- Create new anecdotes with validation.
- Vote for anecdotes.
- Notifications for actions using React Context.

#### Commands:
- Start the development server: `npm run dev`
- Start the JSON server: `npm run server`

#### Key Files:
- [App.jsx](query-anecdotes/src/App.jsx): Main application logic.
- [requests.js](query-anecdotes/src/services/requests.js): API service for CRUD operations.
- [anecdoteContext.jsx](query-anecdotes/src/components/anecdoteContext.jsx): Context for managing notifications.

---

### 2. **Redux Anecdotes**

This project demonstrates the use of Redux Toolkit for state management in a React application.

#### Features:
- Fetch anecdotes from a JSON server.
- Create new anecdotes.
- Vote for anecdotes.
- Filter anecdotes by content.
- Notifications for actions using Redux.

#### Commands:
- Start the development server: `npm run dev`
- Start the JSON server: `npm run server`

#### Key Files:
- [App.jsx](redux-anecdotes/src/App.jsx): Main application logic.
- [anecdoteReducer.js](redux-anecdotes/src/reducers/anecdoteReducer.js): Reducer for managing anecdotes.
- [notificationReducer.js](redux-anecdotes/src/reducers/notificationReducer.js): Reducer for managing notifications.

---

### 3. **Unicafe Redux**

This project demonstrates the use of Redux for managing application state in a simple feedback application.

#### Features:
- Increment counters for "good", "ok", and "bad" feedback.
- Reset all counters to zero.

#### Commands:
- Start the development server: `npm run dev`

#### Key Files:
- [main.jsx](unicafe-redux/src/main.jsx): Main application logic.
- [reducer.js](unicafe-redux/src/reducer.js): Reducer for managing feedback counters.

---

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Navigate to the desired project folder (`query-anecdotes`, `redux-anecdotes`, or `unicafe-redux`).

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

5. For `query-anecdotes` and `redux-anecdotes`, start the JSON server:
   ```sh
   npm run server
   ```

## Technologies Used

- React
- Redux Toolkit
- React Query
- JSON Server
- Vite
- Axios
- ESLint

*Completed by: Estivenm06*
