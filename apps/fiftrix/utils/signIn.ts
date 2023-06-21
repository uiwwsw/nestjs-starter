import { cookies } from 'next/headers';
import { cache } from 'react'
 
export const preload = () => {
  void signIn()
}
 
export const signIn = cache(async () => {
  await fetch('http://localhost:1234/signIn', {method: 'POST',
});
  // const cookiesStore = cookies();
  // cookiesStore.set('name','윤창원');
  return true
})