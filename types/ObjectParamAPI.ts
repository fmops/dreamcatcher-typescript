import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Chat completion message } from '../models/Chat completion message';
import { Chat completion response } from '../models/Chat completion response';
import { ChatCompletionResponseChoicesInner } from '../models/ChatCompletionResponseChoicesInner';
import { Completion } from '../models/Completion';
import { Completion response } from '../models/Completion response';
import { CompletionResponseChoicesInner } from '../models/CompletionResponseChoicesInner';
import { ContentModerationPolicy } from '../models/ContentModerationPolicy';
import { Create chat completion } from '../models/Create chat completion';
import { DlpPolicy } from '../models/DlpPolicy';
import { DlpPolicyAnonymizer } from '../models/DlpPolicyAnonymizer';
import { DlpPolicyParams } from '../models/DlpPolicyParams';
import { DlpZsnerPolicy } from '../models/DlpZsnerPolicy';
import { DlpZsnerPolicyEntitiesInner } from '../models/DlpZsnerPolicyEntitiesInner';
import { DlpZsnerPolicyParams } from '../models/DlpZsnerPolicyParams';
import { DreamcatcherWebPresidioPolicyControllerScan200Response } from '../models/DreamcatcherWebPresidioPolicyControllerScan200Response';
import { DreamcatcherWebPresidioPolicyControllerScanRequest } from '../models/DreamcatcherWebPresidioPolicyControllerScanRequest';
import { Embedding  } from '../models/Embedding ';
import { EmbeddingResponseInner } from '../models/EmbeddingResponseInner';
import { ListEndpointResponseInner } from '../models/ListEndpointResponseInner';
import { ListModelsResponse } from '../models/ListModelsResponse';
import { ListModelsResponseDataInner } from '../models/ListModelsResponseDataInner';
import { ShowEndpointResponse } from '../models/ShowEndpointResponse';

import { ObservableDlpPoliciesApi } from "./ObservableAPI";
import { DlpPoliciesApiRequestFactory, DlpPoliciesApiResponseProcessor} from "../apis/DlpPoliciesApi";

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerCreateRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerCreate
     */
    endpointName: string
    /**
     * DLP policy params
     * @type DlpPolicyParams
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerCreate
     */
    dlpPolicyParams?: DlpPolicyParams
}

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerDeleteRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerDelete
     */
    endpointName: string
    /**
     * DLP Policy ID
     * @type number
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerDelete
     */
    id: number
}

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerScanRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerScan
     */
    endpointName: string
    /**
     * DLP Policy ID
     * @type number
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerScan
     */
    id: number
    /**
     * Content to scan
     * @type DreamcatcherWebPresidioPolicyControllerScanRequest
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerScan
     */
    dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest
}

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerShowRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerShow
     */
    endpointName: string
    /**
     * DLP Policy ID
     * @type number
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerShow
     */
    id: number
}

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdateRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate
     */
    endpointName: string
    /**
     * DLP Policy ID
     * @type number
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate
     */
    id: number
    /**
     * DLP policy params
     * @type DlpPolicyParams
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate
     */
    dlpPolicyParams?: DlpPolicyParams
}

export interface DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdate2Request {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate2
     */
    endpointName: string
    /**
     * DLP Policy ID
     * @type number
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate2
     */
    id: number
    /**
     * DLP policy params
     * @type DlpPolicyParams
     * @memberof DlpPoliciesApidreamcatcherWebPresidioPolicyControllerUpdate2
     */
    dlpPolicyParams?: DlpPolicyParams
}

export class ObjectDlpPoliciesApi {
    private api: ObservableDlpPoliciesApi

    public constructor(configuration: Configuration, requestFactory?: DlpPoliciesApiRequestFactory, responseProcessor?: DlpPoliciesApiResponseProcessor) {
        this.api = new ObservableDlpPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerCreateRequest, options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(param.endpointName, param.dlpPolicyParams,  options).toPromise();
    }

    /**
     * Create a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerCreate(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerCreateRequest, options?: Configuration): Promise<DlpPolicy> {
        return this.api.dreamcatcherWebPresidioPolicyControllerCreate(param.endpointName, param.dlpPolicyParams,  options).toPromise();
    }

    /**
     * Delete a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Delete a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerDelete(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.dreamcatcherWebPresidioPolicyControllerDelete(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Scan content with a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerScanRequest, options?: Configuration): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(param.endpointName, param.id, param.dreamcatcherWebPresidioPolicyControllerScanRequest,  options).toPromise();
    }

    /**
     * Scan content with a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerScan(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerScanRequest, options?: Configuration): Promise<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        return this.api.dreamcatcherWebPresidioPolicyControllerScan(param.endpointName, param.id, param.dreamcatcherWebPresidioPolicyControllerScanRequest,  options).toPromise();
    }

    /**
     * Get a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerShowRequest, options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Get a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerShow(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerShowRequest, options?: Configuration): Promise<DlpPolicy> {
        return this.api.dreamcatcherWebPresidioPolicyControllerShow(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Update a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(param.endpointName, param.id, param.dlpPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdateRequest, options?: Configuration): Promise<DlpPolicy> {
        return this.api.dreamcatcherWebPresidioPolicyControllerUpdate(param.endpointName, param.id, param.dlpPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdate2Request, options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        return this.api.dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(param.endpointName, param.id, param.dlpPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP policy
     * @param param the request object
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2(param: DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdate2Request, options?: Configuration): Promise<DlpPolicy> {
        return this.api.dreamcatcherWebPresidioPolicyControllerUpdate2(param.endpointName, param.id, param.dlpPolicyParams,  options).toPromise();
    }

}

import { ObservableDlpZsnerPoliciesApi } from "./ObservableAPI";
import { DlpZsnerPoliciesApiRequestFactory, DlpZsnerPoliciesApiResponseProcessor} from "../apis/DlpZsnerPoliciesApi";

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerCreateRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerCreate
     */
    endpointName: string
    /**
     * DLP ZSNER policy params
     * @type DlpZsnerPolicyParams
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerCreate
     */
    dlpZsnerPolicyParams?: DlpZsnerPolicyParams
}

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerDeleteRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerDelete
     */
    endpointName: string
    /**
     * DLP ZSNER Policy ID
     * @type number
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerDelete
     */
    id: number
}

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerScanRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerScan
     */
    endpointName: string
    /**
     * DLP ZSNER Policy ID
     * @type number
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerScan
     */
    id: number
    /**
     * Content to scan
     * @type DreamcatcherWebPresidioPolicyControllerScanRequest
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerScan
     */
    dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest
}

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerShowRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerShow
     */
    endpointName: string
    /**
     * DLP ZSNER Policy ID
     * @type number
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerShow
     */
    id: number
}

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdateRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate
     */
    endpointName: string
    /**
     * DLP ZSNER Policy ID
     * @type number
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate
     */
    id: number
    /**
     * DLP ZSNER policy params
     * @type DlpZsnerPolicyParams
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate
     */
    dlpZsnerPolicyParams?: DlpZsnerPolicyParams
}

export interface DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdate2Request {
    /**
     * Endpoint name
     * @type string
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate2
     */
    endpointName: string
    /**
     * DLP ZSNER Policy ID
     * @type number
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate2
     */
    id: number
    /**
     * DLP ZSNER policy params
     * @type DlpZsnerPolicyParams
     * @memberof DlpZsnerPoliciesApidreamcatcherWebZeroShotNERPolicyControllerUpdate2
     */
    dlpZsnerPolicyParams?: DlpZsnerPolicyParams
}

export class ObjectDlpZsnerPoliciesApi {
    private api: ObservableDlpZsnerPoliciesApi

    public constructor(configuration: Configuration, requestFactory?: DlpZsnerPoliciesApiRequestFactory, responseProcessor?: DlpZsnerPoliciesApiResponseProcessor) {
        this.api = new ObservableDlpZsnerPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerCreateRequest, options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(param.endpointName, param.dlpZsnerPolicyParams,  options).toPromise();
    }

    /**
     * Create a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreate(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerCreateRequest, options?: Configuration): Promise<DlpZsnerPolicy> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerCreate(param.endpointName, param.dlpZsnerPolicyParams,  options).toPromise();
    }

    /**
     * Delete a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Delete a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDelete(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerDelete(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerScanRequest, options?: Configuration): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(param.endpointName, param.id, param.dreamcatcherWebPresidioPolicyControllerScanRequest,  options).toPromise();
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScan(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerScanRequest, options?: Configuration): Promise<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerScan(param.endpointName, param.id, param.dreamcatcherWebPresidioPolicyControllerScanRequest,  options).toPromise();
    }

    /**
     * Get a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerShowRequest, options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Get a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShow(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerShowRequest, options?: Configuration): Promise<DlpZsnerPolicy> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerShow(param.endpointName, param.id,  options).toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(param.endpointName, param.id, param.dlpZsnerPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdateRequest, options?: Configuration): Promise<DlpZsnerPolicy> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate(param.endpointName, param.id, param.dlpZsnerPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdate2Request, options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(param.endpointName, param.id, param.dlpZsnerPolicyParams,  options).toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param param the request object
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2(param: DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdate2Request, options?: Configuration): Promise<DlpZsnerPolicy> {
        return this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate2(param.endpointName, param.id, param.dlpZsnerPolicyParams,  options).toPromise();
    }

}

import { ObservableEndpointsApi } from "./ObservableAPI";
import { EndpointsApiRequestFactory, EndpointsApiResponseProcessor} from "../apis/EndpointsApi";

export interface EndpointsApiDreamcatcherWebEndpointControllerIndexRequest {
}

export interface EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletionsRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof EndpointsApidreamcatcherWebEndpointControllerInvokeChatCompletions
     */
    endpointName: string
}

export interface EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletions2Request {
    /**
     * Endpoint name
     * @type string
     * @memberof EndpointsApidreamcatcherWebEndpointControllerInvokeChatCompletions2
     */
    endpointName: string
}

export interface EndpointsApiDreamcatcherWebEndpointControllerInvokeCompletionsRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof EndpointsApidreamcatcherWebEndpointControllerInvokeCompletions
     */
    endpointName: string
}

export interface EndpointsApiDreamcatcherWebEndpointControllerModelsRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof EndpointsApidreamcatcherWebEndpointControllerModels
     */
    endpointName: string
}

export interface EndpointsApiDreamcatcherWebEndpointControllerShowRequest {
    /**
     * Endpoint name
     * @type string
     * @memberof EndpointsApidreamcatcherWebEndpointControllerShow
     */
    id: string
}

export class ObjectEndpointsApi {
    private api: ObservableEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: EndpointsApiRequestFactory, responseProcessor?: EndpointsApiResponseProcessor) {
        this.api = new ObservableEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List endpoints
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerIndexWithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerIndexRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ListEndpointResponseInner>>> {
        return this.api.dreamcatcherWebEndpointControllerIndexWithHttpInfo( options).toPromise();
    }

    /**
     * List endpoints
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerIndex(param: EndpointsApiDreamcatcherWebEndpointControllerIndexRequest = {}, options?: Configuration): Promise<Array<ListEndpointResponseInner>> {
        return this.api.dreamcatcherWebEndpointControllerIndex( options).toPromise();
    }

    /**
     * Invoke a chat completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletionsRequest, options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        return this.api.dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(param.endpointName,  options).toPromise();
    }

    /**
     * Invoke a chat completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletionsRequest, options?: Configuration): Promise<Chat completion response> {
        return this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions(param.endpointName,  options).toPromise();
    }

    /**
     * Invoke a chat completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletions2Request, options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        return this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(param.endpointName,  options).toPromise();
    }

    /**
     * Invoke a chat completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletions2Request, options?: Configuration): Promise<Chat completion response> {
        return this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions2(param.endpointName,  options).toPromise();
    }

    /**
     * Invoke a completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeCompletionsRequest, options?: Configuration): Promise<HttpInfo<Completion response>> {
        return this.api.dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(param.endpointName,  options).toPromise();
    }

    /**
     * Invoke a completion
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerInvokeCompletions(param: EndpointsApiDreamcatcherWebEndpointControllerInvokeCompletionsRequest, options?: Configuration): Promise<Completion response> {
        return this.api.dreamcatcherWebEndpointControllerInvokeCompletions(param.endpointName,  options).toPromise();
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerModelsWithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerModelsRequest, options?: Configuration): Promise<HttpInfo<ListModelsResponse>> {
        return this.api.dreamcatcherWebEndpointControllerModelsWithHttpInfo(param.endpointName,  options).toPromise();
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerModels(param: EndpointsApiDreamcatcherWebEndpointControllerModelsRequest, options?: Configuration): Promise<ListModelsResponse> {
        return this.api.dreamcatcherWebEndpointControllerModels(param.endpointName,  options).toPromise();
    }

    /**
     * Get an endpoint
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerShowWithHttpInfo(param: EndpointsApiDreamcatcherWebEndpointControllerShowRequest, options?: Configuration): Promise<HttpInfo<ShowEndpointResponse>> {
        return this.api.dreamcatcherWebEndpointControllerShowWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get an endpoint
     * @param param the request object
     */
    public dreamcatcherWebEndpointControllerShow(param: EndpointsApiDreamcatcherWebEndpointControllerShowRequest, options?: Configuration): Promise<ShowEndpointResponse> {
        return this.api.dreamcatcherWebEndpointControllerShow(param.id,  options).toPromise();
    }

}

import { ObservableStubOpenaiApi } from "./ObservableAPI";
import { StubOpenaiApiRequestFactory, StubOpenaiApiResponseProcessor} from "../apis/StubOpenaiApi";

export interface StubOpenaiApiStubidityOpenAIChatCompletionCallRequest {
    /**
     * Chat completion params
     * @type Create chat completion
     * @memberof StubOpenaiApistubidityOpenAIChatCompletionCall
     */
    createChatCompletion?: Create chat completion
}

export interface StubOpenaiApiStubidityOpenAICompletionCallRequest {
    /**
     * Completion params
     * @type Completion
     * @memberof StubOpenaiApistubidityOpenAICompletionCall
     */
    completion?: Completion
}

export interface StubOpenaiApiStubidityOpenAIEmbeddingCallRequest {
    /**
     * Embedding params
     * @type Embedding 
     * @memberof StubOpenaiApistubidityOpenAIEmbeddingCall
     */
    embedding?: Embedding 
}

export interface StubOpenaiApiStubidityOpenAIEmbeddingCall2Request {
    /**
     * Embedding params
     * @type Embedding 
     * @memberof StubOpenaiApistubidityOpenAIEmbeddingCall2
     */
    embedding?: Embedding 
}

export class ObjectStubOpenaiApi {
    private api: ObservableStubOpenaiApi

    public constructor(configuration: Configuration, requestFactory?: StubOpenaiApiRequestFactory, responseProcessor?: StubOpenaiApiResponseProcessor) {
        this.api = new ObservableStubOpenaiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Chat completion
     * @param param the request object
     */
    public stubidityOpenAIChatCompletionCallWithHttpInfo(param: StubOpenaiApiStubidityOpenAIChatCompletionCallRequest = {}, options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        return this.api.stubidityOpenAIChatCompletionCallWithHttpInfo(param.createChatCompletion,  options).toPromise();
    }

    /**
     * Chat completion
     * @param param the request object
     */
    public stubidityOpenAIChatCompletionCall(param: StubOpenaiApiStubidityOpenAIChatCompletionCallRequest = {}, options?: Configuration): Promise<Chat completion response> {
        return this.api.stubidityOpenAIChatCompletionCall(param.createChatCompletion,  options).toPromise();
    }

    /**
     * Completion
     * @param param the request object
     */
    public stubidityOpenAICompletionCallWithHttpInfo(param: StubOpenaiApiStubidityOpenAICompletionCallRequest = {}, options?: Configuration): Promise<HttpInfo<Completion response>> {
        return this.api.stubidityOpenAICompletionCallWithHttpInfo(param.completion,  options).toPromise();
    }

    /**
     * Completion
     * @param param the request object
     */
    public stubidityOpenAICompletionCall(param: StubOpenaiApiStubidityOpenAICompletionCallRequest = {}, options?: Configuration): Promise<Completion response> {
        return this.api.stubidityOpenAICompletionCall(param.completion,  options).toPromise();
    }

    /**
     * Embedding
     * @param param the request object
     */
    public stubidityOpenAIEmbeddingCallWithHttpInfo(param: StubOpenaiApiStubidityOpenAIEmbeddingCallRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EmbeddingResponseInner>>> {
        return this.api.stubidityOpenAIEmbeddingCallWithHttpInfo(param.embedding,  options).toPromise();
    }

    /**
     * Embedding
     * @param param the request object
     */
    public stubidityOpenAIEmbeddingCall(param: StubOpenaiApiStubidityOpenAIEmbeddingCallRequest = {}, options?: Configuration): Promise<Array<EmbeddingResponseInner>> {
        return this.api.stubidityOpenAIEmbeddingCall(param.embedding,  options).toPromise();
    }

    /**
     * Embedding
     * @param param the request object
     */
    public stubidityOpenAIEmbeddingCall2WithHttpInfo(param: StubOpenaiApiStubidityOpenAIEmbeddingCall2Request = {}, options?: Configuration): Promise<HttpInfo<Array<EmbeddingResponseInner>>> {
        return this.api.stubidityOpenAIEmbeddingCall2WithHttpInfo(param.embedding,  options).toPromise();
    }

    /**
     * Embedding
     * @param param the request object
     */
    public stubidityOpenAIEmbeddingCall2(param: StubOpenaiApiStubidityOpenAIEmbeddingCall2Request = {}, options?: Configuration): Promise<Array<EmbeddingResponseInner>> {
        return this.api.stubidityOpenAIEmbeddingCall2(param.embedding,  options).toPromise();
    }

}
