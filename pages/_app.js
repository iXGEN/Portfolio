import Header from "@/components/Header";
import { useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}
