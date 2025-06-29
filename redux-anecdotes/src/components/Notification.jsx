import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);
  
  if (!notification) {
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
    display: 'inline-block'
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
    display: 'inline-block'
  };

  const style = notification.type === "success" ? styleSucess : styleError;

  const alreadySuccess = document.querySelector("green");
  const alreadyError = document.querySelector("red");
  if (alreadySuccess) {
    alreadySuccess.remove();
  }
  if (alreadyError) {
    alreadyError.remove();
  }

  return (<div style={style}><span>{notification.message}</span></div>);
};

export { Notification };
