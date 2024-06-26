import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className=" w-full grid gap-4 place-items-center p-1 md:max-w-2xl mx-auto">
     <Image src="/assets/logo.svg" alt="logo" width={500} height={500}  className="w-40"/>
     <div className="text-center space-y-3"><h1 className="text-2xl text-accent font-semibold">Dev Components - Fully Customizable Web Components</h1>
     <p className="opacity-80 text-pretty text-sm">Discover Dev Components, a unique platform offering a wide range of fully customizable and functional web components. Enhance your web development experience with our ready-to-use, highly flexible UI elements.</p>
     </div>

     <Link href="/components/buttons" className="bg-accent/20 border active:opacity-80 text-accent border-accent rounded-full p-1 px-4">Get Started</Link>
    </section>
  );
};

export default page;
