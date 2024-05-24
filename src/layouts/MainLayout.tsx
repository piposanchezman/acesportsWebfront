import React, { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import { MainWrapper } from "../styles/GlobalStyles";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <MainWrapper>{children}</MainWrapper>
      </main>
    </>
  );
};
