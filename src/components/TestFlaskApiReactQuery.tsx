import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { LoginFlaskServer } from "@/app/flasklogin/actions";
type Props = {};
const TestFlaskApiReactQuery = (props: Props) => {
  //clean type safe code for fetching
  const {
    data,
    mutate: server_GetLogin,
    isPending,
  } = useMutation({
    mutationFn: LoginFlaskServer,
    onSuccess: () => {},
    onError: () => {},
  });
  const handleLogin = (credentials: { username: string; password: string }) => {
    //setLoading(true);
    server_GetLogin({ username: "bob", password: "bobpass" });
  };
  return (
    <div>
      <div>
        <p>Testing flask endpoint with server actions and react-query</p>
        <button
          onClick={() =>
            //server_GetLogin({ username: "bob", password: "bobpass" })
            handleLogin({ username: "", password: "" })
          }
        ></button>
        {data ? <p>Logged in user: {data.name}</p> : <></>}
      </div>
    </div>
  );
};

export default TestFlaskApiReactQuery;
