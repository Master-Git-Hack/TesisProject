/** @format */

interface Properties {
	status: string;
	message: string;
	data: any;
}
export const initialState: Properties = {
	status: "unset",
	message: "",
	data: null,
};
