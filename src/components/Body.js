import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp/signUp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
