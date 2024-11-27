import { ReactNode } from "react";

const D = {
  div: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  input: ({
    className,
    placeholder,
    ...opts
  }: {
    className?: string;
    placeholder?: string;
  }) => (
    <input
      type="text"
      {...opts}
      className={
        className + "mx-2 border border-1 border-zinc-800 rounded-md my-1"
      }
      placeholder={placeholder}
    />
  ),
  card: ({ children, ...opts }: { children: ReactNode }) => (
    <div
      {...opts}
      className=" h-full border border-2 border-zinc-700 rounded-lg p-4 m-4 bg-zinc-100"
    >
      {children}
    </div>
  ),
};

export default D;
