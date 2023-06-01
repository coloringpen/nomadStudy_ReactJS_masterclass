import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ComponentError from "./screens/ComponentError";
import User from "./screens/users/User";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,

				errorElement: <ComponentError />,
			},
			{ path: "/about", element: <About /> },
			{ path: "users/:userId", element: <User /> },
		],
		errorElement: <NotFound />,
	},
]);
