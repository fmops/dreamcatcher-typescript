// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DlpZsnerPolicy } from '../models/DlpZsnerPolicy';
import { DlpZsnerPolicyParams } from '../models/DlpZsnerPolicyParams';
import { DreamcatcherWebPresidioPolicyControllerScan200Response } from '../models/DreamcatcherWebPresidioPolicyControllerScan200Response';
import { DreamcatcherWebPresidioPolicyControllerScanRequest } from '../models/DreamcatcherWebPresidioPolicyControllerScanRequest';

/**
 * no description
 */
export class DlpZsnerPoliciesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerCreate(endpointName: string, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerCreate", "endpointName");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dlpZsnerPolicyParams, "DlpZsnerPolicyParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerDelete", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerDelete", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerScan", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerScan", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}/scan'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dreamcatcherWebPresidioPolicyControllerScanRequest, "DreamcatcherWebPresidioPolicyControllerScanRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerShow", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerShow", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerUpdate(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerUpdate", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerUpdate", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dlpZsnerPolicyParams, "DlpZsnerPolicyParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public async dreamcatcherWebZeroShotNERPolicyControllerUpdate2(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerUpdate2", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpZsnerPoliciesApi", "dreamcatcherWebZeroShotNERPolicyControllerUpdate2", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}'
            .replace('{' + 'endpoint_name' + '}', encodeURIComponent(String(endpointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dlpZsnerPolicyParams, "DlpZsnerPolicyParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DlpZsnerPoliciesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpZsnerPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerScan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DreamcatcherWebPresidioPolicyControllerScan200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DreamcatcherWebPresidioPolicyControllerScan200Response", ""
            ) as DreamcatcherWebPresidioPolicyControllerScan200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DreamcatcherWebPresidioPolicyControllerScan200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DreamcatcherWebPresidioPolicyControllerScan200Response", ""
            ) as DreamcatcherWebPresidioPolicyControllerScan200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerShow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpZsnerPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpZsnerPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebZeroShotNERPolicyControllerUpdate2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpZsnerPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpZsnerPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpZsnerPolicy", ""
            ) as DlpZsnerPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
