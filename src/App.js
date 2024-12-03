import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "../src/utils/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="">
        <Header/>
       
        <Body/>
    </div>
    </Provider>
  );
}

export default App;
