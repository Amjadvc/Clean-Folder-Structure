import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChangePasswordPage from './app/change-password/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="p-8 text-3xl font-bold text-blue-600">Home Page</h1>}
        />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
