import React, { createContext, useState } from "react";

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

const AuthContext = createContext<IAuthContextType | null>(null);

const AuthProvider = ({ children }: IAuthProps) => {
  const [person, setPerson] = useState<IPerson | null>(null);

  const updatePerson = (value: IPerson) => {
    setPerson(value);
  };

  return (
    <AuthContext.Provider
      value={{
        person,
        updatePerson,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
