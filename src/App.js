import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "../src/utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchLater from "./components/WatchLater";

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>

      },
      {
        path:"/watch",
        element:<WatchLater/>
        
      }
    ]
  }])
  return (
    <Provider store={Store}>
    <div className="">
        <Header/>
       
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
