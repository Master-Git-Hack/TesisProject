/** @format */

import { Body, Header, Table } from "../table/Table";
import { MinView } from "../minimizeView/minView";
export const Ports = (props: { data: any; id: number; name: string }) => (
	<MinView
		name={`Table of Ports for ${props.name}`}
		id={props.id}
		children={
			<Table key={`table of ports number ${props.id}`}>
				<Header>
					<tr>
						<th rowSpan={2}>Protocolo</th>
						<th rowSpan={2}>Puerto</th>
						<th rowSpan={2}>Estado</th>
						<th rowSpan={2}>Reason</th>
						<th rowSpan={2}>Reason TTL</th>
						<th colSpan={3}>Servicio</th>
					</tr>
					<tr>
						<th>Nombre</th>
						<th>Metodo</th>
						<th>Conf.</th>
					</tr>
				</Header>
				<Body>
					{props.data.map((item: any, index: number) => (
						<tr key={`row of protocols table ${index}`}>
							<td>{item.protocol}</td>
							<td>{item.portid}</td>
							<td>{item.state}</td>
							<td>{item.reason}</td>
							<td>{item.reason_ttl}</td>
							<td>{item.service?.name}</td>
							<td>{item.service?.method}</td>
							<td>{item.service?.conf}</td>
						</tr>
					))}
				</Body>
			</Table>
		}
	/>
);
