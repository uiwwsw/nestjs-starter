import { SKILL } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postStudy() {
    return (account: ProgrammerTypes, skill: SKILL, duraion: number) => {
        account.skill[skill] += duraion
        return account
    }
}