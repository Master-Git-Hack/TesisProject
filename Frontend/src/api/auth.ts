/** @format */

export const auth = localStorage.getItem("Authorization") || false;
export const logOut = () => localStorage.removeItem("Authorization");
