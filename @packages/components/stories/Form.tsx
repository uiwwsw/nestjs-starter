'use client';
import React, { FormEvent } from "react";
import styled from "styled-components";
const StyledForm = styled.form``;
interface FormProps {
  onSubmit: (e:FormEvent) => unknown;
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
