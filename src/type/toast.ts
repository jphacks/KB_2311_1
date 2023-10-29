export type ToastStyle = "success" | "failed";

export type Toast = {
  isShown: boolean;
  message: string;
  style: ToastStyle;
};

export type ToastResult<T = any> = {
  message: string;
  style: ToastStyle;
  data?: T;
};
