import React from "react";
import DevModalV1, { ModalTrigger } from "./dev-modal-v1";

const DevModalV1Usage = () => {
  return (
    <DevModalV1
      title="Dev Modal"
      modalBtn={
        <button className="bg-accentNeon p-2 px-4 rounded-md hover:opacity-80">
          Open Modal
        </button>
      }
    >
      <div className="flex flex-col gap-3 w-full">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum
          magni quia enim, vel autem maiores. Beatae eveniet omnis nam non ab,
          quo suscipit repellat ratione enim delectus pariatur quos.
        </p>

        <ModalTrigger>
          <button className="bg-accentNeon p-1 px-4 rounded-xl hover:opacity-80">
            Close
          </button>
        </ModalTrigger>
      </div>
    </DevModalV1>
  );
};

export default DevModalV1Usage;

