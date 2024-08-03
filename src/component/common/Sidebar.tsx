'use client';
import React from 'react';
import { useState } from 'react';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
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
} from '@mui/material';
import { Home, LoginOutlined, Person2 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import avater from '../../assets/noAvatar.png';
import { useAuth } from '../../state/context/AuthContext';
import { usePosts } from '../../state/context/PostsContext';

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const { allPostsLength, completedPostsLength } = usePosts();

  const listItems = [
    {
      // eslint-disable-next-line react/react-in-jsx-scope
      text: (
        <Link to="/home" className="text-sky-700 block w-full">
          ホーム
        </Link>
      ),
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <Home className="text-sky-700"></Home>,
    },
    {
      // eslint-disable-next-line react/react-in-jsx-scope
      text: (
        <Link to="/profile" className="text-sky-700 block w-full">
          プロフィール
        </Link>
      ),
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <Person2 className="text-sky-700"></Person2>,
    },
    {
      text: (
        // eslint-disable-next-line react/react-in-jsx-scope
        <button className="text-sky-700" onClick={logOut}>
          ログアウト
        </button>
      ),
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <LoginOutlined className="text-sky-700"></LoginOutlined>,
    },
  ];
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col items-center bg-blue-800 text-white pt-5 pb-3">
        <img
          src={avater}
          alt=""
          className="w-28 h-28 rounded-full border-4 border-white mb-2"
        />
        <h2 className="">{user?.username}</h2>
        <h3 className="">{user?.email}</h3>
        <div className="flex flex-col justify-center items-center my-3 gap-1">
          <span className="">{`全ての企業：${allPostsLength}社`}</span>
          <span className="">{`内定・確定済み：${completedPostsLength}社`}</span>
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
      <div>
        <Button onClick={toggleDrawer(true)}>
          <ListRoundedIcon className="text-white text-3xl"></ListRoundedIcon>
        </Button>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          className="text-sky-700"
        >
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
