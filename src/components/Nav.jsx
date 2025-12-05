import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Nav({
  onHomeClick = () => {},
  onAboutClick = () => {},
  onProjectClick = () => {},
  onContactClick = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl 
                       backdrop-blur-md bg-white/20 shadow-md rounded-[10px] text-white">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex w-[20%] justify-start items-center">
          <img className="w-11" src={Logo} alt="logo" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex w-[60%] uppercase justify-center gap-6 text-lg">
          <button onClick={onHomeClick} className="hover:text-gray-300 transition">HOME</button>
          <button onClick={onAboutClick} className="hover:text-gray-300 transition">ABOUT</button>
          <button onClick={onProjectClick} className="hover:text-gray-300 transition">PROJECTS</button>
          <button onClick={onContactClick} className="hover:text-gray-300 transition">CONTACT</button>
        </nav>

        {/* GitHub & Hamburger */}
        <div className="flex w-[20%] justify-end items-center gap-4">
          <a
            target="_blank"
            href="https://github.com/pritom-dey1"
            className="hover:text-gray-300 transition text-2xl"
          >
            <FaGithub size={30} />
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden flex flex-col items-center gap-4 py-4 bg-white/10 backdrop-blur-md mt-2 rounded-b-lg text-gray-900 font-bold"
          >
            <motion.button onClick={onHomeClick} variants={itemVariants} className="hover:text-gray-300 transition">HOME</motion.button>
            <motion.button onClick={onAboutClick} variants={itemVariants} className="hover:text-gray-300 transition">ABOUT</motion.button>
            <motion.button onClick={onProjectClick} variants={itemVariants} className="hover:text-gray-300 transition">PROJECTS</motion.button>
            <motion.button onClick={onContactClick} variants={itemVariants} className="hover:text-gray-300 transition">CONTACT</motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
