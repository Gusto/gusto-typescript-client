## Typescript SDK Changes:
* `gustoembedded.paySchedules.create()`:  `response.autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.paySchedules.getAll()`:  `response.[].autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.paySchedules.get()`:  `response.autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.paySchedules.update()`:  `response.autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.createOffCycle()`: `response` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.wireInRequests.get()`: `response.paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.wireInRequests.submit()`: `response.paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.wireInRequests.list()`: `response.[].paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.externalPayrolls.delete()`:  `error.status[422]` **Added**
* `gustoembedded.externalPayrolls.update()`: 
  *  `request.externalPayrollUpdateRequest.replaceFields` **Added**
* `gustoembedded.employees.list()`:  `response.[].allHomeAddresses[].effectiveDate` **Added**
* `gustoembedded.employeePaymentMethod.deleteBankAccount()`:  `error.status[422]` **Added**
