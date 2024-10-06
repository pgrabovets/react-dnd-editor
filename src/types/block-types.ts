export type BlockType = "button" | "headline" | "paragraph" | "image";

export type StateBlock = {
  id: string;
  type: BlockType;
  label: string;
  src?: string;
  alt?: string;
  text?: string;
};
