## Typescript SDK Changes:
* `gustoembedded.employees.create()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.garnishments.getChildSupportData()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.garnishments.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `updateGarnishmentRequest` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.garnishments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `garnishmentRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyForms.getAll()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `page` **Added**
    - `per` **Added**
    - `sortBy` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.[].employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.updateTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.deleteTermination()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.departments.removePeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.departments.addPeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.departments.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.departments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.historicalEmployees.update()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.customFields[].description` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employees.update()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.get()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.createHistorical()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.list()`:  `response.[].customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.departments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.create()`: 
  * `request` **Changed**
    - `requestBody.name` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidDecline()`: **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidApprove()`: **Added**
* `gustoembedded.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.timeOffRequests.getV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequestsPreview()`: **Added**
* `gustoembedded.departments.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.getV1TerminationsEmployeeId()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.departments.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffBalances()`: **Added**
* `gustoembedded.employeeEmployments.createTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.getTerminations()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests()`: **Added**
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`: **Added**
* `gustoembedded.companies.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.default[].active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.update()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
* `gustoembedded.employeeForms.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.getPdf()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.sign()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.payrolls.get()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.update()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.prepare()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.companyForms.get()`:  `response.employeeUuid` **Added**
* `gustoembedded.companyForms.sign()`:  `response.employeeUuid` **Added**
* `gustoembedded.contractors.postV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.garnishments.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.garnishments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidRehire()`: **Added**
* `gustoembedded.contractors.postV1ContractorsContractorUuidRehire()`: **Added**
