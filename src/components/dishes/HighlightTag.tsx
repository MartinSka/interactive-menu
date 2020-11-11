import React, { FC, useEffect } from "react";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const HighlightTag: FC<Props> = ({ children, setIsOpen }) => {
  useEffect(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return <span className="highlight">{children}</span>;
};

export default HighlightTag;
