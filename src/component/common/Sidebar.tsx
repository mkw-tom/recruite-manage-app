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
import { Login } from "@mui/icons-material";
import { Span } from "next/dist/trace";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const listItems = [
    { text: <span className="text-sky-700">ログイン</span>, icon: <Login className="text-sky-700"></Login> },
    { text: <span className="text-sky-700">ログイン</span>, icon: <Login className="text-sky-700"></Login> },
    { text: <span className="text-sky-700">ログイン</span>, icon: <Login className="text-sky-700"></Login> },
    { text: <span className="text-sky-700">ログイン</span>, icon: <Login className="text-sky-700"></Login> },
  ];
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col items-center">
        <img src="" alt="" />
        <h2 className="text-sky-700">{`user name`}</h2>
        <h3 className="text-sky-700">{`user@email.com`}</h3>
        <div>
          <span className="text-sky-700">{`登録済み企業:${'２'}社`}</span>
        </div>
      </div>
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="md:hidden block">
        <Button onClick={toggleDrawer(true)} >
          <ListRoundedIcon className="text-white text-3xl"></ListRoundedIcon>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)} className="text-sky-700">
          {DrawerList}
        </Drawer>
      </div>
      <div className="hidden md:block fixed top-20 left-0 bottom-0 w-auto border-r-2">
        {DrawerList}
      </div>
    </div>
  );
};

export default Sidebar;