'use client';
import React,{ ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import {$padding} from '@packages/common/ui-variables'
const StyledButton = styled.button`
  padding: ${$padding.vertical}px ${$padding.horizon}px;
  
`;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  // type?: 'submit' | 'button' 
}

/**
 * Primary UI component for user interaction
 */
 export const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};
