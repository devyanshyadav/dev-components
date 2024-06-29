'use client';
import React, { KeyboardEvent } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

type TagsInputProps = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  tagLength?: number;
  textLength?: number;
};

const DevChipInput = ({ tags, setTags, tagLength = 14, textLength = 20 }: TagsInputProps) => {
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue || tags.includes(inputValue)) return alert("Tag already exists");
    if (inputValue.length > textLength) return alert(`Tag must be less than ${textLength} characters`);

    setTags((prev) => [...prev, inputValue]);
    e.currentTarget.value = "";
  };

  const handleDelete = (value: string) => {
    setTags((prev) => prev.filter((tag) => tag !== value));
  };

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 border border-accent/50 flex flex-wrap gap-2 p-3 rounded-xl">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex select-none text-base w-fit gap-2 px-3 pr-1 rounded-full border border-cyan-500 text-cyan-400 items-center bg-cyan-500/20"
        >
          {tag}
          <RiCloseCircleFill
            onClick={() => handleDelete(tag)}
            className="text-xl hover:opacity-80 cursor-pointer"
          />
        </span>
      ))}
      {tags.length < tagLength && (
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="enter tag"
          className="px-1 rounded-full bg-transparent outline-none w-fit border-none"
        />
      )}
    </div>
  );
};

export default DevChipInput;
