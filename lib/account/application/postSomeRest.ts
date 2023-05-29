import { changeLevel, getLevelScore, LANGUAGE, LEVELS, TOOLS } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postSomeRest() {
    const pointLevel = getLevelScore(LEVELS.중)
    return (account: ProgrammerTypes, moneyForDay: number, duration: number) => {
        account.money = (account.money ?? 0) - (moneyForDay * duration);
        if (duration > 30) {
            Object.entries({...account.toolSkill,...account.languageSkill}).map(([key,value]) => {
                const score = getLevelScore(value)
                if (score <= pointLevel) {
                    if (key in TOOLS) {
                        const level = account.toolSkill[key as TOOLS]
                        account.toolSkill[key as TOOLS] = changeLevel(level, score - Math.floor(duration / 20))
                    } else {
                        const level = account.languageSkill[key as LANGUAGE]
                        account.languageSkill[key as LANGUAGE] = changeLevel(level, score - Math.floor(duration / 30))
                    }
                }
            })
        }
        return account
    }
}