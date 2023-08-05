import { ChildrenType } from "@/types/utils";
import React from "react";

export const Container: React.FC<ChildrenType> = ({ children }) => {
  return <div className="px-5">{children}</div>;
};
