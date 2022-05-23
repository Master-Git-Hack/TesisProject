/** @format */

import { Body, Header, Table } from "../table/Table";
import { MinView } from "../minimizeView/minView";
export const OS = (props: { data: any; id: number; name: string }) =>
	props.data.accuracy !== undefined ? (
		<MinView
			name={`Table of OS for ${props.name}`}
			id={props.id}
			children={
				<Table key={`table of OS ${props.id}`}>
					<Header>
						<tr>
							<th rowSpan={2}>Precisión</th>
							<th rowSpan={2}>CPE</th>
							<th rowSpan={2}>Linia</th>
							<th rowSpan={2}>Nombre</th>
							<th colSpan={5}>Clase</th>
						</tr>
						<tr>
							<th rowSpan={2}>Precisión</th>
							<th>Familia OS</th>
							<th>Gen. OS</th>
							<th>Tipo</th>
							<th>Vendor</th>
						</tr>
					</Header>
					<Body>
						<tr>
							<td>{props.data.accuracy}</td>
							<td>{props.data.cpe}</td>
							<td>{props.data.line}</td>
							<td>{props.data.name}</td>
							<td>{props.data.osclass.accuracy}</td>
							<td>{props.data.osclass.osfamily}</td>
							<td>{props.data.osclass.osgen}</td>
							<td>{props.data.osclass.type}</td>
							<td>{props.data.osclass.vendor}</td>
						</tr>
					</Body>
				</Table>
			}
		/>
	) : null;
