import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration:"none"}}>
          <span>Pakshya</span>
        </Link>
       <HomeOutlinedIcon />
       <DarkModeOutlinedIcon />
       <GridViewOutlinedIcon />
       <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search"></input>
       </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}
