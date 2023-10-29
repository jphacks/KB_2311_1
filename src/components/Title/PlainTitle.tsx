type Props = {
  titleText: string;
};

export const PlainTitle = ({ titleText }: Props): JSX.Element => (
  <h1 className="font-semibold text-2xl text-left w-full">{titleText}</h1>
);
