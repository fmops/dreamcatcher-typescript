// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DlpPolicy } from '../models/DlpPolicy';
import { DlpPolicyParams } from '../models/DlpPolicyParams';
import { DreamcatcherWebPresidioPolicyControllerScan200Response } from '../models/DreamcatcherWebPresidioPolicyControllerScan200Response';
import { DreamcatcherWebPresidioPolicyControllerScanRequest } from '../models/DreamcatcherWebPresidioPolicyControllerScanRequest';

/**
 * no description
 */
export class DlpPoliciesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a DLP policy
     * @param endpointName Endpoint name
     * @param dlpPolicyParams DLP policy params
     */
    public async dreamcatcherWebPresidioPolicyControllerCreate(endpointName: string, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerCreate", "endpointName");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp'
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
            ObjectSerializer.serialize(dlpPolicyParams, "DlpPolicyParams", ""),
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
     * Delete a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public async dreamcatcherWebPresidioPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerDelete", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerDelete", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp/{id}'
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
     * Scan content with a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public async dreamcatcherWebPresidioPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerScan", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerScan", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp/{id}/scan'
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
     * Get a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public async dreamcatcherWebPresidioPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerShow", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerShow", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp/{id}'
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
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public async dreamcatcherWebPresidioPolicyControllerUpdate(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerUpdate", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerUpdate", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp/{id}'
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
            ObjectSerializer.serialize(dlpPolicyParams, "DlpPolicyParams", ""),
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
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public async dreamcatcherWebPresidioPolicyControllerUpdate2(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'endpointName' is not null or undefined
        if (endpointName === null || endpointName === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerUpdate2", "endpointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DlpPoliciesApi", "dreamcatcherWebPresidioPolicyControllerUpdate2", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/endpoints/{endpoint_name}/policies/dlp/{id}'
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
            ObjectSerializer.serialize(dlpPolicyParams, "DlpPolicyParams", ""),
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

export class DlpPoliciesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerScan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response >> {
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
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerShow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dreamcatcherWebPresidioPolicyControllerUpdate2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<DlpPolicy >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DlpPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DlpPolicy", ""
            ) as DlpPolicy;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
