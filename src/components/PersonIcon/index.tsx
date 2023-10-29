import Image from "next/image";
import { MouseEventHandler } from "react";
import { BsFillPersonFill } from "react-icons/bs";

type PersonIconProps = {
  originalIconImageSrc?: string;
  originalIconImageAlt?: string;
  defaultIconSize?: number;
  defaultIconFill?: string;
  defaultIconClassName?: string;
  originalIconClassName?: string;
  onClick?: MouseEventHandler<Element>;
};

export const PersonIcon = ({
  originalIconImageSrc,
  originalIconImageAlt = "人物アイコン",
  originalIconClassName = "min-w-10 min-h-10 rounded-full border border-black",
  defaultIconSize = 36,
  defaultIconFill = "gray",
  defaultIconClassName = "min-w-10 min-h-10 rounded-full bg-white border border-black p-1 color-black-100",
  onClick,
}: PersonIconProps): JSX.Element => (
  <>
    {originalIconImageSrc ? (
      <Image
        src={originalIconImageSrc}
        alt={originalIconImageAlt}
        width={40}
        height={40}
        className={originalIconClassName}
        onClick={onClick}
      />
    ) : (
      <BsFillPersonFill
        size={defaultIconSize}
        fill={defaultIconFill}
        className={defaultIconClassName}
        onClick={onClick}
      />
    )}
  </>
);
