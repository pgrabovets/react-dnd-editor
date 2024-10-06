"use client";
import AppHeader from "@/components/app-header";
import AppToolbar from "@/components/app-toolbar";
import AppBlocks from "@/components/app-blocks/app-blocks";
import AppContent from "@/components/app-content/app-content";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useAppDispatch } from "@/redux/hooks";
import { addBlock } from "@/redux/blocks/blocksSlice";
import type { StateBlock } from "@/types/block-types";

export default function Home() {
  const dispatch = useAppDispatch();

  const getPayload = (type: string): StateBlock | null => {
    if (type === "button") {
      return {
        id: "",
        type: type,
        label: "Button",
        text: "Button text",
      };
    }

    if (type === "headline") {
      return {
        id: "",
        type: type,
        label: "Headline",
        text: "Headline text",
      };
    }

    if (type === "paragraph") {
      return {
        id: "",
        type: type,
        label: "Paragraph",
        text: "Paragraph text",
      };
    }

    if (type === "image") {
      return {
        id: "",
        type: type,
        label: "Image",
        alt: "Defaut image",
        src: "/e4272b8dc1c11cbae6f7c8fb1fc36913.jpg",
      };
    }

    return null;
  };

  const dispatchAddBlock = (type: string) => {
    const payload = getPayload(type);
    if (payload) {
      dispatch(addBlock(payload));
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    if (e.over && e.over.id === "droppable") {
      if (e.active.data.current) {
        const type: string = e.active.data.current.type;
        dispatchAddBlock(type);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="absolute inset-0 h-full flex flex-col">
        <AppHeader />
        <div className="flex grow">
          <AppToolbar
            onClick={(type) => {
              dispatchAddBlock(type);
            }}
          />
          <AppBlocks />
          <AppContent />
        </div>
      </div>
    </DndContext>
  );
}
