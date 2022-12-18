import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
