// export enum LEVELS {
//     '상', '중', '하'
// }
export enum LANGUAGE {
    html = 'html', 
    css = 'css', 
    javascript = 'javascript'
}
export enum TOOLS {
    typescript = 'typescript',
    scss = 'scss',
    svelte = 'svelte',
    vue = 'vue',
    react = 'react',
    aws = 'aws',
    jenkins = 'jenkins',
}
export enum LEVELS {
    최상='스스로 자신함',
    상='대규모 프로젝트를 유지할 수 있음',
    중='중소규모의 프로젝트를 구축 또는 유지하는데 퍼포먼스가 뛰어남',
    중하='노하우는 부족하나 개발하는데 문제 없음',
    하='공식 문서를 보며 개발하는 단계',
    못함='공부가 필요',
}
export const SCORES = [100,90,75,60,40,10];
export const REVERSESCORES = [...SCORES].reverse();
export function changeLevel(level: LEVELS, point: number) {
    if (point === 0) return level;
    const score = getLevelScore(level) + point;
    return getScoreLevel(score);
}
export function getScoreLevel(score: number) {
    const level = SCORES.findIndex(x => score >= x);
    switch(level) {
        case 0:
            return LEVELS.최상
        case 1:
            return LEVELS.상
        case 2:
            return LEVELS.중
        case 3:
            return LEVELS.중하
        case 4:
            return LEVELS.하
        case 5:
        default:
            return LEVELS.못함
    }
}
export function getLevelScore(level: LEVELS) {
    switch(level) {
        case LEVELS.최상:
            return SCORES[0]
        case LEVELS.상:
            return SCORES[1]
        case LEVELS.중:
            return SCORES[2]
        case LEVELS.중하:
            return SCORES[3]
        case LEVELS.하:
            return SCORES[4]
        case LEVELS.못함:
        default: 
            return SCORES[5]
    }
}
export type LanguageSkill = {
    [key in LANGUAGE]: LEVELS;
}
export type ToolSkill = {
    [key in TOOLS]: LEVELS;
}