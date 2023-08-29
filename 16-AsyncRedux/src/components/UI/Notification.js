import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";
  let title2 = "Pending...";

  if (props.status === "error") {
    title2 = "Failed to Connect...";
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    title2 = "Cart Updated Successfully";
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title2}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
