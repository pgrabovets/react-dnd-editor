import TextInput from "@/components/ui/TextInput";
import { changeBlock } from "@/redux/blocks/blocksSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { StateBlock } from "@/types/block-types";

type BlockParagraphFromProps = {
  stateBlock: StateBlock;
};

export default function BlockParagraphFrom({
  stateBlock,
}: BlockParagraphFromProps) {
  const dispatch = useAppDispatch();

  return (
    <TextInput
      placeholder="Paragraph text"
      value={stateBlock.text}
      onValueChange={(value) => {
        dispatch(
          changeBlock({
            ...stateBlock,
            text: value,
          })
        );
      }}
    />
  );
}
