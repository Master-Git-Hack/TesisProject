/** @format */

const className =
	"align-self-middle align-middle justify-content-center justify-content-sm-center text-center";

export const Table = (props: { children: any; style?: string }) => (
	<table
		className={`table table-sm table-responsive table-responsive-sm table-striped table-bordered table-hover align-self-middle align-middle justify-content-center justify-content-sm-center text-center ${props.style}`}
	>
		{props.children}
	</table>
);
export const Header = (props: { children: any; style?: string }) => (
	<thead className={`table-light ${className} ${props.style}`}>{props.children}</thead>
);

export const Body = (props: { children: any; style?: string }) => (
	<tbody className={`${className} ${props.style}`}>{props.children}</tbody>
);
export const SingleColumnInARow = (props: { colSpan: number; children: any }) => (
	<tr>
		<td colSpan={props.colSpan}>{props.children}</td>
	</tr>
);
export const Footer = (props: { children: any; style?: string }) => (
	<tfoot className={`${className} ${props.style}`}>{props.children}</tfoot>
);
