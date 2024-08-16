# .DlpZsnerPoliciesApi

All URIs are relative to *https://dreamcatcher.blueteam.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dreamcatcherWebZeroShotNERPolicyControllerCreate**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerCreate) | **POST** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner | Create a DLP ZSNER policy
[**dreamcatcherWebZeroShotNERPolicyControllerDelete**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerDelete) | **DELETE** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id} | Delete a DLP ZSNER policy
[**dreamcatcherWebZeroShotNERPolicyControllerScan**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerScan) | **POST** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id}/scan | Scan content with a DLP ZSNER policy
[**dreamcatcherWebZeroShotNERPolicyControllerShow**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerShow) | **GET** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id} | Get a DLP ZSNER policy
[**dreamcatcherWebZeroShotNERPolicyControllerUpdate**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerUpdate) | **PUT** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id} | Update a DLP ZSNER policy
[**dreamcatcherWebZeroShotNERPolicyControllerUpdate2**](DlpZsnerPoliciesApi.md#dreamcatcherWebZeroShotNERPolicyControllerUpdate2) | **PATCH** /api/v1/endpoints/{endpoint_name}/policies/dlp_zsner/{id} | Update a DLP ZSNER policy


# **dreamcatcherWebZeroShotNERPolicyControllerCreate**
> DlpZsnerPolicy dreamcatcherWebZeroShotNERPolicyControllerCreate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerCreateRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // DlpZsnerPolicyParams | DLP ZSNER policy params (optional)
  dlpZsnerPolicyParams: {
    dlpZsnerPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        {
          entity: "entity_example",
        },
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpZsnerPolicyParams** | **DlpZsnerPolicyParams**| DLP ZSNER policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**DlpZsnerPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Create DLP ZSNER policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebZeroShotNERPolicyControllerDelete**
> void dreamcatcherWebZeroShotNERPolicyControllerDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerDeleteRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP ZSNER Policy ID
  id: 1,
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP ZSNER Policy ID | defaults to undefined


### Return type

**void**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebZeroShotNERPolicyControllerScan**
> DreamcatcherWebPresidioPolicyControllerScan200Response dreamcatcherWebZeroShotNERPolicyControllerScan()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerScanRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP ZSNER Policy ID
  id: 1,
  // DreamcatcherWebPresidioPolicyControllerScanRequest | Content to scan (optional)
  dreamcatcherWebPresidioPolicyControllerScanRequest: {
    content: "content_example",
  },
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dreamcatcherWebPresidioPolicyControllerScanRequest** | **DreamcatcherWebPresidioPolicyControllerScanRequest**| Content to scan |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP ZSNER Policy ID | defaults to undefined


### Return type

**DreamcatcherWebPresidioPolicyControllerScan200Response**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Scan DLP ZSNER policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebZeroShotNERPolicyControllerShow**
> DlpZsnerPolicy dreamcatcherWebZeroShotNERPolicyControllerShow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerShowRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP ZSNER Policy ID
  id: 1,
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerShow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP ZSNER Policy ID | defaults to undefined


### Return type

**DlpZsnerPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Show DLP ZSNER policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebZeroShotNERPolicyControllerUpdate**
> DlpZsnerPolicy dreamcatcherWebZeroShotNERPolicyControllerUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdateRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP ZSNER Policy ID
  id: 1,
  // DlpZsnerPolicyParams | DLP ZSNER policy params (optional)
  dlpZsnerPolicyParams: {
    dlpZsnerPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        {
          entity: "entity_example",
        },
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpZsnerPolicyParams** | **DlpZsnerPolicyParams**| DLP ZSNER policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP ZSNER Policy ID | defaults to undefined


### Return type

**DlpZsnerPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update DLP ZSNER policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebZeroShotNERPolicyControllerUpdate2**
> DlpZsnerPolicy dreamcatcherWebZeroShotNERPolicyControllerUpdate2()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpZsnerPoliciesApi(configuration);

let body:.DlpZsnerPoliciesApiDreamcatcherWebZeroShotNERPolicyControllerUpdate2Request = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP ZSNER Policy ID
  id: 1,
  // DlpZsnerPolicyParams | DLP ZSNER policy params (optional)
  dlpZsnerPolicyParams: {
    dlpZsnerPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        {
          entity: "entity_example",
        },
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebZeroShotNERPolicyControllerUpdate2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpZsnerPolicyParams** | **DlpZsnerPolicyParams**| DLP ZSNER policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP ZSNER Policy ID | defaults to undefined


### Return type

**DlpZsnerPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update DLP ZSNER policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


