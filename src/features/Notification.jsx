import { db } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const sendNotification = async (jwt, notification) => {
  try {
    const userRef = doc(db, "USERS", jwt);
    const userdata = await getDoc(userRef);

    const currentNotifications = userdata.data().Notifications || [];

    const updatedNotifications = [...currentNotifications, notification];

    await updateDoc(userRef, { Notifications: updatedNotifications });

    console.log("Notification sent successfully!");
  } catch (error) {
    console.log("Error sending notification:", error);
  }
};

export default sendNotification;
