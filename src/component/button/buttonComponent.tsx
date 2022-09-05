import React from "react";
import {B1} from "./buttonStyle";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ 
    onClick, 
    children
  }) => { 
  return (
    <B1 onClick={onClick}>
      {children}
    </B1>
  );
}

export default Button;
