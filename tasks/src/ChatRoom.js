// import { useEffect, useState } from "react";
// import { createConnection } from "./Chat";
// import { showNotification } from "./ShowNotification";

// function ChatRoom(props) {
//   const roomID = props.roomId;
//   const [serverURL, setServerURL] = useState("https://localhost:1234");
//   useEffect(() => {
//     const options = {
//       roomId: roomID,
//       serverURL: serverURL,
//     };
//     const connection = createConnection(options);
//     // connection.on("message", (msg) => {
//     //   showNotification(msg);
//     // });
//     connection.connect();
//     return () => {
//       console.log("disconnecting from ", roomID);
//     };
//   }, [serverURL, roomID]);
//   const inputChangeHandler = (e) => {
//     setServerURL(e.target.value);
//   };
//   return (
//     <>
//       <label>
//         serverURL:
//         <input type="text" onChange={inputChangeHandler} />
//       </label>
//       <h1> Welcome to {roomID} room</h1>
//     </>
//   );
// }
// export default ChatRoom;
import { useState, useEffect } from "react";
import { createConnection } from "./Chat.js";

export default function ChatRoom({ roomId }) {
  console.log("chat room    ");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    console.log("on start");
    connection.on("message", (msg) => {
      console.log(" Show Notification New message: " + msg);
    });
    console.log("on end");

    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
