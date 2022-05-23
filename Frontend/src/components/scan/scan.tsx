/** @format */

import { getState } from "../../features/scan/scanSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { MinView } from "../minimizeView/minView";
import { Body, Footer, Header, Table } from "../table/Table";
import { Bluetooth } from "./bt";
import { Network } from "./network";

export const Scan = () => {
	const { bt, ble, network } = useAppSelector(getState);
	const dispatch = useAppDispatch();
	return (
		<Table>
			<Header>
				<tr>
					<th></th>
					<th className="text-end">
						<button className="btn btn-sm btn-outline-primary">Escanear</button>
					</th>
				</tr>
			</Header>
			<Body>
				<tr>
					<td colSpan={2}>
						<MinView
							name="Bluetooth Low Energy"
							id={0}
							child={
								<Bluetooth
									data={ble}
									actions={() => {}}
									type="Bluetooth Low Energy"
								/>
							}
						/>
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<MinView
							name="Bluetooth"
							id={0}
							child={<Bluetooth data={bt} actions={() => {}} type="Bluetooth" />}
						/>
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<MinView
							name="Dispositivos con Tarjeta de Red"
							id={0}
							child={<Network data={network} actions={() => {}} />}
						/>
					</td>
				</tr>
			</Body>
			<Footer>
				<tr>
					<td colSpan={2} className="text-end">
						<button className="btn btn-sm btn-success"> Guardar Cambios</button>
					</td>
				</tr>
			</Footer>
		</Table>
	);
};
