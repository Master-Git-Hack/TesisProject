/** @format */
import { Routes as NavRoutes, Route, Navigate } from "react-router-dom";
import { auth } from "../api/auth";
import Auth from "../views/Auth";
import Nav from "../components/navigation/Nav";
const AnonimousNavigation = () => (
	<NavRoutes>
		<Route path="/Auth" element={<Auth />} />
		<Route path="*" element={<Navigate to="/Auth" />} />
	</NavRoutes>
);
const AuthNavigation = () => (
	<>
		<Nav />
		<NavRoutes>
			<Route path="/Home" element={<>Home</>} />
		</NavRoutes>
	</>
);
export default function Routes() {
	return auth ? <AuthNavigation /> : <AnonimousNavigation />;
}
