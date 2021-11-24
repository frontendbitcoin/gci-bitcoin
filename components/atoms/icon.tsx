import { ReactNode, FC } from "react";

interface IconInterface {
  children: ReactNode;
}

const Icon: FC<IconInterface> = ({ children }) => (
  <div>
    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
      {children}
    </span>
  </div>
);

export default Icon;
