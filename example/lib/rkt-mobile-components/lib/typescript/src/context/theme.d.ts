import React from "react";
interface IThemeProps {
    children: React.ReactNode;
    theme: any;
}
declare const ThemeContext: React.Context<{
    theme: string;
}>;
declare const RktThemeProvider: ({ children, theme }: IThemeProps) => React.JSX.Element;
export { ThemeContext, RktThemeProvider };
//# sourceMappingURL=theme.d.ts.map