import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MainLayout } from "../layouts/MainLayout";

const Home = () => {
  const { user } = useAuth0();

  return (
    <MainLayout>
      <img
        src={require("../assets/AcesportIcon.png")}
        style={{
          width: "200px",
          height: "200px",
        }}
        alt="Acesports Logo"
      />
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginTop: "32px",
          color: "#0062FF",
          textAlign: "center",
        }}
      >
        Acesports
      </h1>
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          marginTop: "8px",
          color: "#ffffff",
        }}
      >
        Acesports es una aplicación para la gestión de torneos de videojuegos.
      </p>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginTop: "24px",
          color: "#f6ddb3",
        }}
      >
        Bienvenido,{" "}
        {user ? (
          <span style={{ color: "#f3c884" }}>{user.name}</span>
        ) : (
          <span style={{ color: "#f3c884" }}>Loading...</span>
        )}
      </p>
      <button style={{ marginTop: "6px", color: "#ffffff" }}>
        ¿Quieres crear un torneo? Haz click{" "}
        <a
          href="/new-tournament"
          style={{
            textDecoration: "underline",
            color: "#635dff",
          }}
        >
          aquí
        </a>
      </button>
    </MainLayout>
  );
};

export default Home;
