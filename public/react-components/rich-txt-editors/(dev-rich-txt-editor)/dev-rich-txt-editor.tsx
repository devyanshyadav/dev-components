//Create a File DevRichTxtEditor as well as export it and it will work seamlessly
//and apply this css style to global.css to make list element workable => *{list-style-type:decimal !important;}
// Import necessary libraries and components
"use client";
import React, { useEffect, useState } from "react"; // Core React library and hooks
import clsx from "clsx"; // Utility for constructing className strings conditionally
import ContentEditable from "react-contenteditable"; // Component for editable content area
import { GoBold } from "react-icons/go"; // Icon for bold formatting
import { MdFormatUnderlined, MdOutlineFormatColorFill } from "react-icons/md"; // Icons for underline and color fill
import { BiRedo, BiUndo } from "react-icons/bi"; // Icons for redo and undo actions
import { LuHighlighter } from "react-icons/lu"; // Icon for highlight functionality
import { AiOutlineItalic } from "react-icons/ai"; // Icon for italic formatting
import ReactDOMServer from "react-dom/server"; // Server-side rendering utility for React
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiCodeFill,
  RiFontSansSerif,
  RiFontSize2,
  RiLinkM,
  RiListOrdered2,
  RiStrikethrough,
  RiSubscript,
  RiSuperscript,
} from "react-icons/ri"; // Various icons for alignment, font styles, link, list types, strikethrough, subscript, superscript
import { ImPageBreak, ImTable2 } from "react-icons/im"; // Icons for page break and table
import { IoImageOutline } from "react-icons/io5"; // Icon for image insertion
import useUndoable from "use-undoable"; // Custom hook for managing undo-redo functionality
import ReactTooltip from "../../tooltips/(react-tooltip)/react-tooltip";
import DevPopover from "../../popovers/(dev-popover)/dev-popover";

// Styling for buttons
const buttonStyle =
  "toolBtn text-xl hover:bg-cyan-500/50 text-black dark:text-white rounded-md p-1";
//********* Main Rich Text Editor component***********//
type editorProps={
  editorData:string,
  setEditorData:(e:string)=>void
}
const DevRichTxtEditor = ({editorData, setEditorData}:editorProps) => {
  const [txtData, setTxtData, { undo, redo }] = useUndoable(editorData); // Initialize undoable state with initial text
  const [selectedTxtNode, setSelectedTxtNode] = useState(""); // State for storing selected text node

  // Function to apply formatting commands
  const formatText = (command: string, value: string | null = null) => {
    if (value === "unset") {
      document.execCommand("styleWithCSS", false, null ?? undefined); // Reset CSS styling
    }
    document.execCommand(command, false, value ?? undefined); // Apply command with optional value
    setSelectedTxtNode(""); // Clear selected text node after applying command
  };

  // Specific formatting functions
  const makeBold = () => formatText("bold"); // Make text bold
  const makeItalic = () => formatText("italic"); // Make text italic
  const makeUnderline = () => formatText("underline"); // Underline text
  const makeHighlight = (color: string) => formatText("hiliteColor", color); // Highlight text with specified color
  const changeTxtColor = (color: string) => formatText("foreColor", color); // Change text color
  const changeFontFamily = (value: string) => formatText("fontName", value); // Change font family
  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      formatText("createLink", url);
      formatText("underline");
    }
  }; // Prompt for URL and insert link
  const alignLeft = () => formatText("justifyLeft"); // Align text left
  const alignCenter = () => formatText("justifyCenter"); // Center-align text
  const alignRight = () => formatText("justifyRight"); // Right-align text
  const strikeThroughText = () => formatText("strikeThrough"); // Strike through text
  const subScriptTxt = () => formatText("subscript"); // Subscript text
  const OrderedList = () => formatText("insertOrderedList"); // Insert ordered list
  const superScriptTxt = () => formatText("superscript"); // Superscript text
  const insertLineBreak = () =>
    formatText("insertHTML", `<hr class="my-1" /><br/>`); // Insert horizontal line
  const insertImage = () => {
    const url = prompt("Enter the Image URL:");
    if (url) {
      formatText(
        "insertHTML",
        `<img src=${url} alt="image" class="h-full max-h-72 w-full object-cover object-center rounded-md border" /><br/> `
      );
    }
  }; // Prompt for image URL and insert image
  const changeTxtToCode = () => {
    if (selectedTxtNode) {
      formatText(
        "insertHTML",
        `<code class="bg-cyan-500/50 rounded-md px-2">${selectedTxtNode}</code> ‎`
      );
    }
  }; // Wrap selected text in code tags
  const changeFontSize = (textType: string) => {
    let htmlToInsert = "";
    let fontStyled = "text-base font-normal";

    if (textType === "Heading 1") {
      fontStyled = "text-4xl font-extrabold";
    } else if (textType === "Heading 2") {
      fontStyled = " text-3xl font-bold";
    } else if (textType === "Heading 3") {
      fontStyled = "text-xl font-semibold";
    } else if (textType === "Heading 4") {
      fontStyled = "text-lg font-medium";
    } else if (textType === "Heading 5") {
      fontStyled = "text-sm font-normal";
    }
    const selection = window.getSelection();
    const selectedTxtNode = selection?.toString();

    if (textType.startsWith("Heading")) {
      const headingLevel = textType.split(" ")[1];
      htmlToInsert = `<h${headingLevel} class=${clsx(
        fontStyled
      )}">${selectedTxtNode}</h${headingLevel}>`;
    } else if (textType === "Paragraph") {
      htmlToInsert = `<p>${selectedTxtNode}</p>`;
    }

    document.execCommand("insertHTML", false, htmlToInsert);
  }; // Change font size based on text type
  const insertTable = () => {
    const data = prompt("Enter number of rows and columns separated by comma");
    if (!data) return;
    const [rows, columns] = data.split(",").map(Number);
    if (!rows || !columns) {
      return alert("Enter both row and column");
    }
    const htmlStringTable = ReactDOMServer.renderToString(
      <table className="border-collapse border border-gray-500 rounded-md mx-auto">
        <tbody>
          {Array.from({ length: rows }, (_, i) => (
            <tr key={i} className="border">
              {Array.from({ length: columns }, (_, j) => (
                <td key={`${i}-${j}`} className="border px-4 py-2">
                  Cell ({i}, {j})
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    formatText("insertHTML", `${htmlStringTable} <br/> `);
  }; // Prompt for table dimensions and insert table

  // Effect hook to capture mouse up event for selecting text
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range?.toString();
        if (selectedText) {
          setSelectedTxtNode(selectedText); // Update selected text node
        }
      }
    };

    document.addEventListener("mouseup", handleMouseUp); // Attach event listener

    return () => {
      document.removeEventListener("mouseup", handleMouseUp); // Clean up event listener
    };
  }, []);

  // Toolbar buttons configuration
  const toolbarButtons = [
    // Array of objects defining toolbar buttons with tooltips, icons, and actions
    { tooltip: "bold", element: GoBold, action: makeBold },
    { tooltip: "italic", element: AiOutlineItalic, action: makeItalic },
    {
      tooltip: "underline",
      element: MdFormatUnderlined,
      action: makeUnderline,
    },
    {
      tooltip: "strike through",
      element: RiStrikethrough,
      action: strikeThroughText,
    },
    {
      tooltip: "highlight",
      type: "popover",
      element: LuHighlighter,
      popover: () => (
        <div className="flex items-center gap-1">
          {["unset", "red", "blue", "green", "yellow", "purple"].map(
            (color, i) => (
              <button
                key={i}
                onClick={() => makeHighlight(color)}
                style={{ backgroundColor: color }}
                className="w-5 h-5 rounded-full border hover:scale-95 transition-all"
              />
            )
          )}
        </div>
      ),
    },
    {
      tooltip: "font family",
      type: "popover",
      element: RiFontSansSerif,
      popover: () => (
        <div className="flex flex-col text-black dark:text-white items-center gap-1 w-fit text-base divide-y">
          {[
            "serif",
            "sans-serif",
            "monospace",
            "cursive",
            "fantasy",
            "system-ui",
          ].map((font, i) => (
            <button
              key={i}
              onClick={() => changeFontFamily(font)}
              style={{ fontFamily: font }}
              className="w-full hover:rounded-lg hover:bg-slate-100/50"
            >
              {font}
            </button>
          ))}
        </div>
      ),
    },
    {
      tooltip: "font size",
      type: "popover",
      element: RiFontSize2,
      popover: () => (
        <div className="flex flex-col text-black dark:text-white items-center gap-1 w-fit text-base divide-y">
          {[
            "Heading 1",
            "Heading 2",
            "Heading 3",
            "Heading 4",
            "Heading 5",
            "Paragraph",
          ].map((size, i) => (
            <button
              key={i}
              onClick={() => changeFontSize(size)}
              className="w-full hover:rounded-lg hover:bg-slate-100/50"
            >
              {size}
            </button>
          ))}
        </div>
      ),
    },
    {
      tooltip: "color",
      type: "popover",
      element: MdOutlineFormatColorFill,
      popover: () => (
        <div className="flex items-center gap-1">
          {["unset", "red", "blue", "green", "yellow", "purple"].map(
            (color, i) => (
              <button
                key={i}
                onClick={() => changeTxtColor(color)}
                style={{ backgroundColor: color }}
                className="w-5 h-5 rounded-full border hover:scale-95 transition-all"
              />
            )
          )}
        </div>
      ),
    },
    { tooltip: "link", element: RiLinkM, action: insertLink },
    { tooltip: "align left", element: RiAlignLeft, action: alignLeft },
    { tooltip: "align center", element: RiAlignCenter, action: alignCenter },
    { tooltip: "align right", element: RiAlignRight, action: alignRight },
    { tooltip: "order list", element: RiListOrdered2, action: OrderedList },
    { tooltip: "subscript", element: RiSubscript, action: subScriptTxt },
    { tooltip: "superscript", element: RiSuperscript, action: superScriptTxt },
    {
      tooltip: "horizontal line",
      element: ImPageBreak,
      action: insertLineBreak,
    },
    { tooltip: "image", element: IoImageOutline, action: insertImage },
    { tooltip: "code", element: RiCodeFill, action: changeTxtToCode },
    { tooltip: "Table", element: ImTable2, action: insertTable },
  ];

    useEffect(() => {
      setEditorData(txtData)
    }, [txtData])
    
  return (
    <main className="border border-cyan-500/50 overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] w-full max-w-3xl h-full min-h-64 resize-y bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-2">
      {/* Toolbar section */}
      <section className="pt-3 flex-wrap py-2 sticky top-0 bg-slate-100 dark:bg-slate-800 border-cyan-500/30 border w-full rounded-xl flex items-center gap-[5px] p-1">
        {toolbarButtons.map((Button, i) => (
          <ReactTooltip key={i} tipData={Button.tooltip}>
            {Button.type === "popover" ? (
              <DevPopover
                popButton={
                  <button className={buttonStyle}>
                    <Button.element />
                  </button>
                }
              >
                <Button.popover />
              </DevPopover>
            ) : (
              <button onClick={Button.action} className={buttonStyle}>
                <Button.element />
              </button>
            )}
          </ReactTooltip>
        ))}
        {/* Undo and Redo buttons */}
        <span className="px-2  bg-cyan-500/20 text-black dark:text-white flex items-center gap-2 rounded-lg ml-3 border-cyan-500/50 border justify-center">
          <ReactTooltip tipData={"undo"}>
            <button
              onClick={undo}
              className={clsx(buttonStyle, "!rounded-full")}
            >
              <BiUndo className="text-xl" />
            </button>
          </ReactTooltip>
          <ReactTooltip tipData={"redo"}>
            <button
              onClick={redo}
              className={clsx(buttonStyle, "!rounded-full")}
            >
              <BiRedo className="text-xl" />
            </button>
          </ReactTooltip>
        </span>
      </section>
      {/* Editable content area */}
      <ContentEditable
        contentEditable
        className="md:w-[96%] text-black dark:text-white border-x border-cyan-500/50 mt-2 mx-auto flex-1 focus:outline-none p-5"
        onChange={(e) => setTxtData(e.target.value || "<div></div>")} // Update text data on change
        html={txtData} // Render HTML content
      />
    </main>
  );
};

export default DevRichTxtEditor;
