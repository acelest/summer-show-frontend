"use client";

import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full p-6 bg-amber-900 z-20">
      <div className="flex items-center justify-between text-white">
        {/* Header logo */}
        <div>
          SUMMER SHOW
          {/* <Tailwind /> */}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <svg
              className="w-8 h-8 text-yellow-500 fill-current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navbar */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 font-sans text-sm">
            <li>
              <a
                href="/vote"
                className="pb-1 border-b-2 border-yellow-500 underline-on-hover active"
              >
                Voter
              </a>
            </li>
            <li>
              <a href="/discipline" className="underline-on-hover">
                Disciplines
              </a>
            </li>
            <li>
              <a href="/galery" className="underline-on-hover">
                Albums
              </a>
            </li>
            <li>
              <a href="/stats" className="underline-on-hover">
                Stats
              </a>
            </li>
            <li>
              <a href="/stats" className="underline-on-hover">
                <FaInstagram className="text-lg text-yellow-700 " />
              </a>
            </li>
          </ul>
        </div>

        {/* Drawer Menu */}
        <aside
          className={`p-5 transform top-0 left-0 w-64 text-white bg-blue-600 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="close">
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <span
            onClick={() => setIsOpen(false)}
            className="flex items-center w-full p-4 border-b"
          >
            <Tailwind className="text-white" />
          </span>
          <ul className="font-sans divide-y">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="inline-block my-4 text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/vote"
                onClick={() => setIsOpen(false)}
                className="inline-block my-4"
              >
                Vote
              </a>
            </li>
            <li>
              <a
                href="/album"
                onClick={() => setIsOpen(false)}
                className="inline-block my-4"
              >
                Albums
              </a>
            </li>
            <li>
              <a
                href="/stats"
                onClick={() => setIsOpen(false)}
                className="inline-block my-4"
              >
                Stats
              </a>
            </li>
          </ul>
          <button className="flex items-center px-3 py-2 mt-4 text-black bg-yellow-500 rounded cta hover:bg-yellow-400">
            <FaInstagram className="mr-2" />{" "}
            <span className="text-xs">Instagram</span>
          </button>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;

const Tailwind = () => (
  <svg
    className="w-auto h-10 md:block"
    viewBox="0 0 273 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Tailwind CSS</title>
    <path
      d="M32 16c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.09 38.808 32.2 45.5 32.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.11 38.692 16 32 16zM18.5 32.2C11.3 32.2 6.8 35.8 5 43c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.29 25.308 48.4 32 48.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.31 25.192 32.2 18.5 32.2z"
      fill="#14B4C6"
    />
    <path
      d="M85.996 29.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V44.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V25.7h3.496v-5.104l4.104-1.216v6.32h4.712v3.952zm17.962-3.952h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V25.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM112.85 44.7v-19h4.104v19h-4.104zm8.854 0V16.96h4.104V44.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zm-2.052 21.85v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V44.7h-4.104V33.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V44.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zm26.752-7.106h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V18.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z"
      fill="#000"
    />
  </svg>
);
