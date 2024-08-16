# .EndpointsApi

All URIs are relative to *https://dreamcatcher.blueteam.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dreamcatcherWebEndpointControllerIndex**](EndpointsApi.md#dreamcatcherWebEndpointControllerIndex) | **GET** /api/v1/endpoints | List endpoints
[**dreamcatcherWebEndpointControllerInvokeChatCompletions**](EndpointsApi.md#dreamcatcherWebEndpointControllerInvokeChatCompletions) | **POST** /api/v1/endpoints/{endpoint_name}/azure/openai/deployments/{deployment}/chat/completions | Invoke a chat completion
[**dreamcatcherWebEndpointControllerInvokeChatCompletions2**](EndpointsApi.md#dreamcatcherWebEndpointControllerInvokeChatCompletions2) | **POST** /api/v1/endpoints/{endpoint_name}/openai/v1/chat/completions | Invoke a chat completion
[**dreamcatcherWebEndpointControllerInvokeCompletions**](EndpointsApi.md#dreamcatcherWebEndpointControllerInvokeCompletions) | **POST** /api/v1/endpoints/{endpoint_name}/openai/v1/completions | Invoke a completion
[**dreamcatcherWebEndpointControllerModels**](EndpointsApi.md#dreamcatcherWebEndpointControllerModels) | **GET** /api/v1/endpoints/{endpoint_name}/openai/v1/models | Lists upstreams (ie models) for an endpoint
[**dreamcatcherWebEndpointControllerShow**](EndpointsApi.md#dreamcatcherWebEndpointControllerShow) | **GET** /api/v1/endpoints/{id} | Get an endpoint


# **dreamcatcherWebEndpointControllerIndex**
> Array<ListEndpointResponseInner> dreamcatcherWebEndpointControllerIndex()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:any = {};

apiInstance.dreamcatcherWebEndpointControllerIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ListEndpointResponseInner>**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List endpoints response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebEndpointControllerInvokeChatCompletions**
> Chat completion response dreamcatcherWebEndpointControllerInvokeChatCompletions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:.EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletionsRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
};

apiInstance.dreamcatcherWebEndpointControllerInvokeChatCompletions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**Chat completion response**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chat completion response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebEndpointControllerInvokeChatCompletions2**
> Chat completion response dreamcatcherWebEndpointControllerInvokeChatCompletions2()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:.EndpointsApiDreamcatcherWebEndpointControllerInvokeChatCompletions2Request = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
};

apiInstance.dreamcatcherWebEndpointControllerInvokeChatCompletions2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**Chat completion response**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chat completion response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebEndpointControllerInvokeCompletions**
> Completion response dreamcatcherWebEndpointControllerInvokeCompletions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:.EndpointsApiDreamcatcherWebEndpointControllerInvokeCompletionsRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
};

apiInstance.dreamcatcherWebEndpointControllerInvokeCompletions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**Completion response**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Completion response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebEndpointControllerModels**
> ListModelsResponse dreamcatcherWebEndpointControllerModels()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:.EndpointsApiDreamcatcherWebEndpointControllerModelsRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
};

apiInstance.dreamcatcherWebEndpointControllerModels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**ListModelsResponse**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List models response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebEndpointControllerShow**
> ShowEndpointResponse dreamcatcherWebEndpointControllerShow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndpointsApi(configuration);

let body:.EndpointsApiDreamcatcherWebEndpointControllerShowRequest = {
  // string | Endpoint name
  id: "demo-endpoint",
};

apiInstance.dreamcatcherWebEndpointControllerShow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Endpoint name | defaults to undefined


### Return type

**ShowEndpointResponse**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Show endpoint response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


