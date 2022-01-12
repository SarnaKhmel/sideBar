import React from "react";
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";

export const SideBar = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Education",
    path: "/education",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text",
  },
  {
    title: "Work",
    path: "/work",
    icon: <AiIcons.MdWork />,
    cName: "nav-text",
  },
];
