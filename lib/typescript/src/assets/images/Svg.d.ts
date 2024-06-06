/// <reference types="react" />
export type ImagesList = "hide-on" | "hide-off" | "logo";
interface ImagesProps {
    image: ImagesList;
    width?: number;
    height?: number;
    color?: string;
    style?: object;
}
declare const Svg: ({ image, width, height, color, style, }: ImagesProps) => JSX.Element;
export default Svg;
//# sourceMappingURL=Svg.d.ts.map