'use client';
import React, {FormHTMLAttributes} from "react";
import styled from "styled-components";
const StyledForm = styled.form``;
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
 export const Form = ({
  children,
  ...props
}: FormProps) => {

  return (
    <StyledForm {...props}>
      {children}
    </StyledForm>
  );
};
