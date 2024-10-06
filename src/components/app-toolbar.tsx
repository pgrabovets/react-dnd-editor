"use client";
import { Grip, LetterText, Image, Text } from "lucide-react";
import ToolbarButton from "@/components/toolbar-button";
import { useEffect, useState } from "react";

export const toolsData = [
  {
    type: "headline",
    label: "Headline",
    icon: <LetterText />,
  },
  {
    type: "paragraph",
    label: "Paragraph",
    icon: <Text />,
  },
  {
    type: "button",
    label: "Button",
    icon: <Grip />,
  },
  {
    type: "image",
    label: "Image",
    icon: <Image />,
  },
];

type AppToolbarProps = {
  onClick?: (type: string) => void;
};

export default function AppToolbar({ onClick }: AppToolbarProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-w-[270px] p-7">
      <div className="grid grid-cols-2 gap-3 text-sm">
        {isMounted &&
          toolsData.map((item, index) => (
            <ToolbarButton
              key={item.label}
              id={index}
              type={item.type}
              icon={item.icon}
              label={item.label}
              onClick={() => {
                onClick && onClick(item.type);
              }}
            />
          ))}
      </div>
    </div>
  );
}
