import { getUser } from "@/utils/getUser";

export default async function Home() {
  // console.log('12312312');
  const t = await getUser();
  return (
    <main>
      {t?.data?.name}
    </main>
  )
}
