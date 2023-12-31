// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import type { JSONSchema7 } from "json-schema";

// @ts-ignore: module unavailable
declare module "json-schema" {
	export interface JSONSchema7 {
		"x-graphql-enum-name"?: string;
	}
}

export interface Queries {
	Country: {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
	"users/get": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export interface Mutations {
	"users/update": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export interface Subscriptions {
	"users/subscribe": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export type Schema = Queries & Mutations & Subscriptions;

const jsonSchema: Schema = {
	Country: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						countries_country: {
							type: "object",
							properties: { code: { type: "string" }, name: { type: "string" } },
							additionalProperties: false,
							required: ["code", "name"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
		operationType: "QUERY",
		description: "",
	},
	"users/get": {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: {
				id: { type: "string" },
				name: { type: "string", default: "Jens" },
				bio: { type: "string", default: "Founder of WunderGraph" },
			},
			required: ["bio", "id", "name"],
		},
		operationType: "QUERY",
		description: "generated/bundle/operations/users/get",
	},
	"users/update": {
		input: {
			type: "object",
			properties: { id: { type: "string" }, name: { type: "string" }, bio: { type: "string" } },
			required: ["id", "name", "bio"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: { id: { type: "string" }, name: { type: "string" }, bio: { type: "string" } },
		},
		operationType: "MUTATION",
		description: "generated/bundle/operations/users/update",
	},
	"users/subscribe": {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: {
				id: { type: "string" },
				name: { type: "string", default: "Jens" },
				bio: { type: "string", default: "Founder of WunderGraph" },
				time: { type: "string" },
			},
			required: ["bio", "id", "name", "time"],
		},
		operationType: "SUBSCRIPTION",
		description: "generated/bundle/operations/users/subscribe",
	},
};

export type QueryNames = "Country" | "users/get";

export type MutationNames = "users/update";

export type SubscriptionNames = "users/subscribe";

export default jsonSchema;
