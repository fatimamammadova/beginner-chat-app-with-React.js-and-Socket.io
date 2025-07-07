import ChatContainer from "../components/ChatContainer";
import Login from "../components/Login";



export const router = [
    {
        path: "/chat",
        element: <ChatContainer/>
    },
    {
        path: "/",
        element: <Login/>
    }
]