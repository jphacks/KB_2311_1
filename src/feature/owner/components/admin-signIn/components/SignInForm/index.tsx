import { PlainButton } from "@/components/Button";
import { PlainInput } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInInputType, signInInputSchema } from "../../../../type/schema";
import { useRouter } from "next/router";

type Props = {
  onSubmit: (data: SignInInputType) => Promise<any>
}

export const SignInForm = ({ onSubmit }: Props): JSX.Element => {
  const router = useRouter();

  // react-hook-form
  const { handleSubmit, register, formState: { errors } } = useForm<SignInInputType>({
    resolver: zodResolver(signInInputSchema),
  });

  return (
    <form
      className="flex flex-col w-md space-y-4"
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
      <PlainButton innerText="ログイン" type="submit" />
    </form>
  );
};
