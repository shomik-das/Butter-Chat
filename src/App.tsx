import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import SignupPage from "./pages/auth/signup-page"
import LoginPage from "./pages/auth/login-page"
import ResetPasswordPage from "./pages/auth/reset-password-page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

