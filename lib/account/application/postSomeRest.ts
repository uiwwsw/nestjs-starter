import { changeLevel, getLevelScore, LEVELS, SKILL } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postSomeRest() {
    const pointLevel = getLevelScore(LEVELS.중)
    return (account: ProgrammerTypes, moneyForDay: number, duration: number) => {
        account.money = (account.money ?? 0) - (moneyForDay * duration);
        if (duration > 30) {
            Object.entries(account.skill).forEach(([key,value]) => {
                const score = getLevelScore(value)
                if (score <= pointLevel) {
                    const skill = key as SKILL
                    const level = account.skill[skill]
                    account.skill[skill] = changeLevel(level, score - Math.floor(duration / 20))
                }
            })
        }
        return account
    }
}