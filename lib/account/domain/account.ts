export enum SEXTYPES {
    남,여
}
export interface AccountTypes {
    name: string;
    born?: number;
    sex?: SEXTYPES;
    handsome?: number;
    hairy?: number;
    money?: number;
};
// class DDD implements AccountTypes {
//     name = '매튜';
//     born = 1987;
//     sex = SEXTYPES['남'];
// }
// console.log(DDD)