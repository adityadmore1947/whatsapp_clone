import React from "react";
import "./Chat.css";
import FaceIcon from "@mui/icons-material/Face";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {

  const sendMessage = (e) =>{
      e.preventDefault();
      console.log("You typed " + input)
      setInput('')
  }

  const [input,setInput] = React.useState("")
  console.log(input);
  return (
    <div className="chat">
      <div className="chat__header">
        <FaceIcon />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Aditya</span>
          Hey there, welcome to whatsapp!
          <span className="chat__timestamp">3:00PM</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={input} type="text" placeholder="Type a message" onChange={e=>setInput(e.target.value)}/>
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
