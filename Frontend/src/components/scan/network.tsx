/** @format */

import { Body, Header, Table } from "../table/Table";

export const Network = (props: { data: any; actions: any }) => (
	<Table>
		<Header>
			<tr>
				<th colSpan={3}>Dispositivos con Tarjeta de Red</th>
			</tr>
			<tr>
				<th rowSpan={2}>Address</th>
				<th colSpan={2}>Hostname</th>
				<th colSpan={3}>Mac Address</th>
				<th rowSpan={2}>OS</th>
				<th rowSpan={2}>Ports</th>
				<th colSpan={3}>Estatus</th>
				<th rowSpan={2}>Estado</th>
			</tr>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Addr</th>
				<th>Addr Type</th>
				<th>Vendor</th>
				<th>Reason</th>
				<th>Reason TTL</th>
				<th>State</th>
			</tr>
		</Header>
		<Body>
			{props.data.map((item: any, index: number) => (
				<tr key={`data for network ${index}`}>
					<td>{item.address}</td>
					<td>{item.hostname.name}</td>
					<td>{item.hostname.type}</td>
					<td>{item.macaddress.addr}</td>
					<td>{item.macaddress.addrtype}</td>
					<td>{item.macaddress.vendor}</td>
					<td>{item.osmatch}</td>
					<td>{item.ports}</td>
					<td>{item.state.reason}</td>
					<td>{item.state.reason_ttl}</td>
					<td>{item.state.reason_state}</td>
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
