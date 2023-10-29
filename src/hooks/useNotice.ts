import { ERROR, SUCCESS } from "@/constants/messages";
import { useMemo } from "react";
import { toast } from "react-toastify";

export type NoticeType = {
  info: (title: string) => void;
  warn: (title: string) => void;
  success: (title?: string) => void;
  error: (title?: string, error?: unknown) => void;
};

export const useNotice = (): NoticeType => {
  return useMemo(() => {
    return {
      info: (title: string) => toast.info(title),
      warn: (title: string) => toast.warn(title),
      success: (title?: string) => toast.success(title ?? SUCCESS),
      error: (title?: string, error?: unknown) => toast.error(title ?? ERROR),
    };
  }, []);
};
