import { LEVELS, Skill } from "@/lib/skill/domain";
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
        html: LEVELS.최상,
        css: LEVELS.최상,
        javascript: LEVELS.상,
        typescript:LEVELS.상,
        scss:LEVELS.최상,
        svelte:LEVELS.상,
        vue:LEVELS.상,
        react:LEVELS.중,
        aws:LEVELS.하,
        jenkins:LEVELS.중하,
    }
}