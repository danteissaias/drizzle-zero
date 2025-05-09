/* eslint-disable */
/* tslint:disable */
/* noinspection JSUnusedGlobalSymbols */
/* @ts-nocheck */
/*
 * ------------------------------------------------------------
 * ## This file was automatically generated by drizzle-zero  ##
 * ## Any changes you make to this file will be overwritten. ##
 * ##                                                        ##
 * ## Additionally, you should also exclude this file from   ##
 * ## your linter and/or formatter to prevent it from being  ##
 * ## checked or modified.                                   ##
 * ##                                                        ##
 * ## SOURCE: https://github.com/BriefHQ/drizzle-zero        ##
 * ------------------------------------------------------------
 */

export type Schema = { readonly tables: { user: { name: "user"; primaryKey: any; columns: { readonly createdAt: { type: "number"; customType: number; optional: true; }; readonly updatedAt: { type: "number"; customType: number; optional: true; }; readonly id: { optional: false; type: "string"; customType: string; }; readonly name: { optional: false; type: "string"; customType: string; }; readonly partner: { optional: false; type: "boolean"; customType: boolean; }; readonly email: { optional: false; type: "string"; customType: `${string}@${string}`; }; }; }; message: { name: "message"; primaryKey: any; columns: { readonly createdAt: { type: "number"; customType: number; optional: true; }; readonly updatedAt: { type: "number"; customType: number; optional: true; }; readonly id: { optional: false; type: "string"; customType: string; }; readonly senderId: { type: "string"; customType: string; optional: true; }; readonly mediumId: { type: "string"; customType: string; optional: true; }; readonly body: { optional: false; type: "string"; customType: string; }; readonly metadata: { optional: false; type: "json"; customType: { key: string; }; }; }; }; medium: { name: "medium"; primaryKey: any; columns: { readonly createdAt: { type: "number"; customType: number; optional: true; }; readonly updatedAt: { type: "number"; customType: number; optional: true; }; readonly id: { optional: false; type: "string"; customType: string; }; readonly name: { optional: false; type: "string"; customType: string; }; }; }; friendship: { name: "friendship"; primaryKey: any; columns: { readonly acceptingId: { optional: false; type: "string"; customType: string; }; readonly requestingId: { optional: false; type: "string"; customType: string; }; readonly accepted: { optional: false; type: "boolean"; customType: boolean; }; }; }; allTypes: { name: "allTypes"; primaryKey: any; columns: { readonly id: { optional: false; type: "string"; customType: string; }; readonly createdAt: { type: "number"; customType: number; optional: true; }; readonly updatedAt: { type: "number"; customType: number; optional: true; }; readonly smallintField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly integerField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly bigintField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly bigintNumberField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly smallSerialField: { type: "number"; customType: number; optional: true; serverName: string; }; readonly serialField: { type: "number"; customType: number; optional: true; serverName: string; }; readonly bigSerialField: { type: "number"; customType: number; optional: true; serverName: string; }; readonly numericField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly decimalField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly realField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly doublePrecisionField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly textField: { optional: false; type: "string"; customType: string; serverName: string; }; readonly charField: { optional: false; type: "string"; customType: string; serverName: string; }; readonly uuidField: { optional: false; type: "string"; customType: string; serverName: string; }; readonly varcharField: { optional: false; type: "string"; customType: string; serverName: string; }; readonly booleanField: { optional: false; type: "boolean"; customType: boolean; serverName: string; }; readonly timestampField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly timestampTzField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly timestampModeDate: { optional: false; type: "number"; customType: number; serverName: string; }; readonly timestampModeString: { optional: false; type: "number"; customType: number; serverName: string; }; readonly dateField: { optional: false; type: "number"; customType: number; serverName: string; }; readonly jsonField: { optional: false; type: "json"; customType: any; serverName: string; }; readonly jsonbField: { optional: false; type: "json"; customType: any; serverName: string; }; readonly typedJsonField: { optional: false; type: "json"; customType: { theme: string; fontSize: number; }; serverName: string; }; readonly statusField: { optional: false; type: "string"; customType: "active" | "inactive" | "pending"; serverName: string; }; readonly optionalSmallint: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalInteger: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalBigint: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalNumeric: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalReal: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalDoublePrecision: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalText: { type: "string"; customType: string; optional: true; serverName: string; }; readonly optionalBoolean: { type: "boolean"; customType: boolean; optional: true; serverName: string; }; readonly optionalTimestamp: { type: "number"; customType: number; optional: true; serverName: string; }; readonly optionalJson: { type: "json"; customType: any; optional: true; serverName: string; }; readonly optionalEnum: { type: "string"; customType: "active" | "inactive" | "pending"; optional: true; serverName: string; }; readonly optionalVarchar: { type: "string"; customType: string; optional: true; serverName: string; }; readonly optionalUuid: { type: "string"; customType: string; optional: true; serverName: string; }; }; }; }; readonly relationships: { user: { messages: [{ readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "senderId" | "mediumId" | "body" | "metadata")[]; readonly destSchema: "message"; readonly cardinality: "many"; }]; } & { readonly mediums: [{ readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "senderId" | "mediumId" | "body" | "metadata")[]; readonly destSchema: "message"; readonly cardinality: "many"; }, { readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "name")[]; readonly destSchema: "medium"; readonly cardinality: "many"; }]; readonly friends: [{ readonly sourceField: string[]; readonly destField: ("requestingId" | "acceptingId" | "accepted")[]; readonly destSchema: "friendship"; readonly cardinality: "many"; }, { readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "name" | "partner" | "email")[]; readonly destSchema: "user"; readonly cardinality: "many"; }]; }; message: { medium: [{ readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "name")[]; readonly destSchema: "medium"; readonly cardinality: "one"; }]; sender: [{ readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "name" | "partner" | "email")[]; readonly destSchema: "user"; readonly cardinality: "one"; }]; }; medium: { messages: [{ readonly sourceField: string[]; readonly destField: ("createdAt" | "updatedAt" | "id" | "senderId" | "mediumId" | "body" | "metadata")[]; readonly destSchema: "message"; readonly cardinality: "many"; }]; }; }; };

export const schema = {
  "tables": {
    "allTypes": {
      "name": "allTypes",
      "columns": {
        "createdAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "updatedAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "id": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "smallintField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "smallint"
        },
        "integerField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "integer"
        },
        "bigintField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "bigint"
        },
        "bigintNumberField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "bigint_number"
        },
        "smallSerialField": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "smallserial"
        },
        "serialField": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "serial"
        },
        "bigSerialField": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "bigserial"
        },
        "numericField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "numeric"
        },
        "decimalField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "decimal"
        },
        "realField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "real"
        },
        "doublePrecisionField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "double_precision"
        },
        "textField": {
          "type": "string",
          "optional": false,
          "customType": null as unknown,
          "serverName": "text"
        },
        "charField": {
          "type": "string",
          "optional": false,
          "customType": null as unknown,
          "serverName": "char"
        },
        "uuidField": {
          "type": "string",
          "optional": false,
          "customType": null as unknown,
          "serverName": "uuid"
        },
        "varcharField": {
          "type": "string",
          "optional": false,
          "customType": null as unknown,
          "serverName": "varchar"
        },
        "booleanField": {
          "type": "boolean",
          "optional": false,
          "customType": null as unknown,
          "serverName": "boolean"
        },
        "timestampField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "timestamp"
        },
        "timestampTzField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "timestamp_tz"
        },
        "timestampModeString": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "timestamp_mode_string"
        },
        "timestampModeDate": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "timestamp_mode_date"
        },
        "dateField": {
          "type": "number",
          "optional": false,
          "customType": null as unknown,
          "serverName": "date"
        },
        "jsonField": {
          "type": "json",
          "optional": false,
          "customType": null as unknown,
          "serverName": "json"
        },
        "jsonbField": {
          "type": "json",
          "optional": false,
          "customType": null as unknown,
          "serverName": "jsonb"
        },
        "typedJsonField": {
          "type": "json",
          "optional": false,
          "customType": null as unknown,
          "serverName": "typed_json"
        },
        "statusField": {
          "type": "string",
          "optional": false,
          "customType": null as unknown,
          "serverName": "status"
        },
        "optionalSmallint": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_smallint"
        },
        "optionalInteger": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_integer"
        },
        "optionalBigint": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_bigint"
        },
        "optionalNumeric": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_numeric"
        },
        "optionalReal": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_real"
        },
        "optionalDoublePrecision": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_double_precision"
        },
        "optionalText": {
          "type": "string",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_text"
        },
        "optionalBoolean": {
          "type": "boolean",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_boolean"
        },
        "optionalTimestamp": {
          "type": "number",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_timestamp"
        },
        "optionalJson": {
          "type": "json",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_json"
        },
        "optionalEnum": {
          "type": "string",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_enum"
        },
        "optionalVarchar": {
          "type": "string",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_varchar"
        },
        "optionalUuid": {
          "type": "string",
          "optional": true,
          "customType": null as unknown,
          "serverName": "optional_uuid"
        }
      },
      "primaryKey": [
        "id"
      ],
      "serverName": "all_types"
    },
    "friendship": {
      "name": "friendship",
      "columns": {
        "requestingId": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "acceptingId": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "accepted": {
          "type": "boolean",
          "optional": false,
          "customType": null as unknown
        }
      },
      "primaryKey": [
        "requestingId",
        "acceptingId"
      ]
    },
    "medium": {
      "name": "medium",
      "columns": {
        "createdAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "updatedAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "id": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "name": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        }
      },
      "primaryKey": [
        "id"
      ]
    },
    "message": {
      "name": "message",
      "columns": {
        "createdAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "updatedAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "id": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "senderId": {
          "type": "string",
          "optional": true,
          "customType": null as unknown
        },
        "mediumId": {
          "type": "string",
          "optional": true,
          "customType": null as unknown
        },
        "body": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "metadata": {
          "type": "json",
          "optional": false,
          "customType": null as unknown
        }
      },
      "primaryKey": [
        "id"
      ]
    },
    "user": {
      "name": "user",
      "columns": {
        "createdAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "updatedAt": {
          "type": "number",
          "optional": true,
          "customType": null as unknown
        },
        "id": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "name": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        },
        "partner": {
          "type": "boolean",
          "optional": false,
          "customType": null as unknown
        },
        "email": {
          "type": "string",
          "optional": false,
          "customType": null as unknown
        }
      },
      "primaryKey": [
        "id"
      ]
    }
  },
  "relationships": {
    "user": {
      "mediums": [
        {
          "sourceField": [
            "id"
          ],
          "destField": [
            "senderId"
          ],
          "destSchema": "message",
          "cardinality": "many"
        },
        {
          "sourceField": [
            "mediumId"
          ],
          "destField": [
            "id"
          ],
          "destSchema": "medium",
          "cardinality": "many"
        }
      ],
      "friends": [
        {
          "sourceField": [
            "id"
          ],
          "destField": [
            "requestingId"
          ],
          "destSchema": "friendship",
          "cardinality": "many"
        },
        {
          "sourceField": [
            "acceptingId"
          ],
          "destField": [
            "id"
          ],
          "destSchema": "user",
          "cardinality": "many"
        }
      ],
      "messages": [
        {
          "sourceField": [
            "id"
          ],
          "destField": [
            "senderId"
          ],
          "destSchema": "message",
          "cardinality": "many"
        }
      ]
    },
    "medium": {
      "messages": [
        {
          "sourceField": [
            "id"
          ],
          "destField": [
            "mediumId"
          ],
          "destSchema": "message",
          "cardinality": "many"
        }
      ]
    },
    "message": {
      "medium": [
        {
          "sourceField": [
            "mediumId"
          ],
          "destField": [
            "id"
          ],
          "destSchema": "medium",
          "cardinality": "one"
        }
      ],
      "sender": [
        {
          "sourceField": [
            "senderId"
          ],
          "destField": [
            "id"
          ],
          "destSchema": "user",
          "cardinality": "one"
        }
      ]
    }
  }
} as Schema;
