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

export class DlpPolicyAnonymizer {
    'type'?: DlpPolicyAnonymizerTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DlpPolicyAnonymizerTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DlpPolicyAnonymizer.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DlpPolicyAnonymizerTypeEnum {
    Replace = 'replace'
}

