import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DlpPoliciesApiRequestFactory, DlpPoliciesApiResponseProcessor} from "../apis/DlpPoliciesApi";
export class ObservableDlpPoliciesApi {
    private requestFactory: DlpPoliciesApiRequestFactory;
    private responseProcessor: DlpPoliciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DlpPoliciesApiRequestFactory,
        responseProcessor?: DlpPoliciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DlpPoliciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DlpPoliciesApiResponseProcessor();
    }

    /**
     * Create a DLP policy
     * @param endpointName Endpoint name
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(endpointName: string, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerCreate(endpointName, dlpPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a DLP policy
     * @param endpointName Endpoint name
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerCreate(endpointName: string, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<DlpPolicy> {
        return this.dreamcatcherWebPresidioPolicyControllerCreateWithHttpInfo(endpointName, dlpPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpPolicy>) => apiResponse.data));
    }

    /**
     * Delete a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerDelete(endpointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Observable<void> {
        return this.dreamcatcherWebPresidioPolicyControllerDeleteWithHttpInfo(endpointName, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Scan content with a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Observable<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerScan(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scan content with a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebPresidioPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Observable<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        return this.dreamcatcherWebPresidioPolicyControllerScanWithHttpInfo(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options).pipe(map((apiResponse: HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>) => apiResponse.data));
    }

    /**
     * Get a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Observable<HttpInfo<DlpPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerShow(endpointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     */
    public dreamcatcherWebPresidioPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Observable<DlpPolicy> {
        return this.dreamcatcherWebPresidioPolicyControllerShowWithHttpInfo(endpointName, id, _options).pipe(map((apiResponse: HttpInfo<DlpPolicy>) => apiResponse.data));
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerUpdate(endpointName, id, dlpPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<DlpPolicy> {
        return this.dreamcatcherWebPresidioPolicyControllerUpdateWithHttpInfo(endpointName, id, dlpPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpPolicy>) => apiResponse.data));
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebPresidioPolicyControllerUpdate2(endpointName, id, dlpPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a DLP policy
     * @param endpointName Endpoint name
     * @param id DLP Policy ID
     * @param dlpPolicyParams DLP policy params
     */
    public dreamcatcherWebPresidioPolicyControllerUpdate2(endpointName: string, id: number, dlpPolicyParams?: DlpPolicyParams, _options?: Configuration): Observable<DlpPolicy> {
        return this.dreamcatcherWebPresidioPolicyControllerUpdate2WithHttpInfo(endpointName, id, dlpPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpPolicy>) => apiResponse.data));
    }

}

import { DlpZsnerPoliciesApiRequestFactory, DlpZsnerPoliciesApiResponseProcessor} from "../apis/DlpZsnerPoliciesApi";
export class ObservableDlpZsnerPoliciesApi {
    private requestFactory: DlpZsnerPoliciesApiRequestFactory;
    private responseProcessor: DlpZsnerPoliciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DlpZsnerPoliciesApiRequestFactory,
        responseProcessor?: DlpZsnerPoliciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DlpZsnerPoliciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DlpZsnerPoliciesApiResponseProcessor();
    }

    /**
     * Create a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(endpointName: string, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpZsnerPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerCreate(endpointName, dlpZsnerPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerCreate(endpointName: string, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<DlpZsnerPolicy> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerCreateWithHttpInfo(endpointName, dlpZsnerPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpZsnerPolicy>) => apiResponse.data));
    }

    /**
     * Delete a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerDelete(endpointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerDelete(endpointName: string, id: number, _options?: Configuration): Observable<void> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerDeleteWithHttpInfo(endpointName, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Observable<HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerScan(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scan content with a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dreamcatcherWebPresidioPolicyControllerScanRequest Content to scan
     */
    public dreamcatcherWebZeroShotNERPolicyControllerScan(endpointName: string, id: number, dreamcatcherWebPresidioPolicyControllerScanRequest?: DreamcatcherWebPresidioPolicyControllerScanRequest, _options?: Configuration): Observable<DreamcatcherWebPresidioPolicyControllerScan200Response> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerScanWithHttpInfo(endpointName, id, dreamcatcherWebPresidioPolicyControllerScanRequest, _options).pipe(map((apiResponse: HttpInfo<DreamcatcherWebPresidioPolicyControllerScan200Response>) => apiResponse.data));
    }

    /**
     * Get a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(endpointName: string, id: number, _options?: Configuration): Observable<HttpInfo<DlpZsnerPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerShow(endpointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     */
    public dreamcatcherWebZeroShotNERPolicyControllerShow(endpointName: string, id: number, _options?: Configuration): Observable<DlpZsnerPolicy> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerShowWithHttpInfo(endpointName, id, _options).pipe(map((apiResponse: HttpInfo<DlpZsnerPolicy>) => apiResponse.data));
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpZsnerPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerUpdate(endpointName, id, dlpZsnerPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<DlpZsnerPolicy> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerUpdateWithHttpInfo(endpointName, id, dlpZsnerPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpZsnerPolicy>) => apiResponse.data));
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<HttpInfo<DlpZsnerPolicy>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebZeroShotNERPolicyControllerUpdate2(endpointName, id, dlpZsnerPolicyParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a DLP ZSNER policy
     * @param endpointName Endpoint name
     * @param id DLP ZSNER Policy ID
     * @param dlpZsnerPolicyParams DLP ZSNER policy params
     */
    public dreamcatcherWebZeroShotNERPolicyControllerUpdate2(endpointName: string, id: number, dlpZsnerPolicyParams?: DlpZsnerPolicyParams, _options?: Configuration): Observable<DlpZsnerPolicy> {
        return this.dreamcatcherWebZeroShotNERPolicyControllerUpdate2WithHttpInfo(endpointName, id, dlpZsnerPolicyParams, _options).pipe(map((apiResponse: HttpInfo<DlpZsnerPolicy>) => apiResponse.data));
    }

}

import { EndpointsApiRequestFactory, EndpointsApiResponseProcessor} from "../apis/EndpointsApi";
export class ObservableEndpointsApi {
    private requestFactory: EndpointsApiRequestFactory;
    private responseProcessor: EndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EndpointsApiRequestFactory,
        responseProcessor?: EndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EndpointsApiResponseProcessor();
    }

    /**
     * List endpoints
     */
    public dreamcatcherWebEndpointControllerIndexWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ListEndpointResponseInner>>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerIndex(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerIndexWithHttpInfo(rsp)));
            }));
    }

    /**
     * List endpoints
     */
    public dreamcatcherWebEndpointControllerIndex(_options?: Configuration): Observable<Array<ListEndpointResponseInner>> {
        return this.dreamcatcherWebEndpointControllerIndexWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ListEndpointResponseInner>>) => apiResponse.data));
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(endpointName: string, _options?: Configuration): Observable<HttpInfo<Chat completion response>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerInvokeChatCompletions(endpointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions(endpointName: string, _options?: Configuration): Observable<Chat completion response> {
        return this.dreamcatcherWebEndpointControllerInvokeChatCompletionsWithHttpInfo(endpointName, _options).pipe(map((apiResponse: HttpInfo<Chat completion response>) => apiResponse.data));
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(endpointName: string, _options?: Configuration): Observable<HttpInfo<Chat completion response>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerInvokeChatCompletions2(endpointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Invoke a chat completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeChatCompletions2(endpointName: string, _options?: Configuration): Observable<Chat completion response> {
        return this.dreamcatcherWebEndpointControllerInvokeChatCompletions2WithHttpInfo(endpointName, _options).pipe(map((apiResponse: HttpInfo<Chat completion response>) => apiResponse.data));
    }

    /**
     * Invoke a completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(endpointName: string, _options?: Configuration): Observable<HttpInfo<Completion response>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerInvokeCompletions(endpointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Invoke a completion
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerInvokeCompletions(endpointName: string, _options?: Configuration): Observable<Completion response> {
        return this.dreamcatcherWebEndpointControllerInvokeCompletionsWithHttpInfo(endpointName, _options).pipe(map((apiResponse: HttpInfo<Completion response>) => apiResponse.data));
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerModelsWithHttpInfo(endpointName: string, _options?: Configuration): Observable<HttpInfo<ListModelsResponse>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerModels(endpointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerModelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists upstreams (ie models) for an endpoint
     * @param endpointName Endpoint name
     */
    public dreamcatcherWebEndpointControllerModels(endpointName: string, _options?: Configuration): Observable<ListModelsResponse> {
        return this.dreamcatcherWebEndpointControllerModelsWithHttpInfo(endpointName, _options).pipe(map((apiResponse: HttpInfo<ListModelsResponse>) => apiResponse.data));
    }

    /**
     * Get an endpoint
     * @param id Endpoint name
     */
    public dreamcatcherWebEndpointControllerShowWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ShowEndpointResponse>> {
        const requestContextPromise = this.requestFactory.dreamcatcherWebEndpointControllerShow(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dreamcatcherWebEndpointControllerShowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an endpoint
     * @param id Endpoint name
     */
    public dreamcatcherWebEndpointControllerShow(id: string, _options?: Configuration): Observable<ShowEndpointResponse> {
        return this.dreamcatcherWebEndpointControllerShowWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ShowEndpointResponse>) => apiResponse.data));
    }

}

import { StubOpenaiApiRequestFactory, StubOpenaiApiResponseProcessor} from "../apis/StubOpenaiApi";
export class ObservableStubOpenaiApi {
    private requestFactory: StubOpenaiApiRequestFactory;
    private responseProcessor: StubOpenaiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StubOpenaiApiRequestFactory,
        responseProcessor?: StubOpenaiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StubOpenaiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StubOpenaiApiResponseProcessor();
    }

    /**
     * Chat completion
     * @param createChatCompletion Chat completion params
     */
    public stubidityOpenAIChatCompletionCallWithHttpInfo(createChatCompletion?: Create chat completion, _options?: Configuration): Observable<HttpInfo<Chat completion response>> {
        const requestContextPromise = this.requestFactory.stubidityOpenAIChatCompletionCall(createChatCompletion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stubidityOpenAIChatCompletionCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Chat completion
     * @param createChatCompletion Chat completion params
     */
    public stubidityOpenAIChatCompletionCall(createChatCompletion?: Create chat completion, _options?: Configuration): Observable<Chat completion response> {
        return this.stubidityOpenAIChatCompletionCallWithHttpInfo(createChatCompletion, _options).pipe(map((apiResponse: HttpInfo<Chat completion response>) => apiResponse.data));
    }

    /**
     * Completion
     * @param completion Completion params
     */
    public stubidityOpenAICompletionCallWithHttpInfo(completion?: Completion, _options?: Configuration): Observable<HttpInfo<Completion response>> {
        const requestContextPromise = this.requestFactory.stubidityOpenAICompletionCall(completion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stubidityOpenAICompletionCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Completion
     * @param completion Completion params
     */
    public stubidityOpenAICompletionCall(completion?: Completion, _options?: Configuration): Observable<Completion response> {
        return this.stubidityOpenAICompletionCallWithHttpInfo(completion, _options).pipe(map((apiResponse: HttpInfo<Completion response>) => apiResponse.data));
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCallWithHttpInfo(embedding?: Embedding , _options?: Configuration): Observable<HttpInfo<Array<EmbeddingResponseInner>>> {
        const requestContextPromise = this.requestFactory.stubidityOpenAIEmbeddingCall(embedding, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stubidityOpenAIEmbeddingCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall(embedding?: Embedding , _options?: Configuration): Observable<Array<EmbeddingResponseInner>> {
        return this.stubidityOpenAIEmbeddingCallWithHttpInfo(embedding, _options).pipe(map((apiResponse: HttpInfo<Array<EmbeddingResponseInner>>) => apiResponse.data));
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall2WithHttpInfo(embedding?: Embedding , _options?: Configuration): Observable<HttpInfo<Array<EmbeddingResponseInner>>> {
        const requestContextPromise = this.requestFactory.stubidityOpenAIEmbeddingCall2(embedding, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stubidityOpenAIEmbeddingCall2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Embedding
     * @param embedding Embedding params
     */
    public stubidityOpenAIEmbeddingCall2(embedding?: Embedding , _options?: Configuration): Observable<Array<EmbeddingResponseInner>> {
        return this.stubidityOpenAIEmbeddingCall2WithHttpInfo(embedding, _options).pipe(map((apiResponse: HttpInfo<Array<EmbeddingResponseInner>>) => apiResponse.data));
    }

}
