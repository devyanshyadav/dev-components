'use client';
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const DevChipInput = ({ tags, setTags, trigger = "Enter", tagLength = 14, textLength = 20 }) => {
  const handleEnter = (e) => {
    if (e.code !== trigger) return;
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue || tags.includes(inputValue)) return alert("Tag already exists");
    if (inputValue.length > textLength) return alert(`Tag must be less than ${textLength} characters`);

    setTags((prev) => [...prev, inputValue]);
    e.currentTarget.value = "";
  };

  const handleDelete = (value) => {
    setTags((prev) => prev.filter((tag) => tag !== value));
  };

  return (
    <div className="w-full relative bg-slate-50 dark:bg-slate-900 border border-accent/50 flex flex-wrap gap-2 p-3 rounded-xl">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex select-none text-base w-fit gap-2 px-3 pr-1 rounded-full text-cyan-400 items-center bg-cyan-500/30"
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
          className="px-1 rounded-full bg-transparent outline-none w-28 border-none"
        />
      )}
      <button role="clear-btn" className="absolute right-2 top-1 text-lg text-cyan-500/50 hover:text-cyan-500" onClick={() => setTags([])}>🗙</button>
    </div>
  );
};

export default DevChipInput;
