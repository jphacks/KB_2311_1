export type StructureType = "木造" | "S造・鉄骨造" | "RC造・鉄筋コンクリート造";

interface StructureObject {
  [key: number]: StructureType;
}

export const Structure: StructureObject = {
  1: "木造",
  2: "S造・鉄骨造",
  3: "RC造・鉄筋コンクリート造",
};