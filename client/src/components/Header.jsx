import { Avatar } from "antd";
import React from "react";

export default function Header({ logOut }) {
  const currentUser = localStorage.getItem("user");
  const currentProfile = localStorage.getItem("image");
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div >
      <Avatar src={currentProfile} size={40} className="mr-5" />
        <span>{currentUser}</span>
      </div>

      <button onClick={() => logOut()}>Log out</button>
    </header>
  );
}
