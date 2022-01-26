import { useState } from "react";
import AuthForm from "./pages/AuthForm";
import Header from "./pages/Header";

function App() {
  const [isAuthForm, setIsAuthForm] = useState(false);

  function openAuthForm() {
    setIsAuthForm(true);
  }
  function closeAuthForm() {
    setIsAuthForm(false);
  }

  return (
    <>
      {isAuthForm ? <AuthForm closeForm={closeAuthForm} /> : null}
      <Header openAuthForm={openAuthForm} />
    </>
  );
}

export default App;
