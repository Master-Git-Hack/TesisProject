/** @format */

import { useEffect } from "react";
import { PDFViewer } from "../components/pdf/viewer/pdfViewer";
import { Body, Header, Table } from "../components/table/Table";
import { getState, request } from "../features/report/reportSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export default function Report() {
	const dispatch = useAppDispatch();
	const { status, message, data } = useAppSelector(getState);
	const sendRequest = (event: any) => {
		dispatch(request.get({ url: "reports/report" }));
	};

	useEffect(() => {
		if (status.includes("failed")) {
			window.alert(message);
		}
	}, [status]);
	return (
		<Table>
			<Header>
				<tr>
					<th colSpan={2}>Reporte de Estado</th>
				</tr>
			</Header>
			<Body>
				<tr>
					<td className="text-center">
						<button className="btn btn-sm btn-outline-success" onClick={sendRequest}>
							Generar Reporte
						</button>
					</td>
					<td className="text-center">
						<PDFViewer document={data} status={status} />
					</td>
				</tr>
			</Body>
		</Table>
	);
}
