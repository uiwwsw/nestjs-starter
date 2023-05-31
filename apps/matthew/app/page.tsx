import { Matthew } from "@/lib"
import { postStudy } from "@/lib/account/application/postStudy"
import {  LEVELS, SKILL } from "@/lib/skill/domain";

export default function Home() {
  const matthew = new Matthew()
  const usePostStudy = postStudy();
  usePostStudy(matthew, SKILL.css, 5);
  console.log(matthew.skillDescription)
  return (
    <main>
      dawdjlkawjdlkawd
    </main>
  )
}
