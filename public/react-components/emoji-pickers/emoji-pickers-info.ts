import DevEmojiPickerUsage from "./(dev-emoji-picker)/dev-emoji-picker-usage";

const EmojiPickersInfo = [
  {
    title: "Dev Emoji Picker",
    component: DevEmojiPickerUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An interactive emoji picker component that enables users to search and select emojis from a categorized list, enhancing communication in applications with a wide range of emojis.",
      features: [
        "Categorized emoji list for easy navigation",
        "Search functionality to quickly find specific emojis",
        "Interactive selection of emojis with visual feedback",
        "Customizable categories for organizing emojis",
      ],
      props: [
        {
          propName: "setSelectedEmoji",
          propExample: "Function",
          propDetail:
            "A callback function passed from the parent component to update the selected emoji.",
        },
      ],
      packages: [],
      doc_links: ["https://github.com/github/gemoji/blob/master/db/emoji.json"],
    },
  },
];

export default EmojiPickersInfo;
