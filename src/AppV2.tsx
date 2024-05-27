import "./index.css";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AppRouterProvider from "./providers/router/react-router.provider";
import routes from "./providers/router/routes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <AppRouterProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </AppRouterProvider>
  );
};

export default App;
