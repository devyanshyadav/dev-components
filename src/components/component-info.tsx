"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import CopyCode from "./copy-code";
import clsx from "clsx";

type componentInfoProps = {
  component_code: {
    tsxCode: string;
    jsxCode: string;
  };
  component_preview: React.ReactNode;
  component_details: any;
  component_name: string;
  component_usage_code: string | null;
};

const ComponentInfo = ({
  component_code,
  component_preview,
  component_details,
  component_name,
  component_usage_code,
}: componentInfoProps) => {
  const [CurrTab, setCurrTab] = useState(0);
  const [copyCode, setCopyCode] = useState(false);
  const [copyNPM, setCopyNPM] = useState(false);
  const jsxCodeString = component_code.jsxCode;
  const tsxCodeString = component_code.tsxCode;
  const [currVariant, setCurrVariant] = useState<string>(
    jsxCodeString || tsxCodeString
  );

  const usageCodeString = component_usage_code;

  return (
    <div className="w-full">
      <h3 className="font-semibold flex items-center gap-4 opacity-80 text-xl">
        # {component_name}{" "}
        {component_details.doc_links &&
          component_details.doc_links.length > 0 &&
          component_details.doc_links.map((item: string, index: number) => (
            <Link
              target="_blank"
              key={index}
              href={item}
              className="p-1 gap-2 hover:opacity-80 text-xs flex items-center justify-center w-fit px-2 rounded-md border border-accent bg-accent/20 text-accent"
            >
              Docs <GoLinkExternal />
            </Link>
          ))}
      </h3>

      <div className="w-full mt-2  p-3 pt-0 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden max-h-96 min-h-56 bg-light-secondary dark:bg-dark-secondary rounded-lg overflow-hidden relative flex flex-col">
        <ul className="w-full bg-light-secondary dark:bg-dark-secondary p-3 pb-0 flex items-center gap-5 text-sm sticky top-0 z-30   ">
          {["Preview", "Code", "Usage", "Details"].map((item, index) => (
            <li
              key={index}
              onClick={() => setCurrTab(index)}
              className={`hover:text-accent select-none cursor-pointer border-transparent border-b-2 hover:border-accent z-10 ${
                CurrTab === index && "border-accent text-accent"
              }`}
            >
              {item}
            </li>
          ))}
          <li key={"copy-code"}>
            <CopyCode
              textToCopy={CurrTab == 2 ? usageCodeString || "" : currVariant}
              setCopied={setCopyCode}
            >
              <button className="bg-light-secondary dark:bg-dark-secondary text-accent border border-accent absolute  select-none top-0 -right-3 rounded-bl-lg rounded-tr-lg z-50 p-1 px-3 text-sm font-semibold cursor-pointer bg-light-primary dark:bg-dark-primary hover:bg-accent/30">
                {copyCode ? "Copied!" : "Copy"}
              </button>
            </CopyCode>
          </li>
          <li key={"bottom-line"}>
            <hr className="transform absolute  border-0 right-0 left-0 h-[2px] bottom-0 bg-gradient-to-r from-accent/50 to-transparent" />
          </li>
        </ul>
        {CurrTab === 1 && (
          <span className="absolute bottom-4 right-4 bg-accent/20 text-accent border border-accent  select-none  rounded-lg z-50 p-1 px-3 text-sm font-semibold divide-x divide-accent space-x-2">
            {jsxCodeString && (
              <label
                htmlFor={"jsx"}
                className={
                  "has-[:checked]:opacity-100 opacity-60 relative cursor-pointer"
                }
                onClick={() => setCurrVariant(jsxCodeString)}
              >
                <input
                  type="radio"
                  id="jsx"
                  name="variant"
                  className="absolute scale-0 opacity-0"
                />
                jsx
              </label>
            )}
            {tsxCodeString && (
              <label
                htmlFor="tsx"
                className={
                  "has-[:checked]:opacity-100 opacity-60 relative pl-2 cursor-pointer"
                }
                onClick={() => setCurrVariant(tsxCodeString)}
              >
                <input
                  id="tsx"
                  name="variant"
                  type="radio"
                  className="absolute scale-0 opacity-0"
                />
                tsx
              </label>
            )}
          </span>
        )}

        {CurrTab == 0 ? (
          <div className="flex-1 w-full svg-pattern-dots rounded-xl flex items-center justify-center p-5">
            {component_preview}
          </div>
        ) : CurrTab == 1 ? (
          <SyntaxHighlighter
            className="editor-ref text-sm rounded-b-lg [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden"
            language="javascript"
            style={dracula}
            wrapLines={true}
          >
            {currVariant}
          </SyntaxHighlighter>
        ) : CurrTab == 2 ? (
          <SyntaxHighlighter
            className="editor-ref text-sm rounded-b-lg [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden"
            language="javascript"
            style={dracula}
            wrapLines={true}
          >
            {component_usage_code || ""}
          </SyntaxHighlighter>
        ) : (
          <div className="flex-1 w-full p-4 overflow-y-scroll space-y-4">
            <h2 className="text-accent bg-accent/20 px-2 text-sm rounded-lg w-fit">
              {component_details.description}
            </h2>

            <h3 className="font-semibold text-accent/80">
              Packages: {component_details.packages.length}
            </h3>

            {component_details.packages.length > 0 && (
              <code className="text-sm bg-accent/20 text-accent w-fit p-1 border border-accent px-2 rounded-lg">
                npm i
                {component_details.packages.map((item: any, index: number) => (
                  <React.Fragment key={index}>
                    {" "}
                    <Link
                      target="_blank"
                      className="hover:underline cursor-pointer"
                      href={item.pckg_link}
                    >
                      {item.pckg_name}
                    </Link>
                  </React.Fragment>
                ))}
                <CopyCode
                  textToCopy={
                    "npm i " +
                    component_details.packages
                      .map((item: any) => item.pckg_name + " ")
                      .join("")
                  }
                  setCopied={setCopyNPM}
                >
                  <button className="bg-secondary/20 text-accent rounded-md p-1 aspect-square translate-y-[2px]">
                    {copyNPM ? <FaCheck /> : <IoCopy />}
                  </button>
                </CopyCode>
              </code>
            )}

            <h3 className="font-semibold text-accent/80">Features</h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.features.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-accent/80 flex  gap-3 items-center">
              Props{" "}
              <p className="text-xs font-light">
                ( Additional props can be included as needed )
              </p>
            </h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.props.map((item: any, index: number) => (
                <li key={index}>
                  {" "}
                  <code className="bg-accent/20 text-accent px-2 rounded-sm">{`${item.propName}={ ${item.propExample} }`}</code>{" "}
                  {` // ${item.propDetail}`}{" "}
                </li>
              ))}
            </ul>
            {component_details.doc_links &&
              component_details.doc_links.length > 0 &&
              component_details.doc_links.map((item: string, index: number) => (
                <Link
                  target="_blank"
                  href={item}
                  key={index}
                  className="p-1 gap-2 hover:opacity-80 flex items-center justify-center w-fit px-2 rounded-md border border-accent bg-accent/20 text-accent text-sm"
                >
                  Docs <GoLinkExternal />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentInfo;
