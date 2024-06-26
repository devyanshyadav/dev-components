import React from "react";
import { FiSearch } from "react-icons/fi";
import DevInput from "../../preview-components/inputs/dev-input";

const DevInputUsage = () => {
  return (
    <div className="space-y-4 flex flex-col gap-2">
      <section className="space-y-2  p-3 rounded-md border border-cyan-500/30">
        <h2 className="text-sm  text-cyan-500">
          Variants (base/ bordered/ faded/ underline)
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
          <DevInput
            type="text"
            labelName="Search"
            variant="base"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            labelName="Search"
            variant="bordered"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            variant="faded"
            labelName="Search"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            labelName="Search"
            variant="underline"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
        </div>
      </section>
      <section className="space-y-2  p-3 rounded-md border border-cyan-500/30">
        <h2 className="text-sm  text-cyan-500">Sizes (sm/ md/ lg)</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
          <DevInput
            type="text"
            labelName="Search"
            scale="sm"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            labelName="Search"
            scale="md"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            labelName="Search"
            scale="lg"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
        </div>
      </section>
      <section className="space-y-2  p-3 rounded-md border border-cyan-500/30">
        <h2 className="text-sm  text-cyan-500">
          Roundness (none/ sm/ md/ lg/full)
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
          <DevInput
            type="text"
            rounded="none"
            labelName="Search"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            rounded="sm"
            labelName="Search"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
          <DevInput
            type="text"
            rounded="md"
            labelName="Search"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />

          <DevInput
            type="text"
            labelName="Search"
            rounded="full"
            placeholder="Enter product name"
            icon={<FiSearch />}
          />
        </div>
      </section>
    </div>
  );
};

export default DevInputUsage;
