import { LEVELS, SKILL, Skill } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postStudy() {
    return (account: ProgrammerTypes, skill: SKILL, level: LEVELS) => {
        account.skill[skill] = level
        return account
    }
}