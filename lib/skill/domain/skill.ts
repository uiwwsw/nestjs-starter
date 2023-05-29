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
export type LanguageSkill = {
    [key in LANGUAGE]: LEVELS;
}
export type ToolSkill = {
    [key in TOOLS]: LEVELS;
}