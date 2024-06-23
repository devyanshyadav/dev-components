import CmpUrl from "@/utils/cmp-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  name: string;
  image: string;
  description: string;
  componentsNo: number;
};

const ComponentCard = ({
  name,
  image,
  description,
  componentsNo,
}: cardProps) => {
  return (
    <Link
      href={`/components/${CmpUrl(name)}`}
      className="w-full flex gap-5 pl-4 p-2 max-h-24 h-24 rounded-xl items-center border-accent/50 border hover:border-accent hover:bg-accent/20"
    >
      <Image
        src={`/assets/cmp-icons/${image}`}
        alt="logo"
        width={60}
        height={60}
      />
      <span className="pl-3">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="text-sm text-accent">
          {componentsNo} components
        </p>
      </span>
    </Link>
  );
};

export default ComponentCard;
