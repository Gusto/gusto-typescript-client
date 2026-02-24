## Typescript SDK Changes:
* `gustoembedded.companies.getOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companies.finishOnboarding()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.locations.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyLocationRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.locations.get()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `page` **Removed** (Breaking ⚠️)
    - `per` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employees.updateOnboardingDocumentsConfig()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `employeeOnboardingDocumentsConfigRequest` **Added**
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  * `response` **Changed** (Breaking ⚠️)
    - `i9Document` **Changed** (Breaking ⚠️)
    - `uuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.list()`: 
  *  `request.sortBy` **Changed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.create()`: 
  * `request.requestBody.contractorPayments[]` **Changed** (Breaking ⚠️)
    - `bonus` **Changed** (Breaking ⚠️)
    - `hours` **Changed** (Breaking ⚠️)
    - `reimbursement` **Changed** (Breaking ⚠️)
    - `wage` **Changed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.preview()`: 
  * `request.requestBody.contractorPayments[]` **Changed** (Breaking ⚠️)
    - `bonus` **Changed** (Breaking ⚠️)
    - `hours` **Changed** (Breaking ⚠️)
    - `reimbursement` **Changed** (Breaking ⚠️)
    - `wage` **Changed** (Breaking ⚠️)
* `gustoembedded.companyForms.getAll()`: 
  *  `request.sortBy` **Changed** (Breaking ⚠️)
* `gustoembedded.signatories.delete()`:  `error.status[422]` **Added**
* `gustoembedded.contractors.delete()`:  `error.status[422]` **Added**
* `gustoembedded.contractors.updateOnboardingStatus()`: 
  * `request.requestBody.onboardingStatus` **Changed**
    - `enum(adminOnboardingIncomplete)` **Added**
    - `enum(adminOnboardingReview)` **Added**
    - `enum(selfOnboardingInvited)` **Added**
    - `enum(selfOnboardingNotInvited)` **Added**
    - `enum(selfOnboardingReview)` **Added**
    - `enum(selfOnboardingStarted)` **Added**
