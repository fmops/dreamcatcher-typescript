/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ListModelsResponseDataInner {
    'created'?: number;
    'id'?: string;
    'object'?: string;
    'ownedBy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownedBy",
            "baseName": "owned_by",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListModelsResponseDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}

