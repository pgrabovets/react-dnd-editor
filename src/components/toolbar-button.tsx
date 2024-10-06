"use client";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

type ToolbarButtonProps = {
  icon: JSX.Element;
  label: string;
  type: string;
  id: string | number;
  onClick?: () => void;
};

export default function ToolbarButton({
  icon,
  label,
  id,
  type,
  onClick,
}: ToolbarButtonProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${id}`,
    data: {
      type: type,
    },
  });

  const [isMouseMove, setIsMouseMove] = useState(false);

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-[#F6F9FE] rounded-md py-[15px] flex flex-col gap-2 justify-center items-center cursor-pointer"
      onMouseDown={() => {
        setIsMouseMove(false);
      }}
      onMouseUp={() => {
        if (!isMouseMove) {
          onClick && onClick();
        }
      }}
      onMouseMove={() => {
        setIsMouseMove(true);
      }}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </button>
  );
}
