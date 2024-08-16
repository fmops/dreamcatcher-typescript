# .StubOpenaiApi

All URIs are relative to *https://dreamcatcher.blueteam.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stubidityOpenAIChatCompletionCall**](StubOpenaiApi.md#stubidityOpenAIChatCompletionCall) | **POST** /api/v1/stub/openai/v1/chat/completions | Chat completion
[**stubidityOpenAICompletionCall**](StubOpenaiApi.md#stubidityOpenAICompletionCall) | **POST** /api/v1/stub/openai/v1/completions | Completion
[**stubidityOpenAIEmbeddingCall**](StubOpenaiApi.md#stubidityOpenAIEmbeddingCall) | **POST** /api/v1/stub/openai/v1/embeddings | Embedding
[**stubidityOpenAIEmbeddingCall2**](StubOpenaiApi.md#stubidityOpenAIEmbeddingCall2) | **POST** /api/v1/stub/openai/v1/engines/{model} | Embedding


# **stubidityOpenAIChatCompletionCall**
> Chat completion response stubidityOpenAIChatCompletionCall()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StubOpenaiApi(configuration);

let body:.StubOpenaiApiStubidityOpenAIChatCompletionCallRequest = {
  // Create chat completion | Chat completion params (optional)
  createChatCompletion: {
    messages: [
      {
        content: "content_example",
        role: "role_example",
      },
    ],
    model: "model_example",
    stream: true,
  },
};

apiInstance.stubidityOpenAIChatCompletionCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChatCompletion** | **Create chat completion**| Chat completion params |


### Return type

**Chat completion response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chat completion response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stubidityOpenAICompletionCall**
> Completion response stubidityOpenAICompletionCall()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StubOpenaiApi(configuration);

let body:.StubOpenaiApiStubidityOpenAICompletionCallRequest = {
  // Completion | Completion params (optional)
  completion: {
    model: "model_example",
    prompt: "prompt_example",
    stream: true,
  },
};

apiInstance.stubidityOpenAICompletionCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completion** | **Completion**| Completion params |


### Return type

**Completion response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Completion response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stubidityOpenAIEmbeddingCall**
> Array<EmbeddingResponseInner> stubidityOpenAIEmbeddingCall()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StubOpenaiApi(configuration);

let body:.StubOpenaiApiStubidityOpenAIEmbeddingCallRequest = {
  // Embedding  | Embedding params (optional)
  embedding: {
    input: "input_example",
    model: "model_example",
  },
};

apiInstance.stubidityOpenAIEmbeddingCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embedding** | **Embedding **| Embedding params |


### Return type

**Array<EmbeddingResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Embedding response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stubidityOpenAIEmbeddingCall2**
> Array<EmbeddingResponseInner> stubidityOpenAIEmbeddingCall2()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StubOpenaiApi(configuration);

let body:.StubOpenaiApiStubidityOpenAIEmbeddingCall2Request = {
  // Embedding  | Embedding params (optional)
  embedding: {
    input: "input_example",
    model: "model_example",
  },
};

apiInstance.stubidityOpenAIEmbeddingCall2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embedding** | **Embedding **| Embedding params |


### Return type

**Array<EmbeddingResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Embedding response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


