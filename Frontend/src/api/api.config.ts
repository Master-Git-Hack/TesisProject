/** @format */

import axios from "axios";
import * as qs from "qs";
import { PathLike } from "fs";
const baseURL = process.env.REACT_APP_API_URL;

/**
 * It creates an axios instance with the baseURL, timeout, headers, responseType, and paramsSerializer
 * @param {"blob" | "json"} responseType - "blob" | "json"
 * @param {string} [Authorization] - string - The token to work with the API Service.
 *
 */
export const request = (responseType: "blob" | "json") =>
	axios.create({
		baseURL,
		// withCredentials: true,
		timeout: 30000,
		headers: {
			Authorization: localStorage.getItem("Authorization") || "Basic",
			"Cache-Control": "no-cache, no-store, must-revalidate",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			Pragma: "no-cache",
			"Content-Type": "application/json",
			Accept: `application/${responseType}`,
		},
		responseType,
		paramsSerializer: (params: PathLike) =>
			qs.stringify(params, { indices: false, arrayFormat: "brackets" }),
	});
