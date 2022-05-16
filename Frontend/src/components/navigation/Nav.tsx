/** @format */
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { getState, signOut } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
export default function Nav() {
	const { name, isAdmin } = useAppSelector(getState);
	const dispatch = useAppDispatch();
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
						<Link to="/Cotizacion" className="nav-link">
							Cotización
						</Link>
						{isAdmin && (
							<>
								<Link to="/Cotizacion" className="nav-link">
									Cotización
								</Link>
							</>
						)}
					</div>
					<div className="navbar-nav">
						<span className="nav-link disabled">{name}</span>
						<a className="nav-link text-danger" onClick={() => {}} href="/Auth">
							Log Out
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
