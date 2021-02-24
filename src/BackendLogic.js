import React, { useEffect } from "react";
import axios from "./axios.js";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Pusher from "pusher-js";
function BackendLogic() {
  const [{ SERMON }, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/api/v1/sermon");
      dispatch({
        type: actionTypes.SET_SERMON,
        SERMON: request.data,
      });
    }
    fetchData();
  }, []);

  const pusher = new Pusher("1429953833a69d4f1370", {
    cluster: "eu",
  });

  useEffect(() => {
    const channel = pusher.subscribe("church");
    channel.bind("event", function ({ message }) {
      dispatch({
        type: actionTypes.SET_SERMON,
        SERMON: [...SERMON, message],
      });
      // alert(JSON.stringify(message));
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [SERMON]);

  return <div>{console.log("The backend data is ", SERMON)}</div>;
}

export default BackendLogic;
