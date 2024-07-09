"use client";
import { useState } from "react";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Box,
  Drawer,
  Button,
} from "@mui/material";
import { Home, Login, LoginOutlined, Person2 } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const listItems = [
    { text: <span className="text-sky-700">ホーム</span>, icon: <Home className="text-sky-700"></Home>, param: "/"},
    { text: <span className="text-sky-700">プロフィール</span>, icon: <Person2 className="text-sky-700"></Person2>, param: "/profile"},
    { text: <span className="text-sky-700">ログアウト</span>, icon: <LoginOutlined className="text-sky-700"></LoginOutlined>, param: "/login"},
  ];
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col items-center bg-blue-800 text-white">
        <img src="" alt="" />
        <h2 className="">{`user name`}</h2>
        <h3 className="">{`user@email.com`}</h3>
        <div className="flex flex-col justify-center items-center my-3 gap-1">
          <span className="">{`全ての企業：${'4'}社`}</span>
          <span className="">{`内定・確定済み：${'２'}社`}</span>
        </div>
      </div>
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <Link to={item.param}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div >
        <Button onClick={toggleDrawer(true)} >
          <ListRoundedIcon className="text-white text-3xl"></ListRoundedIcon>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)} className="text-sky-700">
          {DrawerList}
        </Drawer>
      </div>
      {/* <div className="hidden md:block fixed top-20 left-0 bottom-0 w-auto border-r-2 ">
        {DrawerList}
      </div> */}
    </div>
  );
};

export default Sidebar;