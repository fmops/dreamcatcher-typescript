# .DlpPoliciesApi

All URIs are relative to *https://dreamcatcher.blueteam.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dreamcatcherWebPresidioPolicyControllerCreate**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerCreate) | **POST** /api/v1/endpoints/{endpoint_name}/policies/dlp | Create a DLP policy
[**dreamcatcherWebPresidioPolicyControllerDelete**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerDelete) | **DELETE** /api/v1/endpoints/{endpoint_name}/policies/dlp/{id} | Delete a DLP policy
[**dreamcatcherWebPresidioPolicyControllerScan**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerScan) | **POST** /api/v1/endpoints/{endpoint_name}/policies/dlp/{id}/scan | Scan content with a DLP policy
[**dreamcatcherWebPresidioPolicyControllerShow**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerShow) | **GET** /api/v1/endpoints/{endpoint_name}/policies/dlp/{id} | Get a DLP policy
[**dreamcatcherWebPresidioPolicyControllerUpdate**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerUpdate) | **PUT** /api/v1/endpoints/{endpoint_name}/policies/dlp/{id} | Update a DLP policy
[**dreamcatcherWebPresidioPolicyControllerUpdate2**](DlpPoliciesApi.md#dreamcatcherWebPresidioPolicyControllerUpdate2) | **PATCH** /api/v1/endpoints/{endpoint_name}/policies/dlp/{id} | Update a DLP policy


# **dreamcatcherWebPresidioPolicyControllerCreate**
> DlpPolicy dreamcatcherWebPresidioPolicyControllerCreate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerCreateRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // DlpPolicyParams | DLP policy params (optional)
  dlpPolicyParams: {
    dlpPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        "MEDICAL_LICENSE",
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebPresidioPolicyControllerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpPolicyParams** | **DlpPolicyParams**| DLP policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined


### Return type

**DlpPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Create DLP policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebPresidioPolicyControllerDelete**
> void dreamcatcherWebPresidioPolicyControllerDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerDeleteRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP Policy ID
  id: 1,
};

apiInstance.dreamcatcherWebPresidioPolicyControllerDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP Policy ID | defaults to undefined


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

# **dreamcatcherWebPresidioPolicyControllerScan**
> DreamcatcherWebPresidioPolicyControllerScan200Response dreamcatcherWebPresidioPolicyControllerScan()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerScanRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP Policy ID
  id: 1,
  // DreamcatcherWebPresidioPolicyControllerScanRequest | Content to scan (optional)
  dreamcatcherWebPresidioPolicyControllerScanRequest: {
    content: "content_example",
  },
};

apiInstance.dreamcatcherWebPresidioPolicyControllerScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dreamcatcherWebPresidioPolicyControllerScanRequest** | **DreamcatcherWebPresidioPolicyControllerScanRequest**| Content to scan |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP Policy ID | defaults to undefined


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
**200** | Scan DLP policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebPresidioPolicyControllerShow**
> DlpPolicy dreamcatcherWebPresidioPolicyControllerShow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerShowRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP Policy ID
  id: 1,
};

apiInstance.dreamcatcherWebPresidioPolicyControllerShow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP Policy ID | defaults to undefined


### Return type

**DlpPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Show DLP policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebPresidioPolicyControllerUpdate**
> DlpPolicy dreamcatcherWebPresidioPolicyControllerUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdateRequest = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP Policy ID
  id: 1,
  // DlpPolicyParams | DLP policy params (optional)
  dlpPolicyParams: {
    dlpPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        "MEDICAL_LICENSE",
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebPresidioPolicyControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpPolicyParams** | **DlpPolicyParams**| DLP policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP Policy ID | defaults to undefined


### Return type

**DlpPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update DLP policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dreamcatcherWebPresidioPolicyControllerUpdate2**
> DlpPolicy dreamcatcherWebPresidioPolicyControllerUpdate2()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DlpPoliciesApi(configuration);

let body:.DlpPoliciesApiDreamcatcherWebPresidioPolicyControllerUpdate2Request = {
  // string | Endpoint name
  endpointName: "demo-endpoint",
  // number | DLP Policy ID
  id: 1,
  // DlpPolicyParams | DLP policy params (optional)
  dlpPolicyParams: {
    dlpPolicy: {
      active: true,
      anonymizer: {
        type: "replace",
      },
      entities: [
        "MEDICAL_LICENSE",
      ],
      name: "name_example",
      response: "block",
      scoreThreshold: 3.14,
    },
  },
};

apiInstance.dreamcatcherWebPresidioPolicyControllerUpdate2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dlpPolicyParams** | **DlpPolicyParams**| DLP policy params |
 **endpointName** | [**string**] | Endpoint name | defaults to undefined
 **id** | [**number**] | DLP Policy ID | defaults to undefined


### Return type

**DlpPolicy**

### Authorization

[authorization](README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update DLP policy response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


