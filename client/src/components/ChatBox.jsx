import { Avatar } from "antd";

export const ChatBoxReciever = ({ user, message, avatar }) => {
  return (
     <div className="flex items-start gap-3">
      <Avatar src={avatar} size={40} />

      <div className=" px-2 py-1 bg-[#f9f7f3] rounded-md mt-2 text-black">
         <span>{user}</span>
        <p>{message}</p>
      </div>
    </div>
    
  );
};

export const ChatBoxSender = ({ user, message, avatar }) => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className=" px-2 py-1 bg-[#006400] rounded-md mt-2">
        <span>{user}</span>
        <p>{message}</p>
      </div>
      <Avatar src={avatar} size={40} />
    </div>
  );
};
