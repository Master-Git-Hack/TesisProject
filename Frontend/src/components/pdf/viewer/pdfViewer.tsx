/** @format */

import { Spinner } from "../../spinner/spinner";

export const PDFViewer = (props: { document: any; status: string }) => (
	<div className="embed-responsive">
		{props.status.includes("complete") || props.status.includes("working") ? (
			<iframe
				title="PDF Viewer"
				className="embed-responsive-item"
				data-type="application/pdf"
				width="100%"
				height="630"
				src={props.status === "complete" ? props.document : null}
				allow="clipboard-write; encrypted-media;"
				allowFullScreen
			/>
		) : (
			<Spinner />
		)}
	</div>
);
