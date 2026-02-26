import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangePasswordPage from "./app/change-password/page";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold text-blue-600 p-8">Home Page</h1>
          }
        />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
