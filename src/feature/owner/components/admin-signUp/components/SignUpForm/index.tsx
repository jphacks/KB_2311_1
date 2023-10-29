import { PlainButton } from "@/components/Button";
import { PlainInput } from "@/components/Input";
import { useForm } from "react-hook-form";
import { SignInInputType, SignUpInputType, signUpInputSchema } from "../../../../type/schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (signUpData: SignUpInputType) => Promise<void>
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const { handleSubmit, register, formState: { errors } } = useForm<SignUpInputType>({
    resolver: zodResolver(signUpInputSchema),
  });

  return (
    <form
      className="flex flex-col w-md space-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-xl text-center mb-2">Fill Home</h2>
      <PlainInput
        label="メールアドレス"
        register={register}
        registerValue="email"
        inputType="email"
        error={errors.email?.message as string}
      />
      <PlainInput
        label="パスワード"
        {...register("password")}
        register={register}
        registerValue="password"
        inputType="password"
        error={errors.password?.message as string}
      />
      <div className="flex space-x-2 w-full">
        <div className="w-1/2">
          <PlainInput
            register={register}
            label="苗字"
            registerValue="last_name"
            inputType="text"
            error={errors.last_name?.message as string}
          />
        </div>
        <div className="w-1/2">
          <PlainInput
            register={register}
            label="名前"
            registerValue="first_name"
            inputType="text"
            error={errors.first_name?.message as string}
          />
        </div>
      </div>
      <PlainInput
        label="電話番号"
        register={register}
        registerValue="phone_number"
        inputType="tel"
        error={errors?.phone_number?.message as string}
      />
      <PlainButton innerText="新規登録" type="submit" />
    </form>
  );
};
