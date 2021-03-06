import * as dotenv from "dotenv";
import { resolve } from "path";

const envFound = dotenv.config({
	path: resolve(__dirname, "..", "..", ".env"),
});

if (!envFound) {
	throw new Error('[Server Error]: Environment File ".env" Not Found.');
}

export const nodePort = process.env.NODE_PORT || 8050;
export const mysqlHost = process.env.MYSQL_HOST || "localhost";
export const mysqlUser = process.env.MYSQL_USER || "root";
export const mysqlPass = process.env.MYSQL_PASS || "t2s";
export const mysqlDB = process.env.MYSQL_DB || "t2s";
export const ttsApiKey = process.env.TTS_API_KEY || "";
export const ttsUrl = process.env.TTS_URL;
