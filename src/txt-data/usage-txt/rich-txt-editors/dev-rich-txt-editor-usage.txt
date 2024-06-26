'use client'
import React, { useState } from "react";
import DevRichTxtEditor from "../../preview-components/rich-txt-editors/dev-rich-txt-editor";

const DevRichTxtEditorUsage = () => {
  const [editorData, setEditorData] = useState("Hello Duniya")
  return (
    <DevRichTxtEditor
      editorData={editorData}
      setEditorData={setEditorData}
    />
  );
};

export default DevRichTxtEditorUsage;
