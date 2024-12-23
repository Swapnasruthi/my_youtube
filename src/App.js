import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "../src/utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchLater from "./components/WatchLater";
import ErrorBoundary from "./components/ErrorBoundary ";

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
        element: (
          <ErrorBoundary>
            <WatchLater />
          </ErrorBoundary>
        ),
        
      }
    ]
  }])
  return (
    <Provider store={Store}>
    <div className="">
        
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
