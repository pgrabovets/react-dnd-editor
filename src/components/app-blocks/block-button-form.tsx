import TextInput from "@/components/ui/TextInput";
import { changeBlock } from "@/redux/blocks/blocksSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { StateBlock } from "@/types/block-types";

type BlockButtonFormProps = {
  stateBlock: StateBlock;
};

export default function BlockButtonForm({ stateBlock }: BlockButtonFormProps) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <TextInput
        placeholder="Button text"
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
    </div>
  );
}
