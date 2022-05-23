/** @format */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { getState, signOut, setPublic, request } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
export default function Nav() {
	const { name, isAdmin, publicId } = useAppSelector(getState);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setPublic());
	}, []);
	useEffect(() => {
		if (publicId.trim() !== "") {
			dispatch(
				request.get({
					url: `user/${publicId}`,
				}),
			);
		}
	}, [publicId]);
	const logout = () => {
		dispatch(
			request.post({
				url: "auth/signout",
				responseType: "json",
				payload: {},
			}),
		);
		dispatch(signOut());
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<div className="container-fluid">
				<Link to="/Home" className="navbar-brand">
					<img
						src={logo}
						alt="SPP"
						width="40"
						height="50"
						className="d-inline-block align-text-middle"
					/>{" "}
					Tesis
				</Link>

				<div className="collapse navbar-collapse">
					<div className="navbar-nav me-auto">
						<Link to="/Report" className="nav-link">
							Reportes
						</Link>
						{!isAdmin ? (
							<>
								<Link to="/SignUp" className="nav-link">
									Gestionar Acceso
								</Link>
								<Link to="/Scan" className="nav-link">
									Escanear
								</Link>
							</>
						) : null}
					</div>
					<div className="navbar-nav">
						<span className="nav-link disabled">{name}</span>
						<a className="nav-link text-danger" onClick={logout} href="/Auth">
							logout
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
