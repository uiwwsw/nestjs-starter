import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/hooks'
import Draggable from 'react-draggable';
import { useRef } from 'react'

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const nodeRef = useRef(null);
  return (
    <>
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                grid={[25, 25]}
                scale={1}
                nodeRef={nodeRef}
                >
                <td ref={nodeRef}>
                  <div className="handle">Drag from here</div>
                  <div>This readme is really dragging on...</div>
                </td>
            </Draggable>
        </tr>
    </table>
    <style jsx>{`
          table td {
              border: 1px solid red;
          }
        `}</style>
    </>
  )
}



export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchPosts(10),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
