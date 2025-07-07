import { Avatar } from "antd";

export const ChatBoxReciever = ({ user, message }) => {
  return (
    <div className="flex items-start gap-3">
      <Avatar src="https://picsum.photos/id/237/200/300" size={40} />

      <div className=" px-2 py-1 bg-[#f9f7f3] rounded-md mt-2 text-black">
        <span>username</span>
        <p>messgae</p>
      </div>
    </div>
  );
};

export const ChatBoxSender = ({ user, message }) => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className=" px-2 py-1 bg-[#006400] rounded-md mt-2">
        <span>username</span>
        <p>messgae</p>
      </div>
      <Avatar src="https://picsum.photos/id/236/200/300" size={40} />

    </div>
  );
};
