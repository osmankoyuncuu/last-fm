import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
const App = () => {
  return (
    <div className="bg-[url('./assets/beethoven.webp')] bg-center bg-cover bg-no-repeat dark:bg-[url('./assets/mozart.jpg')] dark:bg-cover">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
