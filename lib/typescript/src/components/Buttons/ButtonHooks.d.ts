import { type FontTypesList } from "../../types/style";
interface IButton {
    fontColor: (disabled: boolean, type: string, color?: string) => string;
    iconSize: (size: string) => number;
    fontSize: (size: string) => FontTypesList;
}
declare const useButton: () => IButton;
export default useButton;
//# sourceMappingURL=ButtonHooks.d.ts.map