import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/user.context";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <UserProvider>
            <App />
          </UserProvider>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
