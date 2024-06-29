'use client';
import React, { useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const DevChipInput = ({ tags, setTags, tagLength = 14, textLength = 20 }) => {
  const handleEnter = (e) => {
    if (e.key !== "Enter") return;
    const inputValue = e.target.value.trim();
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
    e.target.value = "";
  };

  const handleDelete = (id) => {
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
      className="w-full self-center bg-slate-100 dark:bg-slate-900 border dark:border-accent flex items-start justify-start flex-wrap gap-2 p-3 rounded-xl"
    >
      {tags.map((tag) => (
        <span
          key={tag.id}
          className="flex text-md h-fit w-fit gap-2 pl-3 pr-1 rounded-full border border-cyan-500 text-cyan-500 items-center bg-cyan-500/20"
        >
          <span>{tag.value}</span>
          <RiCloseCircleFill
            onClick={() => handleDelete(tag.id)}
            className="text-xl hover:text-accent cursor-pointer text-secondary"
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
