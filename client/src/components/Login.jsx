import _ from "lodash";
import { useState } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", user);
    localStorage.setItem(
      "image",
      `https://picsum.photos/id/${_.random()}/200/300`
    );
    navigate("/chat");
  };
  return (
    <div className="max-w-96 h-screen grid place-items-center mx-auto">
      <div className="w-full">
        <h1 className="text-center text-4xl mb-9">Join Chat</h1>
        <form action="" className="w-full flex items-center gap-3">
          <Input
            className="px-3 py-2"
            placeholder="Enter a username"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <Button
            type="primary"
            size="large"
            color="#471396"
            onClick={handleLogin}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
