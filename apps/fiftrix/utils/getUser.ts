import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'
 
export const preload = () => {
  void getUser()
}
 
export const getUser = cache(async () => {
  // const cookiesStore = cookies();
  // const nameCookie= cookiesStore.get('name');
  const d = await fetch(`http://localhost:1234/auth/getUser`);
  if (d.ok) return await d.json()
  
  // redirect('/auth/sign-in');
})