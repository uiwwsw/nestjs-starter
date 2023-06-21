'use client';
import {FormEvent} from 'react';
import {redirect, useRouter} from 'next/navigation'
import {Input, Form} from '@packages/components';
import { Button } from '@packages/components/stories/Button';
import styled from 'styled-components';
import { signIn } from '@/utils/signIn';
import { getUser } from '@/utils/getUser';
const StyledMain = styled.main`

`;
export default function SignIn() {
  const router = useRouter()
  const adapterSignIn = async (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      await signIn();
      router.push('/');

    } catch {

    }
  }
  return (
    <StyledMain>
      <Form onSubmit={adapterSignIn}>
        <Input label='ID' type="email" required/>
        <Input label='PW' type="password" required/>
        <Button type="submit">로그인</Button>
      </Form>
    </StyledMain>
  )
}
