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

import { DlpPolicyAnonymizer } from '../models/DlpPolicyAnonymizer';
import { HttpFile } from '../http/http';

export class DlpPolicy {
    'active'?: boolean;
    'anonymizer'?: DlpPolicyAnonymizer;
    'entities'?: Array<DlpPolicyEntitiesEnum>;
    'name'?: string;
    'response'?: DlpPolicyResponseEnum;
    'scoreThreshold'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "anonymizer",
            "baseName": "anonymizer",
            "type": "DlpPolicyAnonymizer",
            "format": ""
        },
        {
            "name": "entities",
            "baseName": "entities",
            "type": "Array<DlpPolicyEntitiesEnum>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "DlpPolicyResponseEnum",
            "format": ""
        },
        {
            "name": "scoreThreshold",
            "baseName": "score_threshold",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DlpPolicy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DlpPolicyEntitiesEnum {
    MedicalLicense = 'MEDICAL_LICENSE',
    CreditCard = 'CREDIT_CARD',
    UsPassport = 'US_PASSPORT',
    Person = 'PERSON',
    Url = 'URL',
    DateTime = 'DATE_TIME',
    IbanCode = 'IBAN_CODE',
    Crypto = 'CRYPTO',
    UsBankNumber = 'US_BANK_NUMBER',
    PhoneNumber = 'PHONE_NUMBER',
    Location = 'LOCATION',
    UsDriverLicense = 'US_DRIVER_LICENSE',
    UsItin = 'US_ITIN',
    IpAddress = 'IP_ADDRESS',
    EmailAddress = 'EMAIL_ADDRESS',
    UsSsn = 'US_SSN',
    Nrp = 'NRP'
}
export enum DlpPolicyResponseEnum {
    Block = 'block',
    Alert = 'alert',
    Anonymize = 'anonymize'
}

