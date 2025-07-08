import { useEffect, useRef, useState } from "react";
import { ChatBoxSender, ChatBoxReciever } from "./ChatBox";
import Header from "./Header";
import MessageInput from "./MessageInput";
import socketIOClient from "socket.io-client";

const ChatContainer = () => {
  const socketRef = useRef(null);
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("image"));

  useEffect(() => {
    socketRef.current = socketIOClient("http://localhost:5001");

    socketRef.current.on("chatHistory", (previousChats) => {
    setChats(previousChats);
  });

    socketRef.current.on("chat", (senderChat) => {
      setChats((prevChats) => [...prevChats, senderChat]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendChatToSocket = (chat) => {
    socketRef.current.emit("chat", chat);
  };

  const addMessage = (chat) => {
    const newChat = { message: chat, user, avatar };
    setChats((prev) => [...prev, newChat]);
    sendChatToSocket(newChat);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("image");
    setUser("");
    setAvatar("");
  };

  const ChatList = () => {
    return chats.map((chat, index) => {
      if (chat.user === user) {
        return (
          <ChatBoxSender
            key={index}
            user={chat.user}
            message={chat.message}
            avatar={chat.avatar}
          />
        );
      }

      return (
        <ChatBoxReciever
          key={index}
          user={chat.user}
          message={chat.message}
          avatar={chat.avatar}
        />
      );
    });
  };

  return (
    <div>
      <Header logOut={logOut} />
      <div
        className="w-full px-4 mt-5 flex flex-col justify-between"
        style={{ height: `calc(100svh - 100px)` }}
      >
        <div>
          <ChatList />
        </div>

        <MessageInput addMessage={addMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
