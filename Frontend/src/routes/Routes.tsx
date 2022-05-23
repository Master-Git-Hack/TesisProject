/** @format */
import { Routes as NavRoutes, Route, Navigate } from "react-router-dom";
import { auth } from "../api/auth";
import Auth from "../views/Auth";
import Scan from "../views/Scan";
import { SignUp } from "../components/auth/signUp";
import Report from "../views/Report";
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
			<Route path="/Scan" element={<Scan />} />
			<Route path="/SignUp" element={<SignUp />} />
			<Route path="/Report" element={<Report />} />
			<Route path="*" element={<>Not Found</>} />
		</NavRoutes>
	</>
);
export default function Routes() {
	return auth ? <AuthNavigation /> : <AnonimousNavigation />;
}
