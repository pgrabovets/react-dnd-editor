import BlockForm from "@/components/app-blocks/block-form";
import { ArrowUp, ArrowDown, Copy, Trash2 } from "lucide-react";
import { toolsData } from "@/components/app-toolbar";
import type { StateBlock } from "@/types/block-types";

type BlockItemProps = {
  data: StateBlock;
  isActive?: boolean;
  onClick?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDelete?: () => void;
  onCopy?: () => void;
};

export default function BlockItem({
  data,
  isActive = false,
  onClick,
  onMoveUp,
  onMoveDown,
  onDelete,
  onCopy,
}: BlockItemProps) {
  const getBlockIcon = (type: string) => {
    const result = toolsData.find((item) => item.type === type);
    if (result) {
      return result.icon;
    }
  };

  const icon = getBlockIcon(data.type);
  const iconSize = 20;

  return (
    <div
      className={`rounded-md p-3 cursor-pointer relative grid gap-2 ${
        isActive ? "bg-[#D9E7FF]" : "bg-white"
      }`}
    >
      {isActive && (
        <div className="absolute bottom-full right-0 text-white pr-3 flex gap-2">
          <div className="bg-[#449CF4] rounded-sm flex">
            <button
              className="p-1"
              onClick={() => {
                onMoveUp && onMoveUp();
              }}
            >
              <ArrowUp size={iconSize} />
            </button>
            <button
              className="p-1"
              onClick={() => {
                onMoveDown && onMoveDown();
              }}
            >
              <ArrowDown size={iconSize} />
            </button>
          </div>
          <div className="bg-[#68C2E9] rounded-sm flex">
            <button
              className="p-1"
              onClick={() => {
                onCopy && onCopy();
              }}
            >
              <Copy size={iconSize} />
            </button>
            <button
              className="p-1"
              onClick={() => {
                onDelete && onDelete();
              }}
            >
              <Trash2 size={iconSize} />
            </button>
          </div>
        </div>
      )}
      <div
        className="flex flex-col justify-center items-center gap-2"
        onClick={() => {
          onClick && onClick();
        }}
      >
        <div>{icon}</div>
        <p>{data.label}</p>
      </div>
      {isActive && <BlockForm stateBlock={data} />}
    </div>
  );
}
