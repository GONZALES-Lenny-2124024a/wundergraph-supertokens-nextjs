// Code generated by wunderctl. DO NOT EDIT.

import type function_UsersGet from "../../.wundergraph/operations/users/get";
import type function_UsersSubscribe from "../../.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";
import type { OperationErrors } from "./ts-operation-errors";
import type { GraphQLError } from "@wundergraph/sdk/client";

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export type UsersGetInput = ExtractInput<typeof function_UsersGet>;

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface UsersGetInputInternal {
	id: string;
}

export interface UsersSubscribeInputInternal {
	id: string;
}

export interface UsersUpdateInputInternal {
	id: string;
	name: string;
	bio: string;
}

export interface CountryResponse {
	data?: CountryResponseData;
	errors?: GraphQLError[];
}

export interface UsersGetResponse {
	data?: UsersGetResponseData;
	errors?: GraphQLError[];
}

export interface UsersSubscribeResponse {
	data?: UsersSubscribeResponseData;
	errors?: GraphQLError[];
}

export interface UsersUpdateResponse {
	data?: UsersUpdateResponseData;
	errors?: GraphQLError[];
}

export interface CountryResponseData {
	countries_country?: {
		code: string;
		name: string;
	};
}

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
