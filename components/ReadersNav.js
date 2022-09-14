import React from "react";
import { FiBell } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import smallLogo from "../assets/small-logo.webp";
import Link from "next/link";
import Image from "next/image";
const ReadersNav = ({ currentUser }) => {
  return (
    <div className="w-[5rem] h-full relative hidden xl:flex">
      <div className="fixed">
        <div className="flex flex-col items-center h-screen justify-between w-[5rem] px-5">
          <Link href="/">
            <div className="cursor-pointer rounded-full">
              <Image src={smallLogo} width={40} height={40} alt={"logo"}/>
            </div>
          </Link>
          <div className="flex-1 flex flex-col justify-center gap-20 text-2xl">
            <HiOutlineHome />
            <FiBell />
            <BiBookmarks />
            <BsPencilSquare />
          </div>
          <div className="rounded-full py-6">
            {currentUser && (
              <Image
                src={currentUser?.photoURL}
                className="rounded-full"
                alt="medium"
                width={100}
                height={100}
                objectFit={"cover"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadersNav;
