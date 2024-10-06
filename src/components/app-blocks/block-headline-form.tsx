import TextInput from "@/components/ui/TextInput";
import { changeBlock } from "@/redux/blocks/blocksSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { StateBlock } from "@/types/block-types";

type BlockHeadlineProps = {
  stateBlock: StateBlock;
};

export default function BlockHeadlineFrom({ stateBlock }: BlockHeadlineProps) {
  const dispatch = useAppDispatch();
  return (
    <TextInput
      placeholder="Headline text"
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
