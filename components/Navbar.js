import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useMediumContext } from "../context/MediumContext";
import UploadModal from "./UploadModal";
import Modal from "react-modal";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};
const Navbar = () => {
  const router = useRouter()
  const { handleUserAuth, currentUser } = useMediumContext();
  return (
    <nav className="flex justify-between items-center gap-10 px-4 py-4 bg-main">
      <div>
        <Link href="/">
          <Image src={logo} alt="medium" width={200} height={40} />
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-between items-center space-x-5">
          <li className="capitalize cursor-pointer">
            <Link href="/">our story</Link>
          </li>
          <li className="capitalize cursor-pointer">
            <Link href="/">membership</Link>
          </li>
          {currentUser ? (
            <Link href='/?addNew=1'>
              <li className="capitalize cursor-pointer bg-black px-4 py-2 rounded-full text-white">
              write
            </li>
            </Link>
          ) : (
            <li
              className="capitalize cursor-pointer bg-black px-4 py-2 rounded-full text-white"
              onClick={() => handleUserAuth()}
            >
              sign in
            </li>
          )}
          <li className="capitalize cursor-pointer">
            <Link href="/">get started</Link>
          </li>
        </ul>
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <UploadModal />
      </Modal>
    </nav>
  );
};

export default Navbar;
