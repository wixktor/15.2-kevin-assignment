/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <motion.nav
      key="logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="mx-auto flex w-full max-w-7xl flex-col overflow-auto py-6 px-3 lg:flex-row lg:items-center lg:justify-between text-[#332854]
      "
    >
      <div className="flex flex-row items-center justify-between">
        <a href="#" className="text-3xl">
          Hotbeans
        </a>
        <button
          className="cursor-pointer px-3 leading-none outline-none focus:outline-none lg:hidden"
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#332b54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className={"lg:flex" + (navbarOpen ? " flex" : " hidden")}>
        <div className="flex-col space-x-12 lg:flex-grow">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/careers" className="decoration-2 underline-offset-2">
            Careers
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
