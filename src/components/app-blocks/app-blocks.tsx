"use client";
import React, { useState } from "react";
import BlockItem from "@/components/app-blocks/block-item";
import { useDroppable } from "@dnd-kit/core";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { moveUp, moveDown, copy, remove } from "@/redux/blocks/blocksSlice";

type AppBlocksProps = {};

export default function AppBlocks({}: AppBlocksProps) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<string>();

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const blocks = useAppSelector((state) => state.blocks);

  return (
    <div
      ref={setNodeRef}
      className={`min-w-[270px] max-w-[538px] w-full bg-[#F5F5FC] p-7 flex flex-col gap-4 ${
        isOver ? "bg-slate-300 opacity-50" : ""
      }`}
    >
      {blocks.map((item, index) => (
        <BlockItem
          isActive={active === item.id}
          key={item.id}
          data={item}
          onClick={() => {
            setActive(item.id);
          }}
          onMoveUp={() => {
            dispatch(moveUp(index));
          }}
          onMoveDown={() => {
            dispatch(moveDown(index));
          }}
          onCopy={() => {
            dispatch(copy(index));
          }}
          onDelete={() => {
            dispatch(remove(index));
          }}
        />
      ))}
    </div>
  );
}
