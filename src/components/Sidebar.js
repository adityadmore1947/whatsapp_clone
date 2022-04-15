import React from "react";
import "./Sidebar.css";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from './SidebarChat'
import db from '../Firebase'

function Sidebar() {

  const [rooms,setRooms] = React.useState([]);
  React.useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot => {
      setRooms(snapshot.docs.map(doc=>({id: doc.id, data:doc.data()})))
    })
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        {rooms.map(room=><SidebarChat key={room.id} id={room.id} name={room.data.name}/>)}
      </div>
    </div>
  );
}

export default Sidebar;
