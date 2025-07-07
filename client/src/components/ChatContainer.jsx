import { ChatBoxSender, ChatBoxReciever } from "./ChatBox";
import Header from "./Header";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  return (
    <div>
      <Header  />
      <div className="w-full px-4 mt-5 flex flex-col justify-between" style={{height: `calc(100svh - 100px)`}}>
        <div>
          <ChatBoxSender />
          <ChatBoxReciever />
        </div>

        <MessageInput/>
      </div>
    </div>
  );
};

export default ChatContainer;
