import { Button } from "antd";
import { Input } from "antd";
const { TextArea } = Input;

const MessageInput = () => {
  return (
    <div  className="flex gap-3">
      <TextArea rows={1} />

      <Button type="primary" size="large" color="#471396">
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
