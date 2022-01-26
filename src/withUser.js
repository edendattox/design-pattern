import axios from "axios";
import React, { useEffect, useState } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(`/users/${userId}`);
        setUser(data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
