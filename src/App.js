import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { QueryClient, QueryClientProvider } from "react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="bg-[url('./assets/beethoven.webp')] bg-center bg-cover bg-no-repeat dark:bg-[url('./assets/mozart.jpg')] dark:bg-cover dark:bg-center dark:grayscale-[0.4]">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
