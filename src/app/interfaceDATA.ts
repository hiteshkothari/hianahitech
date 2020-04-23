
export interface ITiming {
  timingStart: string;
  timingEnd: string;
  name: string;
  imageUrl: string;
}
export interface ITheme {
  themeUrl: string;
  name: string;
  imageUrl: string;
  pathUrl: string;
}
export interface ISelectedThemeAndTiming {
  cssFile: ITheme;
  timing: ITiming;
}

/**
 * Used for both the languages and Technology Stack
 */
export interface ITechStack {
  name: string;
  percentage: number;
}
// export interface Languages{


// }
