'use client';
import React, { useEffect, KeyboardEvent } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

type Tag = {
  id: number;
  value: string;
};

type TagsInputProps = {
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  tagLength?: number;
  textLength?: number;
};

const DevChipInput = ({ tags, setTags, tagLength = 14, textLength = 20 } : TagsInputProps) => {
    
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {

    if (e.key !== "Enter") return;

    const inputValue = (e.target as HTMLInputElement).value.trim();

    if (inputValue === "") return;

    if (tags.find((tag) => tag.value === inputValue)) {
      alert("Tag already exists");
      return;
    }

    if (inputValue.length > textLength) {
      alert(`Tag must be less than ${textLength} characters`);
      return;
    }

    const newTag = { id: Date.now(), value: inputValue };
    setTags((prev) => [...prev, newTag]);
    (e.target as HTMLInputElement).value = "";
  };

  const handleDelete = (id: number) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  useEffect(() => {
    if (tags.length === tagLength) {
      return;
    } else {
      const tagStrings = tags.map((tag) => tag.value);
    }
  }, [tags]);

  return (
    <div
      id="tags"
      className=" w-full self-center bg-slate-100 dark:bg-slate-900 border dark:border-accent flex items-start justify-start flex-wrap gap-2 py-2 px-2  rounded-xl"
    >
      {tags.map((tag) => (
        <span
          key={tag.id}
         className="flex text-md h-fit w-fit  gap-2 pl-3 pr-1 rounded-full border border-cyan-500 text-cyan-500  items-center bg-cyan-500/20  "
        >
          <span>{tag.value}</span>
          <RiCloseCircleFill
            onClick={() => handleDelete(tag.id)}
            className="text-xl  hover:text-accent cursor-pointer text-secondary"
          />
        </span>
      ))}
      {tags.length !== tagLength && (
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="enter tag"
          className="px-1 rounded-full  bg-transparent outline-none w-fit  border-none"
        />
      )}
    </div>
  );
};

export default DevChipInput;
