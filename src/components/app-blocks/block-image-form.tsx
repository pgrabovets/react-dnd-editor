import TextInput from "@/components/ui/TextInput";
import { changeBlock } from "@/redux/blocks/blocksSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { StateBlock } from "@/types/block-types";

type BlockImageFormProps = {
  stateBlock: StateBlock;
};

export default function BlockImageForm({ stateBlock }: BlockImageFormProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-2">
      <TextInput
        placeholder="Image url"
        value={stateBlock.src}
        onValueChange={(value) => {
          dispatch(
            changeBlock({
              ...stateBlock,
              src: value,
            })
          );
        }}
      />
    </div>
  );
}
