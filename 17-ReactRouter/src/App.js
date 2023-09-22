import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Product";
function App() {
  //---- new way -----

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/product", element: <Product /> },
  ]);

  //---- old way ------

  // const routeDefinition = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/product" element={<Product />}></Route>
  //   </Route>
  // );

  // const router = createBrowserRouter(routeDefinition);

  return (
    <>
      <p>La La Land</p>
      <a href="/product"> Product page </a>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
