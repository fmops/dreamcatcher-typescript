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
import { ObservableDlpPoliciesApi } from './ObservableAPI';

import { DlpPoliciesApiRequestFactory, DlpPoliciesApiResponseProcessor} from "../apis/DlpPoliciesApi";
export class PromiseDlpPoliciesApi {
    private api: ObservableDlpPoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DlpPoliciesApiRequestFactory,
        responseProcessor?: DlpPoliciesApiResponseProcessor
    ) {
        this.api = new ObservableDlpPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a DLP policy
     * @param endpointName Endpoint name
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(endpointName: string, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(endpointName, dlpPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Create a DLP policy
     * @param endpointName Endpoint name
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerCreate(endpointName: string, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<DlpPolicy> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerCreate(endpointName, dlpPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Delete a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Delete a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Promise<void> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerDelete(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Scan content with a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);
        return result.toPromise();
    }

    /**
     * Scan content with a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebPresidioPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerScan(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Get a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Promise<DlpPolicy> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerShow(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(endpointName, id, dlpPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<DlpPolicy> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerUpdate(endpointName, id, dlpPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpPolicy>> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(endpointName, id, dlpPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Promise<DlpPolicy> {
        const result = this.api.dreamcatcherWebPresidioPolicyControllerUpdate2(endpointName, id, dlpPolicyParams, _options);
        return result.toPromise();
    }


}



import { ObservableDlpZsnerPoliciesApi } from './ObservableAPI';

import { DlpZsnerPoliciesApiRequestFactory, DlpZsnerPoliciesApiResponseProcessor} from "../apis/DlpZsnerPoliciesApi";
export class PromiseDlpZsnerPoliciesApi {
    private api: ObservableDlpZsnerPoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DlpZsnerPoliciesApiRequestFactory,
        responseProcessor?: DlpZsnerPoliciesApiResponseProcessor
    ) {
        this.api = new ObservableDlpZsnerPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(endpointName: string, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(endpointName, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Create a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreate(endpointName: string, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<DlpZsnerPolicy> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerCreate(endpointName, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Delete a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Delete a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Promise<void> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerDelete(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);
        return result.toPromise();
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Promise<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerScan(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Get a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Promise<DlpZsnerPolicy> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerShow(endpointName, id, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(endpointName, id, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<DlpZsnerPolicy> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate(endpointName, id, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<HttpInfo<DlpZsnerPolicy>> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(endpointName, id, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Promise<DlpZsnerPolicy> {
        const result = this.api.dreamcatcherWebZeroShotNERPolicyControllerUpdate2(endpointName, id, dlpZsnerPolicyParams, _options);
        return result.toPromise();
    }


}



import { ObservableEndpointsApi } from './ObservableAPI';

import { EndpointsApiRequestFactory, EndpointsApiResponseProcessor} from "../apis/EndpointsApi";
export class PromiseEndpointsApi {
    private api: ObservableEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EndpointsApiRequestFactory,
        responseProcessor?: EndpointsApiResponseProcessor
    ) {
        this.api = new ObservableEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List endpoints
     */
    public dreamcatcherWebEndpointControllerIndexWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ListEndpointResponseInner>>> {
        const result = this.api.dreamcatcherWebEndpointControllerIndexWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List endpoints
     */
    public dreamcatcherWebEndpointControllerIndex(_options?: Configuration): Promise<Array<ListEndpointResponseInner>> {
        const result = this.api.dreamcatcherWebEndpointControllerIndex(_options);
        return result.toPromise();
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(endpointName: string, _options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions(endpointName: string, _options?: Configuration): Promise<Chat completion response> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(endpointName: string, _options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2(endpointName: string, _options?: Configuration): Promise<Chat completion response> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeChatCompletions2(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Invoke a completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(endpointName: string, _options?: Configuration): Promise<HttpInfo<Completion response>> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Invoke a completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeCompletions(endpointName: string, _options?: Configuration): Promise<Completion response> {
        const result = this.api.dreamcatcherWebEndpointControllerInvokeCompletions(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerModelsWithHttpInfo(endpointName: string, _options?: Configuration): Promise<HttpInfo<ListModelsResponse>> {
        const result = this.api.dreamcatcherWebEndpointControllerModelsWithHttpInfo(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerModels(endpointName: string, _options?: Configuration): Promise<ListModelsResponse> {
        const result = this.api.dreamcatcherWebEndpointControllerModels(endpointName, _options);
        return result.toPromise();
    }

    /**
     * Get an endpoint
     * @param id Endpoint name
     */
    public dreamcatcherWebEndpointControllerShowWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ShowEndpointResponse>> {
        const result = this.api.dreamcatcherWebEndpointControllerShowWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get an endpoint
     * @param id Endpoint name
     */
    public dreamcatcherWebEndpointControllerShow(id: string, _options?: Configuration): Promise<ShowEndpointResponse> {
        const result = this.api.dreamcatcherWebEndpointControllerShow(id, _options);
        return result.toPromise();
    }


}



import { ObservableStubOpenaiApi } from './ObservableAPI';

import { StubOpenaiApiRequestFactory, StubOpenaiApiResponseProcessor} from "../apis/StubOpenaiApi";
export class PromiseStubOpenaiApi {
    private api: ObservableStubOpenaiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StubOpenaiApiRequestFactory,
        responseProcessor?: StubOpenaiApiResponseProcessor
    ) {
        this.api = new ObservableStubOpenaiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Chat completion
     * @param createChatCompletion Chat completion params
     */
    public stubidityOpenAIChatCompletionCallWithHttpInfo(createChatCompletion?: Create chat completion, _options?: Configuration): Promise<HttpInfo<Chat completion response>> {
        const result = this.api.stubidityOpenAIChatCompletionCallWithHttpInfo(createChatCompletion, _options);
        return result.toPromise();
    }

    /**
     * Chat completion
     * @param createChatCompletion Chat completion params
     */
    public stubidityOpenAIChatCompletionCall(createChatCompletion?: Create chat completion, _options?: Configuration): Promise<Chat completion response> {
        const result = this.api.stubidityOpenAIChatCompletionCall(createChatCompletion, _options);
        return result.toPromise();
    }

    /**
     * Completion
     * @param completion Completion params
     */
    public stubidityOpenAICompletionCallWithHttpInfo(completion?: Completion, _options?: Configuration): Promise<HttpInfo<Completion response>> {
        const result = this.api.stubidityOpenAICompletionCallWithHttpInfo(completion, _options);
        return result.toPromise();
    }

    /**
     * Completion
     * @param completion Completion params
     */
    public stubidityOpenAICompletionCall(completion?: Completion, _options?: Configuration): Promise<Completion response> {
        const result = this.api.stubidityOpenAICompletionCall(completion, _options);
        return result.toPromise();
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCallWithHttpInfo(embedding?: Embedding , _options?: Configuration): Promise<HttpInfo<Array<EmbeddingResponseInner>>> {
        const result = this.api.stubidityOpenAIEmbeddingCallWithHttpInfo(embedding, _options);
        return result.toPromise();
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall(embedding?: Embedding , _options?: Configuration): Promise<Array<EmbeddingResponseInner>> {
        const result = this.api.stubidityOpenAIEmbeddingCall(embedding, _options);
        return result.toPromise();
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall2WithHttpInfo(embedding?: Embedding , _options?: Configuration): Promise<HttpInfo<Array<EmbeddingResponseInner>>> {
        const result = this.api.stubidityOpenAIEmbeddingCall2WithHttpInfo(embedding, _options);
        return result.toPromise();
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall2(embedding?: Embedding , _options?: Configuration): Promise<Array<EmbeddingResponseInner>> {
        const result = this.api.stubidityOpenAIEmbeddingCall2(embedding, _options);
        return result.toPromise();
    }


}



