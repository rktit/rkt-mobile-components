/// <reference types="react" />
import { View } from "react-native";
declare const stylesInput: {
    grid: {
        paddingHorizontal: number;
        paddingVertical: number;
    };
    default: {
        flexDirection: "row";
        alignItems: "center";
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        backgroundColor: any;
        borderRadius: number;
        paddingHorizontal: number;
        paddingVertical: number;
        borderWidth: number;
        borderColor: any;
    };
    input: {
        width: "100%";
    };
    label: {
        marginBottom: number;
    };
    icon: {
        width: number;
        marginRight: number;
    };
    error: {
        borderWidth: number;
        borderColor: any;
        backgroundColor: any;
    };
    helperText: {
        paddingHorizontal: number;
        paddingVertical: number;
    };
};
interface InputProps {
    readonly actived: boolean;
    readonly error: boolean;
}
declare const InputStyle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react-native").ViewProps & import("react").RefAttributes<View>, InputProps>> & string & Omit<typeof View, keyof import("react").Component<any, {}, any>>;
export { stylesInput, InputStyle };
//# sourceMappingURL=inputStyle.d.ts.map