import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiContextProvider } from "./context/ApiContext";
import { LoadingAnimation } from "./components/Loading";
import Home from "./pages/Home";
import "./App.css";
import "./styles/HomeStyles";

export const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <>
      <ApiContextProvider>
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Home />} />
              </>
            ) : (
              <>
                <Route path="/" element={<LoginPage />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </ApiContextProvider>
    </>
  );
};

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <LoadingAnimation />;
};
