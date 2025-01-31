# PutV1ContractorDocumentSignRequest

## Example Usage

```typescript
import { PutV1ContractorDocumentSignRequest } from "@gusto/embedded-api/models/operations";

let value: PutV1ContractorDocumentSignRequest = {
  documentUuid: "<id>",
  requestBody: {
    fields: [
      {},
    ],
    agree: false,
    signedByIpAddress: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentUuid`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The ID or UUID of the document                                                                                                                                                                                               |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1ContractorDocumentSignRequestBody](../../models/operations/putv1contractordocumentsignrequestbody.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |