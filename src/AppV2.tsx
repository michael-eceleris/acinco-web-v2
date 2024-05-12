import "./index.css";
import { Route, Routes } from "react-router-dom";
import AppRouterProvider from "./providers/router/react-router.provider";
import routes from "./providers/router/routes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <AppRouterProvider>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={`${route.path}_${index}`}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </AppRouterProvider>
  );
};

export default App;
