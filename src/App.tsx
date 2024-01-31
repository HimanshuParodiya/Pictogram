import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInForm from "./__auth/forms/SignInForm";
import SignUpForm from "./__auth/forms/SignUpForm";
import AuthLayout from "./__auth/AuthLayout";
import RootLayout from "./__root/RootLayout";
import { Home } from "./__root/pages";

function App() {
  return (
    <div className="flex h-full">
      <Routes>
        <Route element={<AuthLayout />}>
          {/* Public Routes -> without sign in  */}
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          {/* Private Routes -> with sign in  */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
