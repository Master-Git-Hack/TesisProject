/** @format */

import { Spinner } from "../../spinner/spinner";

export const PDFViewer = (props: { document: any; status: string }) => (
	<div className="embed-responsive">
		{props.status.includes("success") ? (
			<iframe
				title="PDF Viewer"
				className="embed-responsive-item"
				data-type="application/pdf"
				width="100%"
				height="1024px"
				src={props.status === "success" ? props.document : null}
				allow="clipboard-write; encrypted-media;"
				allowFullScreen
			/>
		) : (
			<Spinner />
		)}
	</div>
);
