/** @format */

import { Body, Header, Table } from "../table/Table";
import { Ports } from "./ports";
import { OS } from "./os";
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
				<th rowSpan={2}>Fecha y Hora</th>
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
					<td className="text-wrap">{item.address}</td>
					<td className="text-wrap">
						{item.hostname.length > 0 ? item.hostname[0].name : null}
					</td>
					<td className="text-wrap">
						{item.hostname.length > 0 ? item.hostname[0].type : null}
					</td>
					<td className="text-wrap">{null}</td>
					<td className="text-wrap">{item.macaddress?.addrtype || null}</td>
					<td className="text-wrap">{item.macaddress?.vendor || null}</td>
					<td className="text-wrap">
						<OS data={item.osmatch} id={index} name={item.address} />
					</td>
					<td>
						{
							item.ports.length > 0 ? (
								<Ports data={item.ports} id={index} name={item.address} />
							) : null /*item.ports || null*/
						}
					</td>
					<td className="text-wrap">{item.state?.reason || null}</td>
					<td className="text-wrap">{item.state?.reason_ttl || null}</td>
					<td className="text-wrap">{item.state?.reason_state || null}</td>
					<td className="text-wrap">{item.date}</td>
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
