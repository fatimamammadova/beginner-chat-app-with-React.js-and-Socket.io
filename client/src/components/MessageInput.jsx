import { Button } from "antd";
import { Input } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const MessageInput = ({ addMessage }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <form
        action=""
        className="w-full flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!value.trim()) return;
          addMessage(value);
          setValue("");
        }}
      >
        <TextArea
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button type="primary" size="large" color="#471396" htmlType="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
