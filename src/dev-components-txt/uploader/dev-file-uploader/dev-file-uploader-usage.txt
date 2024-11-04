"use client";
import React from "react";
import DevFileUploader from "./dev-file-uploader";

const DevFileUploaderUsage = () => {
  return (
    <DevFileUploader
      accept={["image/*", "application/pdf"]}
      maxSize={5242880}
      maxFiles={5}
      onDrop={(acceptedFiles) => {
        console.log(acceptedFiles);
      }}
      onSubmit={() => {
        console.log("submitted");
      }}
    />
  );
};

export default DevFileUploaderUsage;
