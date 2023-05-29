import { Matthew } from "@/lib"
import { postStudy } from "@/lib/account/application/postStudy"
import { LANGUAGE, LEVELS } from "@/lib/skill/domain";

export default function Home() {
  const matthew = new Matthew()
  const usePostStudy = postStudy();
  usePostStudy(matthew, LANGUAGE.css, LEVELS.못함);
  console.log(matthew)
  return (
    <main>
      dawdjlkawjdlkawd
    </main>
  )
}
