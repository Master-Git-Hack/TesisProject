/** @format */

import { Body, Header, Table } from "../table/Table";

export const Bluetooth = (props: { data: any; actions: any; type: string }) => (
	<Table>
		<Header>
			<tr>
				<th colSpan={3}>Dispositivos {props.type}</th>
			</tr>
			<tr>
				<th>Nombre</th>
				<th>Dirección</th>
				<th>Estado</th>
			</tr>
		</Header>
		<Body>
			{props.data.map((item: any, index: number) => (
				<tr key={`data for bluetooth ${props.type} ${index}`}>
					<td>{item.name}</td>
					<td>{item.address}</td>
					<td>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								value={item.status}
								onChange={(event) => props.actions(index, event.target.checked)}
							/>
							Incluir en {item.status ? "Blacklist" : "Whitelist"}
						</div>
					</td>
				</tr>
			))}
		</Body>
	</Table>
);
