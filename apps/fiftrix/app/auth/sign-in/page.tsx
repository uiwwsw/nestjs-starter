'use client';
import {Input, Form} from '@packages/components';
import styled from 'styled-components';
const StyledMain = styled.main`

`;
export default function SignIn() {
  return (
    <StyledMain>
      <Form onSubmit={function (e) {
        e.preventDefault();
        alert('로그인 완료되었습니다.');
      } }>
        <Input label='ID' required/>
        <Input label='PW' type="password" required/>
        <button type="submit">로그인</button>
      </Form>
    </StyledMain>
  )
}
