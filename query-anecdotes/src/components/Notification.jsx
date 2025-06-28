import { useAnecdoteContext } from "../hooks/useAnecdoteContext";

const Notification = () => {
  const { context } = useAnecdoteContext();

  if (!context) {
    return;
  }

  const styleSucess = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: "green",
    borderColor: "green",
    borderRadius: "0.5em",
    color: "white",
    fontWeight: "bold",
  };

  const styleError = {
    border: "solid",
    padding: 15,
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: "red",
    borderColor: "red",
    borderRadius: "0.5em",
    color: "white",
    fontWeight: "bold",
  };

  const style = context.type === "success" ? styleSucess : styleError;

  const alreadySuccess = document.querySelector("green");
  const alreadyError = document.querySelector("red");
  if (alreadySuccess) {
    alreadySuccess.remove();
  }
  if (alreadyError) {
    alreadyError.remove();
  }

  return <span style={style}>{context.message}</span>;
};

export default Notification;
