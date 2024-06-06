import React from "react";
interface IPerson {
    token: string;
    name: string;
}
interface IAuthContextType {
    person: IPerson | null;
    updatePerson: (value: IPerson) => void;
}
interface IAuthProps {
    children: React.ReactNode;
}
declare const AuthContext: React.Context<IAuthContextType | null>;
declare const AuthProvider: ({ children }: IAuthProps) => React.JSX.Element;
export { AuthContext, AuthProvider };
//# sourceMappingURL=auth.d.ts.map