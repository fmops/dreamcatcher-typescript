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

/**
* A request to embed with the model.
*/
export class Embedding  {
    'input': string;
    'model': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "input",
            "baseName": "input",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Embedding .attributeTypeMap;
    }

    public constructor() {
    }
}

