import { LANGUAGE, LEVELS, TOOLS } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postStudy() {
    return (account: ProgrammerTypes, skill: LANGUAGE | TOOLS, level: LEVELS) => {
        if (skill in LANGUAGE) {
            account.languageSkill[skill as LANGUAGE] = level
        } else if (
            skill in TOOLS
        ) {
            account.toolSkill[skill as TOOLS] = level
        }
        return account
    }
}