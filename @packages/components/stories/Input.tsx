'use client';
import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import {$gutter, $padding, $radius} from '@packages/common/ui-variables'
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding: ${$padding.vertical}px ${$padding.horizon}px;
  span {
    & + * {
      margin-top: ${$gutter}px;
    }
  }
  input {
    flex: 1;
    border: 1px solid red;
    border-radius: ${$radius}px;
    padding: 0;
    outline: none;
  }
`;
interface InputProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  id?:string;
  required?: true;
}

/**
 * Primary UI component for user interaction
 */
 export const Input = ({
  label,
  id,
  type,
  ...props
}: InputProps) => {
  return (
    <StyledLabel htmlFor={id}>
      {label && <span>{label}</span>}
      <input id={id} type={type ?? 'text'} {...props} />
    </StyledLabel>
  );
};
