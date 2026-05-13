## Typescript SDK Changes:
* `gustoembedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid()`: `response.exclusions[]` **Changed** (Breaking ⚠️)
    - `category` **Added**
    - `reasonCode` **Removed** (Breaking ⚠️)
* `gustoembedded.webhooks.createSubscription()`: 
  *  `request.requestBody.subscriptionTypes[].enum(peopleBatch)` **Added**
* `gustoembedded.webhooks.updateSubscription()`: 
  *  `request.requestBody.subscriptionTypes[].enum(peopleBatch)` **Added**
