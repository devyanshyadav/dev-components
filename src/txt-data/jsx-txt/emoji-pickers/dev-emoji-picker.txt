import React, { useState, useEffect } from "react";
import Emoji from "./Emoji.json";
// Create Emoji.json file and get all emojis json from https://github.com/github/gemoji/blob/master/db/emoji.json
import { FiSearch } from "react-icons/fi";

const DevEmojiPicker = ({
    setSelectedEmoji,
}) => {
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [currentCategory, setCurrentCategory] =
        useState("Smileys & Emotion");
    const [filteredEmojis, setFilteredEmojis] = useState([]);
    const [hoveredEmoji, setHoveredEmoji] = useState(null);

    const getData = () => {
        const categories = new Map();
        Emoji.forEach((item) => {
            const { category, emoji } = item;
            if (!categories.has(category)) {
                categories.set(category, { ctgName: category, emoji: emoji });
            }
        });
        setUniqueCategories(Array.from(categories.values()));
    };

    //  search Functionality from emoji Json
    const handleFindEmoji = (e) => {
        const { value } = e.target;
        setHoveredEmoji(value);

        if (value.trim() === "") {
            setFilteredEmojis([]);
            return;
        }

        const searchResults = Emoji.filter(
            (item) =>
                item.aliases.some((alias) =>
                    alias.toLowerCase().includes(value.toLowerCase())
                ) || item.emoji.includes(value)
        ).map((item) => ({
            ctgName: item.category,
            emoji: item.emoji,
        }));
        setFilteredEmojis(searchResults);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className="w-fit  shadow-lg h-72 rounded-xl space-y-2 bg-slate-50 dark:bg-slate-900 border-cyan-500/50 border p-2 flex flex-col">
            <div className="relative">
                <input
                    type="text"
                    onChange={handleFindEmoji}
                    value={hoveredEmoji ?? ""}
                    className="w-full p-1 px-2 pl-8 rounded-full bg-cyan-500/20  border border-cyan-500/50 text-sm focus:border-cyan-500 focus:outline-none"
                    placeholder="Search by tag or alias"
                />
                <FiSearch className="absolute top-2 left-2 text-cyan-500" />
            </div>
            <div className="grid grid-cols-9 gap-1 text-cyan-500 bg-cyan-500/30 rounded-full  p-1 text-xl items-center justify-center">
                {uniqueCategories?.map((elem, index) => (
                    <button
                        key={index}
                        className="cursor-pointer hover:bg-cyan-500 rounded-full transition-all"
                        onClick={() => {
                            setFilteredEmojis([]);
                            setCurrentCategory(elem.ctgName);
                        }}
                    >
                        {elem.emoji}
                    </button>
                ))}
            </div>

            <div className="w-full h-full [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden  items-start content-start justify-start overflow-y-scroll grid grid-cols-9 gap-1 text-xl">
                {!filteredEmojis.length
                    ? Emoji.filter((e, i) => e.category === currentCategory).map(
                        (elem, index) => (
                            <button
                                onClick={() => setSelectedEmoji(elem.emoji)}
                                className="cursor-pointer hover:scale-95 transition-all"
                                onMouseEnter={() =>
                                    setHoveredEmoji(elem.emoji + elem.aliases[0])
                                }
                                onMouseLeave={() => setHoveredEmoji(null)}
                                key={index}
                            >
                                {elem.emoji}
                            </button>
                        )
                    )
                    : filteredEmojis.map((elem, index) => (
                        <button
                            onClick={() => setSelectedEmoji(elem.emoji)}
                            className="cursor-pointer hover:scale-95 transition-all"
                            key={index}
                        >
                            {elem.emoji}
                        </button>
                    ))}
            </div>
        </section>
    );
};

export default DevEmojiPicker;
