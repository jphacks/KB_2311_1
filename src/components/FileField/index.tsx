import { ErrorText } from "@/components/ErrorText";
import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

type Props = {
  labelText: string;
  control?: Control<FieldValues, any>;
  error: string;
  registerValue: string;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
};

export const FileField = ({
  labelText,
  error,
  registerValue,
  register,
  watch,
}: Props) => {
  //リアルタイムで値の変更を監視
  const watchValues = watch(registerValue);
  const values = Array.from(watchValues ?? []);

  return (
    <>
      {/* リファクタ: PlainFileInputとしてmoleculeに切り分けたい */}
      <div className="flex flex-col gap-1 mb-4 w-full">
        <label>{labelText}</label>
        <div className="relative border-2 border-dashed border-gray-300 rounded-md p-6">
          <input
            {...register(registerValue)}
            type="file"
            accept=".jpg, .png, .jpeg"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            multiple
          />
          <div className="text-center">
            <p className="text-sm text-gray-500">
              ファイルをドラッグ＆ドロップするか、ここをクリックしてファイルをアップロードしてください。
            </p>
          </div>
        </div>
        {error && <ErrorText errorText={error} />}
      </div>

      <div className="flex flex-col gap-1 mb-4 w-full">
        <label htmlFor="sx">選択した写真</label>
        <ul className="break-all flex-row flex flex-wrap justify-center space-x-4 ">
          {values.length >= 1 &&
            values.map((preview, index) => {
              return (
                <li key={index}>
                  <img
                    src={URL.createObjectURL(preview as Blob)}
                    alt={`プレビュー${index}`}
                    className="w-56 h-56 object-cover"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
