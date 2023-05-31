import { changeLevel, getLevelScore, LEVELS, SKILL } from "@/lib/skill";
import { ProgrammerTypes } from "../domain";

export function postSomeRest() {
    const pointLevel = getLevelScore(LEVELS.중)
    return (account: ProgrammerTypes, moneyForDay: number, duration: number) => {
        account.money = (account.money ?? 0) - (moneyForDay * duration);
        if (duration > 30) {
            Object.entries(account.skill).forEach(([key,value]) => {
                if (value <= pointLevel) {
                    const skill = key as SKILL
                    account.skill[skill] -= Math.floor(duration / 20)
                }
            })
        }
        return account
    }
}