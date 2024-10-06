import BlockButtonForm from "./block-button-form";
import BlockImageForm from "./block-image-form";
import BlockHeadlineFrom from "./block-headline-form";
import BlockParagraphFrom from "./block-paragraph-form";
import type { StateBlock } from "@/types/block-types";

type BlockFormProps = {
  stateBlock: StateBlock;
};

export default function BlockForm({ stateBlock }: BlockFormProps) {
  const { type } = stateBlock;

  if (type === "button") {
    return <BlockButtonForm stateBlock={stateBlock} />;
  }

  if (type === "image") {
    return <BlockImageForm stateBlock={stateBlock} />;
  }

  if (type === "headline") {
    return <BlockHeadlineFrom stateBlock={stateBlock} />;
  }

  if (type === "paragraph") {
    return <BlockParagraphFrom stateBlock={stateBlock} />;
  }
}
