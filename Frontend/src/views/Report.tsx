/** @format */

import { PDFViewer } from "../components/pdf/viewer/pdfViewer";
import { Body, Header, Table } from "../components/table/Table";

export default function Report() {
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
						<button className="btn btn-sm btn-outline-success">Generar Reporte</button>
					</td>
					<td className="text-center">
						<PDFViewer document={null} status={"loading"} />
					</td>
				</tr>
			</Body>
		</Table>
	);
}
