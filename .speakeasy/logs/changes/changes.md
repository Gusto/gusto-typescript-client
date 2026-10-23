## Typescript SDK Changes:
* `gustoembedded.paySchedules.getAll()`: `response.[]` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Removed** (Breaking ⚠️)
    - `autoPayroll` **Removed** (Breaking ⚠️)
* `gustoembedded.contractors.get()`: `response` **Changed**
    - `additionalProperties` **Added**
    - `companyName` **Added**
* `gustoembedded.contractors.list()`: `response.[]` **Changed**
    - `additionalProperties` **Added**
    - `companyName` **Added**
* `gustoembedded.employees.get()`: `response` **Changed**
    - `additionalProperties` **Added**
    - `allHomeAddresses` **Added**
    - `companyName` **Added**
    - `currentHomeAddress` **Added**
* `gustoembedded.employees.list()`:  `response.[].companyName` **Added**
* `gustoembedded.payrolls.get()`:  `response.employeeCompensations[].paidTimeOff[].approvedRequestHours` **Added**
* `gustoembedded.payrolls.update()`:  `response.employeeCompensations[].paidTimeOff[].approvedRequestHours` **Added**
* `gustoembedded.payrolls.createOffCycle()`:  `response.employeeCompensations[].paidTimeOff[].approvedRequestHours` **Added**
* `gustoembedded.payrolls.prepare()`:  `response.employeeCompensations[].paidTimeOff[].approvedRequestHours` **Added**
