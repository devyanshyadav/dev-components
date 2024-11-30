import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

type TreeNode = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
};

type TreeState = {
  expanded: string[];
  selected: string | null;
};

type TreeProps = {
  data: TreeNode[];
  initialExpandedNodes?: string[];
  onChange?: (selectedId: string | null) => void;
  iconOnOpen?: React.ReactNode;
  iconOnClose?: React.ReactNode;
  childrenIcon?: React.ReactNode;
};

const TreeNode = ({
  node,
  state,
  onAction,
  iconOnOpen = <FiChevronDown />,
  iconOnClose = <FiChevronRight />,
  childrenIcon,
}: {
  node: TreeNode;
  state: TreeState;
  onAction: (type: "toggle" | "select", id: string) => void;
  iconOnOpen?: React.ReactNode;
  iconOnClose?: React.ReactNode;
  childrenIcon?: React.ReactNode;
}) => {
  const isExpanded = state.expanded.includes(node.id);
  // const isSelected = state.selected === node.id;

  return (
    <li className="ml-2">
      <div
        className={`flex items-center gap-2 px-3 py-1 rounded-md cursor-pointer hover:bg-ACCENT/30`}
        onClick={() => onAction("select", node.id)}
      >
        {node.children?.length ? (
          <button
            className={`text-lg flex-shrink-0  ${isExpanded && "text-ACCENT"}`}
            onClick={(e) => {
              e.stopPropagation();
              onAction("toggle", node.id);
            }}
          >
            {isExpanded ? iconOnOpen : iconOnClose}
          </button>
        ) : (
          <span className="w-fit flex-shrink-0">
            {node.icon || childrenIcon}
          </span>
        )}
        <span className={`text-sm`}>{node.label}</span>
      </div>

      {(node.children || []).length > 0 && (
        <div
          className={`ml-4 overflow-hidden transition-all duration-300
          ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul>
            {node?.children?.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                state={state}
                onAction={onAction}
                iconOnOpen={iconOnOpen}
                iconOnClose={iconOnClose}
                childrenIcon={childrenIcon}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const DevTreeDropdownV1 = ({
  data,
  initialExpandedNodes = [],
  onChange,
  iconOnOpen,
  iconOnClose,
  childrenIcon,
}: TreeProps) => {
  const [state, setState] = useState<TreeState>({
    expanded: initialExpandedNodes,
    selected: null,
  });

  const handleAction = (type: "toggle" | "select", id: string) => {
    setState((prev) => {
      const newState =
        type === "toggle"
          ? {
              ...prev,
              expanded: prev.expanded.includes(id)
                ? prev.expanded.filter((i) => i !== id)
                : [...prev.expanded, id],
            }
          : {
              ...prev,
              selected: prev.selected === id ? null : id,
            };

      if (type === "select") onChange?.(newState.selected);
      return newState;
    });
  };

  return (
    <div className="bg-LIGHT dark:bg-DARK rounded-md p-2 place-self-start">
      <ul className="space-y-1">
        {data.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            state={state}
            onAction={handleAction}
            iconOnOpen={iconOnOpen}
            iconOnClose={iconOnClose}
            childrenIcon={childrenIcon}
          />
        ))}
      </ul>
    </div>
  );
};

export default DevTreeDropdownV1;
