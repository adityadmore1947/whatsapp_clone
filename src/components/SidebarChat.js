import React from "react";
import "./SidebarChat.css";
import FaceIcon from "@mui/icons-material/Face";

function SidebarChat({id,name,addNewChat}) {

const createChat = () => {
    let roomName = prompt("Enter room name")

    if(roomName){
        //database stuff
    }
}

  return (
      !addNewChat?(
    <div className="sidebarChat">
      <FaceIcon src="https://avatars.dicebear.com/api/male/123.png"/>
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message</p>
      </div>
    </div>
    ): (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
      </div>
    )
  )
}

export default SidebarChat;
