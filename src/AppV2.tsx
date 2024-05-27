import "./index.css";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AppRouterProvider from "./providers/router/react-router.provider";
import routes from "./providers/router/routes";
import Navbar from "./components/Navbar/Navbar";
import ModalProvider from "./providers/modal/modal.provider";
import Modal from "./components/modalv2/Modal";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <AppRouterProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Navbar />
          <Modal />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={`${route.path}_${index}`}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </ModalProvider>
      </QueryClientProvider>
    </AppRouterProvider>
  );
};

export default App;
