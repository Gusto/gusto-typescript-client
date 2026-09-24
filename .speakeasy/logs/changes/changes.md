## Typescript SDK Changes:
* `gustoembedded.historicalEmployees.update()`:  `response.jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.list()`:  `response.[].jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.getJobs()`:  `response.[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.createJob()`:  `response.currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.taxPayments.getTaxPayment()`: `response` **Changed** (Breaking ⚠️)
    - `dueDate` **Changed** (Breaking ⚠️)
    - `periodStart` **Changed** (Breaking ⚠️)
* `gustoembedded.taxPayments.getTaxPayments()`: 
  *  `request.payrollUuids` **Added**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `dueDate` **Changed** (Breaking ⚠️)
    - `periodStart` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.update()`: 
  * `request.payrollUpdate.employeeCompensations[]` **Changed**
    - `fixedCompensations[].breakdowns` **Added**
    - `hourlyCompensations[].breakdowns` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `employeeCompensations[].fixedCompensations[].breakdowns` **Added**
    - `employeeCompensations[].hourlyCompensations[].breakdowns` **Added**
    - `payPeriod.endDate` **Changed** (Breaking ⚠️)
    - `payPeriod.startDate` **Changed** (Breaking ⚠️)
    - `workweeks` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.get()`:  `response.jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.update()`:  `response.jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.getJob()`:  `response.currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.create()`:  `response.jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.createHistorical()`:  `response.jobs[].currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.update()`:  `response.currentCompensationUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.list()`: `response.[].payPeriod` **Changed** (Breaking ⚠️)
    - `endDate` **Changed** (Breaking ⚠️)
    - `startDate` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.get()`: `response` **Changed** (Breaking ⚠️)
    - `employeeCompensations[].fixedCompensations[].breakdowns` **Added**
    - `employeeCompensations[].hourlyCompensations[].breakdowns` **Added**
    - `employeeCompensations[].payAdjustments` **Added**
    - `payPeriod.endDate` **Changed** (Breaking ⚠️)
    - `payPeriod.startDate` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.createOffCycle()`: `response` **Changed** (Breaking ⚠️)
    - `employeeCompensations[].fixedCompensations[].breakdowns` **Added**
    - `employeeCompensations[].hourlyCompensations[].breakdowns` **Added**
    - `payPeriod.endDate` **Changed** (Breaking ⚠️)
    - `payPeriod.startDate` **Changed** (Breaking ⚠️)
    - `workweeks` **Added**
* `gustoembedded.payrolls.cancel()`: `response.payPeriod` **Changed** (Breaking ⚠️)
    - `endDate` **Changed** (Breaking ⚠️)
    - `startDate` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.prepare()`: `response` **Changed** (Breaking ⚠️)
    - `employeeCompensations[].fixedCompensations[].breakdowns` **Added**
    - `employeeCompensations[].hourlyCompensations[].breakdowns` **Added**
    - `payPeriod.endDate` **Changed** (Breaking ⚠️)
    - `payPeriod.startDate` **Changed** (Breaking ⚠️)
    - `workweeks` **Added**
* `gustoembedded.paySchedules.get()`:  `response.workweekStartDay` **Added**
* `gustoembedded.paySchedules.getAll()`:  `response.[].workweekStartDay` **Added**
* `gustoembedded.paySchedules.create()`: 
  *  `request.payScheduleCreateRequest.workweekStartDay` **Added**
  *  `response.workweekStartDay` **Added**
* `gustoembedded.earningTypes.update()`: 
  * `request.requestBody` **Changed**
    - `category` **Added**
    - `includedInOvertimePay` **Added**
  * `response` **Changed**
    - `category` **Added**
    - `includedInOvertimePay` **Added**
* `gustoembedded.paySchedules.update()`: 
  *  `request.payScheduleUpdateRequest.workweekStartDay` **Added**
  *  `response.workweekStartDay` **Added**
* `gustoembedded.earningTypes.create()`: 
  * `request.requestBody` **Changed**
    - `category` **Added**
    - `includedInOvertimePay` **Added**
  * `response` **Changed**
    - `category` **Added**
    - `includedInOvertimePay` **Added**
* `gustoembedded.earningTypes.list()`: `response.default[]` **Changed**
    - `category` **Added**
    - `includedInOvertimePay` **Added**
