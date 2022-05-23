/** @format */
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../api/auth";
import { getState, request } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
export const SignUp = () => {
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
					url: "auth/signup",
					responseType: "json",
					payload: {
						email,
						password,
					},
				}),
			);
		} else window.alert(`Debe llenar los campos correctamente para continuar`);
	};

	return auth ? (
		<div className="container container-fluid px-5 mx-auto">
			<div className="card px-5 mt-3">
				<form className="card-body px-5 text-center">
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
									type="text"
									className="form-control"
									placeholder="test"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="on"
									required
								/>
								<label>Nombre de usuario</label>
							</div>
						</div>
					</div>
					<div className="row mt-4 px-5">
						<div className="col">
							<div className="d-flex inline">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										value={"item.status"}
										onChange={(event) => 1}
									/>
								</div>
								<label>Rol de Administador</label>
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
								<label>Confirmar Password</label>
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
								Guardar Nuevo Usuario
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	) : (
		<Navigate to="/Auth" />
	);
};
