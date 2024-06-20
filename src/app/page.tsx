import React from "react";
import SearchComponents from "../components/search-components";
import RenderComponents from "../components/render-components";
// import ComponentsHome from "./app-components/home-component";

const page = () => {
  return (
    <>
      <section className="w-full text-center p-5 z-10 space-y-3 md:max-w-lg sticky md:relative top-0 md:backdrop-blur-0 backdrop-blur-sm rounded-b-xl shadow-md md:shadow-none border-b border-accent/50 md:border-none mx-auto pt-5">
        <h1 className="text-5xl font-bold select-none">
          Dev Components<span className="text-6xl text-accent">.</span>
        </h1>
        <p className=" opacity-80 font-normal text-center text-sm">
          Crafting a Lightweight Website using customizable and functional Web
          Components for Maximum Control
        </p>

        <SearchComponents />
      </section>

      <section className="grid overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb] grid-cols-1 md:grid-cols-4 py-0 p-3 md:p-0 my-5 w-full max-w-5xl mx-auto gap-3">
        <RenderComponents />
      </section>
    </>
  );
};

export default page;
