import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          >
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <LoginPage
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
            <Route
              path="registration"
              element={
                <RegistrationPage
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
