import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Article />
    </div>
  );
}
