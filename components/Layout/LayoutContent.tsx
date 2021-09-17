import { FC } from "react";

export const LayoutContent: FC = ({ children }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mx-4 my-8 md:my-10">{children}</div>
    </div>
  );
};
