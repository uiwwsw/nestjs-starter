import { LEVELS, Skill, getScoreLevel } from "@/lib/skill/domain";
import { AccountTypes, SEXTYPES } from "./account";
export interface ProgrammerTypes extends AccountTypes {
    // languageSkill: LanguageSkill;
    // toolSkill: ToolSkill;
    skill: Skill
}

export class Matthew implements ProgrammerTypes {
    name = '윤창원';
    born = 1987;
    sex = SEXTYPES.남;
    hairy = 1;
    handsome = 1;
    money = 100;
    skill = {
        html: 98,
        css: 99,
        javascript: 95 ,
        typescript: 90,
        scss: 99,
        svelte: 80,
        vue: 80,
        react: 70,
        aws: 60,
        jenkins: 50,
    }
    get skillDescription() {
        return Object.entries(this.skill).reduce((a,[key,val]) => ({...a, [key]: getScoreLevel(val)}), {})
    }
}