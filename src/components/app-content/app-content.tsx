"use client";
import { useAppSelector } from "@/redux/hooks";
import { StateBlock } from "@/types/block-types";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AppContent() {
  const blocks = useAppSelector((state) => state.blocks);

  const getContentBlock = (stateBlock: StateBlock) => {
    const { type } = stateBlock;

    if (type === "button") {
      return (
        <div className="my-8 flex justify-center">
          <Button>{stateBlock.text}</Button>
        </div>
      );
    }

    if (type === "image") {
      return (
        <div className="flex justify-center">
          <Image
            width={1080}
            height={720}
            alt="default image"
            src={stateBlock.src || ""}
            onError={() => {}}
          />
        </div>
      );
    }

    if (type === "headline") {
      return (
        <h1 className="text-[22px] text-center my-8 text-[#252A32] font-bold">
          {stateBlock.text}
        </h1>
      );
    }

    if (type === "paragraph") {
      return (
        <p className="text-[#97AACD] text-center text-sm my-4">
          {stateBlock.text}
        </p>
      );
    }
  };

  return (
    <div className="grow py-8 px-12 overflow-hidden">
      {blocks.map((item) => getContentBlock(item))}
    </div>
  );
}
