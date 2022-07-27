import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { profil } from "../lib/data";

const Nav = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2x:px-16">
        <div className="flex justify-center items-center">
          <Link href="/">
            <a className="flex justify-center items-center">
              <Image src="/assets/logo.png" alt="" width="80" height="80" />
              <p className="px-4 uppercase">Anass Filali</p>
            </a>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Skills
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="p-4 md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        onClick={() => setNav(false)}
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/40 ease-in-out duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-300"
              : "fixed right-[-100%] top-0 h-screen bg-[#ecf0f3] p-10 ease-in-out duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/logo.png" alt="" width="80" height="80" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {"let's build something"}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {"Let's Connect"}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href={profil.linkedinProfil}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                </a>
                <a href={profil.githubProfil} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div
                  onClick={() => setNav(false)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/resume">
                    <BsPersonLinesFill />
                  </Link>
                </div>
                <div
                  onClick={() => setNav(false)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/#contact">
                    <AiOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
