export type NavStatus = 'SPLASH' | 'APP';
export type LoadingStatus = 'LOADING' | 'LOADED';

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type FormatKeywordsValue<Keys, Multipliers> = {
  [Key in (keyof Keys) as `${Key}${Multipliers}`]: Keys[Key]
};

export type FormatMultipliers<T extends (string | number | boolean | bigint)[]> = 
  T extends [unknown, ...infer U] ? [Join<Split<`${T[0]}`, '.'>, '_'>, ...FormatMultipliers<U>] : T;
