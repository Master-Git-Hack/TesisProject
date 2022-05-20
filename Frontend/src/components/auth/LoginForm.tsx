/** @format */
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../api/auth";
import { getState, request } from "../../features/auth/authSlice";
import logo from "../../assets/images/logo.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
export const LoginForm = () => {
	const { status, message } = useAppSelector(getState);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPwd, setShowPwd] = useState(false);
	const dispatch = useAppDispatch();
	const sendRequest = async (e: any) => {
		e.preventDefault();
		if (email !== "" && password !== "") {
			dispatch(
				request.post({
					url: "auth/signin",
					responseType: "json",
					payload: {
						email,
						password,
					},
				}),
			);
		} else window.alert(`Debe llenar los campos correctamente para continuar`);
	};
	useEffect(() => {
		if (status === "success") {
			window.location.href = "/Home";
		}
		if (status.includes("failed")) {
			window.alert(message);
		}
	}, [status]);
	return !auth ? (
		<div className="container container-fluid px-5 mx-auto">
			<div className="card px-5 mt-3">
				<form className="card-body px-5 text-center">
					<div className="row px-5">
						<div className="col-12">
							<img src={logo} alt="CIMAT" width={100} height={120} />
							<h3>Tesis</h3>
						</div>
					</div>
					<div className="row mt-4 px-5">
						<div className="col">
							<div className="form-floating">
								<input
									type="email"
									className="form-control"
									placeholder="test"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="on"
									required
								/>
								<label>Correo Electrónico</label>
							</div>
						</div>
					</div>
					<div className="row mt-4 px-5">
						<div className="col">
							<div className="form-floating">
								<input
									type={showPwd ? "text" : "password"}
									className="form-control"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<label>Password</label>
							</div>
						</div>
					</div>
					<div className="row px-5">
						<div className="col text-start">
							<button
								className="btn btn-sm btn-link text-secondary"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									setShowPwd(!showPwd);
								}}
							>
								{showPwd ? "Ocultar Contraseña" : "Mostrar Contraseña"}
							</button>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col text-end">
							<button
								className="btn btn-sm btn-outline-success"
								type="submit"
								onClick={(e) => sendRequest(e)}
							>
								Inciar Sesión
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	) : (
		<Navigate to="/Home" />
	);
};
