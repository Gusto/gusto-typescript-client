# gusto-embedded

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *gusto-embedded* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=gusto-embedded&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/gusto/ruby-sdk). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Gusto API: Welcome to Gusto's Embedded Payroll API documentation!
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [gusto-embedded](#gusto-embedded)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getTokenInfo({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                | Type | Scheme      | Environment Variable                |
| ------------------- | ---- | ----------- | ----------------------------------- |
| `companyAccessAuth` | http | HTTP Bearer | `GUSTOEMBEDDED_COMPANY_ACCESS_AUTH` |

To authenticate with the API the `companyAccessAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getTokenInfo({});

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.companies.createPartnerManaged({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    requestBody: {
      user: {
        firstName: "Frank",
        lastName: "Ocean",
        email: "frank@example.com",
        phone: "2345558899",
      },
      company: {
        name: "Frank's Ocean, LLC",
        tradeName: "Frank’s Ocean",
        ein: "123456789",
        contractorOnly: false,
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [achTransactions](docs/sdks/achtransactions/README.md)

* [get](docs/sdks/achtransactions/README.md#get) - Get all ACH transactions for a company

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create a company bank account
* [list](docs/sdks/bankaccounts/README.md#list) - Get all company bank accounts
* [verify](docs/sdks/bankaccounts/README.md#verify) - Verify a company bank account
* [createFromProcessorToken](docs/sdks/bankaccounts/README.md#createfromprocessortoken) - Create a bank account from a plaid processor token

### [companies](docs/sdks/companies/README.md)

* [createPartnerManaged](docs/sdks/companies/README.md#createpartnermanaged) - Create a partner managed company
* [get](docs/sdks/companies/README.md#get) - Get a company
* [update](docs/sdks/companies/README.md#update) - Update a company
* [migrate](docs/sdks/companies/README.md#migrate) - Migrate company to embedded payroll
* [acceptTermsOfService](docs/sdks/companies/README.md#accepttermsofservice) - Accept terms of service for a company user
* [retrieveTermsOfService](docs/sdks/companies/README.md#retrievetermsofservice) - Retrieve terms of service status for a company user
* [createAdmin](docs/sdks/companies/README.md#createadmin) - Create an admin for the company
* [getAdmins](docs/sdks/companies/README.md#getadmins) - Get all the admins at a company
* [getOnboardingStatus](docs/sdks/companies/README.md#getonboardingstatus) - Get the company's onboarding status
* [finishOnboarding](docs/sdks/companies/README.md#finishonboarding) - Finish company onboarding
* [getCustomFields](docs/sdks/companies/README.md#getcustomfields) - Get the custom fields of a company

#### [companies.benefits](docs/sdks/benefits/README.md)

* [list](docs/sdks/benefits/README.md#list) - Get benefits for a company

#### [companies.forms](docs/sdks/forms/README.md)

* [list](docs/sdks/forms/README.md#list) - Get all company forms

### [companyAttachment](docs/sdks/companyattachment/README.md)

* [getDownloadUrl](docs/sdks/companyattachment/README.md#getdownloadurl) - Get a temporary url to download the Company Attachment file

### [companyAttachments](docs/sdks/companyattachments/README.md)

* [getDetails](docs/sdks/companyattachments/README.md#getdetails) - Get Company Attachment Details
* [getAll](docs/sdks/companyattachments/README.md#getall) - Get List of Company Attachments
* [create](docs/sdks/companyattachments/README.md#create) - Create Company Attachment and Upload File

### [companyBenefits](docs/sdks/companybenefits/README.md)

* [create](docs/sdks/companybenefits/README.md#create) - Create a company benefit
* [get](docs/sdks/companybenefits/README.md#get) - Get a company benefit
* [update](docs/sdks/companybenefits/README.md#update) - Update a company benefit
* [delete](docs/sdks/companybenefits/README.md#delete) - Delete a company benefit
* [getAll](docs/sdks/companybenefits/README.md#getall) - Get all benefits supported by Gusto
* [getSupportedBenefit](docs/sdks/companybenefits/README.md#getsupportedbenefit) - Get a supported benefit by ID
* [getSummary](docs/sdks/companybenefits/README.md#getsummary) - Get company benefit summary by company benefit id.
* [getEmployeeBenefits](docs/sdks/companybenefits/README.md#getemployeebenefits) - Get all employee benefits for a company benefit
* [bulkUpdateEmployeeBenefits](docs/sdks/companybenefits/README.md#bulkupdateemployeebenefits) - Bulk update employee benefits for a company benefit
* [getRequirements](docs/sdks/companybenefits/README.md#getrequirements) - Get benefit fields requirements by ID

### [companyForms](docs/sdks/companyforms/README.md)

* [get](docs/sdks/companyforms/README.md#get) - Get a company form
* [getPdf](docs/sdks/companyforms/README.md#getpdf) - Get a company form pdf
* [sign](docs/sdks/companyforms/README.md#sign) - Sign a company form

### [contractorDocuments](docs/sdks/contractordocuments/README.md)

* [list](docs/sdks/contractordocuments/README.md#list) - Get all contractor documents
* [get](docs/sdks/contractordocuments/README.md#get) - Get a contractor document
* [getPdf](docs/sdks/contractordocuments/README.md#getpdf) - Get the contractor document pdf
* [sign](docs/sdks/contractordocuments/README.md#sign) - Sign a contractor document

### [contractorForms](docs/sdks/contractorforms/README.md)

* [getAll](docs/sdks/contractorforms/README.md#getall) - Get all contractor forms
* [get](docs/sdks/contractorforms/README.md#get) - Get a contractor form
* [getPdf](docs/sdks/contractorforms/README.md#getpdf) - Get the contractor form pdf
* [generate1099](docs/sdks/contractorforms/README.md#generate1099) - Generate a 1099 form [DEMO]

### [contractorPaymentGroups](docs/sdks/contractorpaymentgroups/README.md)

* [create](docs/sdks/contractorpaymentgroups/README.md#create) - Create a contractor payment group
* [list](docs/sdks/contractorpaymentgroups/README.md#list) - Get contractor payment groups for a company
* [preview](docs/sdks/contractorpaymentgroups/README.md#preview) - Preview a contractor payment group
* [get](docs/sdks/contractorpaymentgroups/README.md#get) - Fetch a contractor payment group
* [delete](docs/sdks/contractorpaymentgroups/README.md#delete) - Cancel a contractor payment group
* [fund](docs/sdks/contractorpaymentgroups/README.md#fund) - Fund a contractor payment group [DEMO]

### [contractorPaymentMethod](docs/sdks/contractorpaymentmethod/README.md)

* [createBankAccount](docs/sdks/contractorpaymentmethod/README.md#createbankaccount) - Create a contractor bank account
* [getBankAccounts](docs/sdks/contractorpaymentmethod/README.md#getbankaccounts) - Get all contractor bank accounts
* [get](docs/sdks/contractorpaymentmethod/README.md#get) - Get a contractor's payment method
* [updatePaymentMethod](docs/sdks/contractorpaymentmethod/README.md#updatepaymentmethod) - Update a contractor's payment method

### [contractorPayments](docs/sdks/contractorpayments/README.md)

* [getReceipt](docs/sdks/contractorpayments/README.md#getreceipt) - Get a single contractor payment receipt
* [fund](docs/sdks/contractorpayments/README.md#fund) - Fund a contractor payment [DEMO]
* [create](docs/sdks/contractorpayments/README.md#create) - Create a contractor payment
* [getPayments](docs/sdks/contractorpayments/README.md#getpayments) - Get contractor payments for a company
* [get](docs/sdks/contractorpayments/README.md#get) - Get a single contractor payment
* [cancel](docs/sdks/contractorpayments/README.md#cancel) - Cancel a contractor payment

### [contractors](docs/sdks/contractors/README.md)

* [create](docs/sdks/contractors/README.md#create) - Create a contractor
* [list](docs/sdks/contractors/README.md#list) - Get contractors of a company
* [get](docs/sdks/contractors/README.md#get) - Get a contractor
* [update](docs/sdks/contractors/README.md#update) - Update a contractor
* [delete](docs/sdks/contractors/README.md#delete) - Delete a contractor
* [getOnboardingStatus](docs/sdks/contractors/README.md#getonboardingstatus) - Get the contractor's onboarding status
* [updateOnboardingStatus](docs/sdks/contractors/README.md#updateonboardingstatus) - Change the contractor's onboarding status
* [getAddress](docs/sdks/contractors/README.md#getaddress) - Get a contractor address
* [updateAddress](docs/sdks/contractors/README.md#updateaddress) - Update a contractor's address

### [departments](docs/sdks/departments/README.md)

* [create](docs/sdks/departments/README.md#create) - Create a department
* [list](docs/sdks/departments/README.md#list) - Get all departments of a company
* [get](docs/sdks/departments/README.md#get) - Get a department
* [update](docs/sdks/departments/README.md#update) - Update a department
* [delete](docs/sdks/departments/README.md#delete) - Delete a department
* [addPeople](docs/sdks/departments/README.md#addpeople) - Add people to a department
* [removePeople](docs/sdks/departments/README.md#removepeople) - Remove people from a department

### [earningTypes](docs/sdks/earningtypes/README.md)

* [create](docs/sdks/earningtypes/README.md#create) - Create a custom earning type
* [getAll](docs/sdks/earningtypes/README.md#getall) - Get all earning types for a company
* [update](docs/sdks/earningtypes/README.md#update) - Update an earning type
* [deactivate](docs/sdks/earningtypes/README.md#deactivate) - Deactivate an earning type

### [employeeAddresses](docs/sdks/employeeaddresses/README.md)

* [getHomeAddresses](docs/sdks/employeeaddresses/README.md#gethomeaddresses) - Get an employee's home addresses
* [create](docs/sdks/employeeaddresses/README.md#create) - Create an employee's home address
* [getHomeAddress](docs/sdks/employeeaddresses/README.md#gethomeaddress) - Get an employee's home address
* [updateHomeAddress](docs/sdks/employeeaddresses/README.md#updatehomeaddress) - Update an employee's home address
* [removeHomeAddress](docs/sdks/employeeaddresses/README.md#removehomeaddress) - Delete an employee's home address
* [get](docs/sdks/employeeaddresses/README.md#get) - Get an employee's work addresses
* [getWorkAddress](docs/sdks/employeeaddresses/README.md#getworkaddress) - Get an employee work address
* [updateWorkAddress](docs/sdks/employeeaddresses/README.md#updateworkaddress) - Update an employee work address
* [delete](docs/sdks/employeeaddresses/README.md#delete) - Delete an employee's work address

#### [employeeAddresses.workAddresses](docs/sdks/workaddresses/README.md)

* [create](docs/sdks/workaddresses/README.md#create) - Create an employee work address

### [employeeBenefits](docs/sdks/employeebenefits/README.md)

* [createBenefit](docs/sdks/employeebenefits/README.md#createbenefit) - Create an employee benefit
* [getAll](docs/sdks/employeebenefits/README.md#getall) - Get all benefits for an employee
* [get](docs/sdks/employeebenefits/README.md#get) - Get an employee benefit
* [update](docs/sdks/employeebenefits/README.md#update) - Update an employee benefit
* [delete](docs/sdks/employeebenefits/README.md#delete) - Delete an employee benefit
* [createYtdAmountsFromDifferentCompany](docs/sdks/employeebenefits/README.md#createytdamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company

### [employeeEmployments](docs/sdks/employeeemployments/README.md)

* [createTermination](docs/sdks/employeeemployments/README.md#createtermination) - Create an employee termination
* [getTermination](docs/sdks/employeeemployments/README.md#gettermination) - Get terminations for an employee
* [deleteTermination](docs/sdks/employeeemployments/README.md#deletetermination) - Delete an employee termination
* [updateTermination](docs/sdks/employeeemployments/README.md#updatetermination) - Update an employee termination
* [createRehire](docs/sdks/employeeemployments/README.md#createrehire) - Create an employee rehire
* [updateRehire](docs/sdks/employeeemployments/README.md#updaterehire) - Update an employee rehire
* [getRehire](docs/sdks/employeeemployments/README.md#getrehire) - Get an employee rehire
* [deleteRehire](docs/sdks/employeeemployments/README.md#deleterehire) - Delete an employee rehire
* [getHistory](docs/sdks/employeeemployments/README.md#gethistory) - Get employment history for an employee

### [employeeForms](docs/sdks/employeeforms/README.md)

* [generateW2](docs/sdks/employeeforms/README.md#generatew2) - Generate a W2 form [DEMO]
* [getAll](docs/sdks/employeeforms/README.md#getall) - Get all employee forms
* [getForm](docs/sdks/employeeforms/README.md#getform) - Get an employee form
* [getPdf](docs/sdks/employeeforms/README.md#getpdf) - Get the employee form pdf
* [sign](docs/sdks/employeeforms/README.md#sign) - Sign an employee form

### [employeePaymentMethod](docs/sdks/employeepaymentmethod/README.md)

* [createBankAccount](docs/sdks/employeepaymentmethod/README.md#createbankaccount) - Create an employee bank account
* [deleteBankAccount](docs/sdks/employeepaymentmethod/README.md#deletebankaccount) - Delete an employee bank account
* [updateBankAccount](docs/sdks/employeepaymentmethod/README.md#updatebankaccount) - Update an employee bank account
* [get](docs/sdks/employeepaymentmethod/README.md#get) - Get an employee's payment method
* [update](docs/sdks/employeepaymentmethod/README.md#update) - Update an employee's payment method

### [employees](docs/sdks/employees/README.md)

* [create](docs/sdks/employees/README.md#create) - Create an employee
* [get](docs/sdks/employees/README.md#get) - Get employees of a company
* [createHistorical](docs/sdks/employees/README.md#createhistorical) - Create a historical employee
* [updateHistorical](docs/sdks/employees/README.md#updatehistorical) - Update a historical employee
* [retrieve](docs/sdks/employees/README.md#retrieve) - Get an employee
* [update](docs/sdks/employees/README.md#update) - Update an employee
* [delete](docs/sdks/employees/README.md#delete) - Delete an onboarding employee
* [getCustomFields](docs/sdks/employees/README.md#getcustomfields) - Get an employee's custom fields
* [updateOnboardingDocumentsConfig](docs/sdks/employees/README.md#updateonboardingdocumentsconfig) - Update an employee's onboarding documents config
* [getOnboardingStatus](docs/sdks/employees/README.md#getonboardingstatus) - Get the employee's onboarding status
* [updateOnboardingStatus](docs/sdks/employees/README.md#updateonboardingstatus) - Update the employee's onboarding status
* [getTimeOffActivities](docs/sdks/employees/README.md#gettimeoffactivities) - Get employee time off activities

### [employeeTaxSetup](docs/sdks/employeetaxsetup/README.md)

* [getFederalTaxes](docs/sdks/employeetaxsetup/README.md#getfederaltaxes) - Get an employee's federal taxes
* [updateFederalTaxes](docs/sdks/employeetaxsetup/README.md#updatefederaltaxes) - Update an employee's federal taxes
* [getStateTaxes](docs/sdks/employeetaxsetup/README.md#getstatetaxes) - Get an employee's state taxes
* [updateStateTaxes](docs/sdks/employeetaxsetup/README.md#updatestatetaxes) - Update an employee's state taxes

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Get all events

### [externalPayrolls](docs/sdks/externalpayrolls/README.md)

* [create](docs/sdks/externalpayrolls/README.md#create) - Create a new external payroll for a company
* [list](docs/sdks/externalpayrolls/README.md#list) - Get external payrolls for a company
* [get](docs/sdks/externalpayrolls/README.md#get) - Get an external payroll
* [delete](docs/sdks/externalpayrolls/README.md#delete) - Delete an external payroll
* [update](docs/sdks/externalpayrolls/README.md#update) - Update an external payroll
* [getTaxSuggestions](docs/sdks/externalpayrolls/README.md#gettaxsuggestions) - Get tax suggestions for an external payroll
* [getTaxLiabilities](docs/sdks/externalpayrolls/README.md#gettaxliabilities) - Get tax liabilities
* [updateTaxLiabilities](docs/sdks/externalpayrolls/README.md#updatetaxliabilities) - Update tax liabilities
* [finalizeTaxLiabilities](docs/sdks/externalpayrolls/README.md#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls

### [federalTaxDetails](docs/sdks/federaltaxdetails/README.md)

* [get](docs/sdks/federaltaxdetails/README.md#get) - Get Federal Tax Details
* [update](docs/sdks/federaltaxdetails/README.md#update) - Update Federal Tax Details

### [flows](docs/sdks/flows/README.md)

* [create](docs/sdks/flows/README.md#create) - Create a flow

### [garnishments](docs/sdks/garnishments/README.md)

* [create](docs/sdks/garnishments/README.md#create) - Create a garnishment
* [get](docs/sdks/garnishments/README.md#get) - Get garnishments for an employee
* [fetch](docs/sdks/garnishments/README.md#fetch) - Get a garnishment
* [update](docs/sdks/garnishments/README.md#update) - Update a garnishment
* [getChildSupport](docs/sdks/garnishments/README.md#getchildsupport) - Get child support garnishment data

### [generatedDocuments](docs/sdks/generateddocuments/README.md)

* [get](docs/sdks/generateddocuments/README.md#get) - Get a generated document


### [holidayPayPolicies](docs/sdks/holidaypaypolicies/README.md)

* [get](docs/sdks/holidaypaypolicies/README.md#get) - Get a company's holiday pay policy
* [create](docs/sdks/holidaypaypolicies/README.md#create) - Create a holiday pay policy for a company
* [update](docs/sdks/holidaypaypolicies/README.md#update) - Update a company's holiday pay policy
* [delete](docs/sdks/holidaypaypolicies/README.md#delete) - Delete a company's holiday pay policy
* [addEmployees](docs/sdks/holidaypaypolicies/README.md#addemployees) - Add employees to a company's holiday pay policy
* [removeEmployees](docs/sdks/holidaypaypolicies/README.md#removeemployees) - Remove employees from a company's holiday pay policy

### [i9Verification](docs/sdks/i9verification/README.md)

* [getAuthorization](docs/sdks/i9verification/README.md#getauthorization) - Get an employee's I-9 authorization
* [createOrUpdate](docs/sdks/i9verification/README.md#createorupdate) - Create or update an employee's I-9 authorization
* [getDocumentOptions](docs/sdks/i9verification/README.md#getdocumentoptions) - Get an employee's I-9 verification document options
* [getDocuments](docs/sdks/i9verification/README.md#getdocuments) - Get an employee's I-9 verification documents
* [createDocuments](docs/sdks/i9verification/README.md#createdocuments) - Create an employee's I-9 authorization verification documents
* [deleteDocument](docs/sdks/i9verification/README.md#deletedocument) - Delete an employee's I-9 verification document
* [employerSign](docs/sdks/i9verification/README.md#employersign) - Employer sign an employee's Form I-9

### [industrySelection](docs/sdks/industryselection/README.md)

* [get](docs/sdks/industryselection/README.md#get) - Get a company industry selection
* [update](docs/sdks/industryselection/README.md#update) - Update a company industry selection

### [introspection](docs/sdks/introspection/README.md)

* [getTokenInfo](docs/sdks/introspection/README.md#gettokeninfo) - Get info about the current access token
* [refreshAccessToken](docs/sdks/introspection/README.md#refreshaccesstoken) - Refresh access token

### [invoices](docs/sdks/invoices/README.md)

* [get](docs/sdks/invoices/README.md#get) - Retrieve invoicing data for companies

### [jobsAndCompensations](docs/sdks/jobsandcompensations/README.md)

* [createJob](docs/sdks/jobsandcompensations/README.md#createjob) - Create a job
* [getJobs](docs/sdks/jobsandcompensations/README.md#getjobs) - Get jobs for an employee
* [getJob](docs/sdks/jobsandcompensations/README.md#getjob) - Get a job
* [update](docs/sdks/jobsandcompensations/README.md#update) - Update a job
* [deleteJob](docs/sdks/jobsandcompensations/README.md#deletejob) - Delete an individual job
* [getCompensations](docs/sdks/jobsandcompensations/README.md#getcompensations) - Get compensations for a job
* [createCompensation](docs/sdks/jobsandcompensations/README.md#createcompensation) - Create a compensation
* [getCompensation](docs/sdks/jobsandcompensations/README.md#getcompensation) - Get a compensation
* [updateCompensation](docs/sdks/jobsandcompensations/README.md#updatecompensation) - Update a compensation
* [deleteCompensation](docs/sdks/jobsandcompensations/README.md#deletecompensation) - Delete a compensation

### [locations](docs/sdks/locations/README.md)

* [create](docs/sdks/locations/README.md#create) - Create a company location
* [getAll](docs/sdks/locations/README.md#getall) - Get company locations
* [get](docs/sdks/locations/README.md#get) - Get a location
* [update](docs/sdks/locations/README.md#update) - Update a location
* [getMinimumWages](docs/sdks/locations/README.md#getminimumwages) - Get minimum wages for a location

### [notifications](docs/sdks/notifications/README.md)

* [get](docs/sdks/notifications/README.md#get) - Get a notification's details

### [paymentConfigs](docs/sdks/paymentconfigs/README.md)

* [get](docs/sdks/paymentconfigs/README.md#get) - Get a company's payment configs
* [update](docs/sdks/paymentconfigs/README.md#update) - Update a company's payment configs

### [payrolls](docs/sdks/payrolls/README.md)

* [create](docs/sdks/payrolls/README.md#create) - Create an off-cycle payroll
* [getAll](docs/sdks/payrolls/README.md#getall) - Get all payrolls for a company
* [getReversals](docs/sdks/payrolls/README.md#getreversals) - Get approved payroll reversals
* [get](docs/sdks/payrolls/README.md#get) - Get a single payroll
* [update](docs/sdks/payrolls/README.md#update) - Update a payroll by ID
* [delete](docs/sdks/payrolls/README.md#delete) - Delete a payroll
* [prepareForUpdate](docs/sdks/payrolls/README.md#prepareforupdate) - Prepare a payroll for update
* [getReceipt](docs/sdks/payrolls/README.md#getreceipt) - Get a single payroll receipt
* [getBlockers](docs/sdks/payrolls/README.md#getblockers) - Get all payroll blockers for a company
* [skip](docs/sdks/payrolls/README.md#skip) - Skip a payroll
* [calculateGrossUp](docs/sdks/payrolls/README.md#calculategrossup) - Calculate gross up
* [calculate](docs/sdks/payrolls/README.md#calculate) - Calculate a payroll
* [submit](docs/sdks/payrolls/README.md#submit) - Submit payroll
* [cancel](docs/sdks/payrolls/README.md#cancel) - Cancel a payroll
* [getPayStub](docs/sdks/payrolls/README.md#getpaystub) - Get an employee pay stub (pdf)
* [getPayStubs](docs/sdks/payrolls/README.md#getpaystubs) - Get an employee's pay stubs
* [generatePrintableChecks](docs/sdks/payrolls/README.md#generateprintablechecks) - Generate printable payroll checks (pdf)

### [paySchedules](docs/sdks/payschedules/README.md)

* [create](docs/sdks/payschedules/README.md#create) - Create a new pay schedule
* [getForCompany](docs/sdks/payschedules/README.md#getforcompany) - Get the pay schedules for a company
* [preview](docs/sdks/payschedules/README.md#preview) - Preview pay schedule dates
* [get](docs/sdks/payschedules/README.md#get) - Get a pay schedule
* [update](docs/sdks/payschedules/README.md#update) - Update a pay schedule
* [list](docs/sdks/payschedules/README.md#list) - Get pay periods for a company
* [listUnprocessedTerminationPeriods](docs/sdks/payschedules/README.md#listunprocessedterminationperiods) - Get termination pay periods for a company
* [getAssignments](docs/sdks/payschedules/README.md#getassignments) - Get pay schedule assignments for a company
* [previewAssignment](docs/sdks/payschedules/README.md#previewassignment) - Preview pay schedule assignments for a company
* [assign](docs/sdks/payschedules/README.md#assign) - Assign pay schedules for a company

### [recoveryCases](docs/sdks/recoverycases/README.md)

* [getAll](docs/sdks/recoverycases/README.md#getall) - Get all recovery cases for a company
* [redebit](docs/sdks/recoverycases/README.md#redebit) - Initiate a redebit for a recovery case

### [reports](docs/sdks/reports/README.md)

* [create](docs/sdks/reports/README.md#create) - Create a custom report
* [get](docs/sdks/reports/README.md#get) - Get a report
* [getTemplate](docs/sdks/reports/README.md#gettemplate) - Get a report template

### [signatories](docs/sdks/signatories/README.md)

* [create](docs/sdks/signatories/README.md#create) - Create a signatory
* [get](docs/sdks/signatories/README.md#get) - Get all company signatories
* [invite](docs/sdks/signatories/README.md#invite) - Invite a signatory
* [update](docs/sdks/signatories/README.md#update) - Update a signatory
* [delete](docs/sdks/signatories/README.md#delete) - Delete a signatory

### [taxRequirements](docs/sdks/taxrequirements/README.md)

* [getByState](docs/sdks/taxrequirements/README.md#getbystate) - Get State Tax Requirements
* [update](docs/sdks/taxrequirements/README.md#update) - Update State Tax Requirements
* [getAll](docs/sdks/taxrequirements/README.md#getall) - Get All Tax Requirement States

### [timeOffPolicies](docs/sdks/timeoffpolicies/README.md)

* [calculateAccruingHours](docs/sdks/timeoffpolicies/README.md#calculateaccruinghours) - Calculate accruing time off hours
* [retrieve](docs/sdks/timeoffpolicies/README.md#retrieve) - Get a time off policy
* [update](docs/sdks/timeoffpolicies/README.md#update) - Update a time off policy
* [get](docs/sdks/timeoffpolicies/README.md#get) - Get all time off policies
* [create](docs/sdks/timeoffpolicies/README.md#create) - Create a time off policy
* [addEmployees](docs/sdks/timeoffpolicies/README.md#addemployees) - Add employees to a time off policy
* [removeEmployees](docs/sdks/timeoffpolicies/README.md#removeemployees) - Remove employees from a time off policy
* [updateBalance](docs/sdks/timeoffpolicies/README.md#updatebalance) - Update employee time off hour balances
* [deactivate](docs/sdks/timeoffpolicies/README.md#deactivate) - Deactivate a time off policy

### [webhooks](docs/sdks/webhooks/README.md)

* [createSubscription](docs/sdks/webhooks/README.md#createsubscription) - Create a webhook subscription
* [listSubscriptions](docs/sdks/webhooks/README.md#listsubscriptions) - List webhook subscriptions
* [updateSubscription](docs/sdks/webhooks/README.md#updatesubscription) - Update a webhook subscription
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook subscription
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook subscription
* [verifySubscription](docs/sdks/webhooks/README.md#verifysubscription) - Verify the webhook subscription
* [requestVerificationToken](docs/sdks/webhooks/README.md#requestverificationtoken) - Request the webhook subscription verification_token

### [wireInRequests](docs/sdks/wireinrequests/README.md)

* [get](docs/sdks/wireinrequests/README.md#get) - Get a single Wire In Request
* [submitRequest](docs/sdks/wireinrequests/README.md#submitrequest) - Submit a wire in request
* [getAll](docs/sdks/wireinrequests/README.md#getall) - Get all Wire In Requests for a company

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`achTransactionsGet`](docs/sdks/achtransactions/README.md#get) - Get all ACH transactions for a company
- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create a company bank account
- [`bankAccountsCreateFromProcessorToken`](docs/sdks/bankaccounts/README.md#createfromprocessortoken) - Create a bank account from a plaid processor token
- [`bankAccountsList`](docs/sdks/bankaccounts/README.md#list) - Get all company bank accounts
- [`bankAccountsVerify`](docs/sdks/bankaccounts/README.md#verify) - Verify a company bank account
- [`companiesAcceptTermsOfService`](docs/sdks/companies/README.md#accepttermsofservice) - Accept terms of service for a company user
- [`companiesBenefitsList`](docs/sdks/benefits/README.md#list) - Get benefits for a company
- [`companiesCreateAdmin`](docs/sdks/companies/README.md#createadmin) - Create an admin for the company
- [`companiesCreatePartnerManaged`](docs/sdks/companies/README.md#createpartnermanaged) - Create a partner managed company
- [`companiesFinishOnboarding`](docs/sdks/companies/README.md#finishonboarding) - Finish company onboarding
- [`companiesFormsList`](docs/sdks/forms/README.md#list) - Get all company forms
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get a company
- [`companiesGetAdmins`](docs/sdks/companies/README.md#getadmins) - Get all the admins at a company
- [`companiesGetCustomFields`](docs/sdks/companies/README.md#getcustomfields) - Get the custom fields of a company
- [`companiesGetOnboardingStatus`](docs/sdks/companies/README.md#getonboardingstatus) - Get the company's onboarding status
- [`companiesMigrate`](docs/sdks/companies/README.md#migrate) - Migrate company to embedded payroll
- [`companiesRetrieveTermsOfService`](docs/sdks/companies/README.md#retrievetermsofservice) - Retrieve terms of service status for a company user
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update a company
- [`companyAttachmentGetDownloadUrl`](docs/sdks/companyattachment/README.md#getdownloadurl) - Get a temporary url to download the Company Attachment file
- [`companyAttachmentsCreate`](docs/sdks/companyattachments/README.md#create) - Create Company Attachment and Upload File
- [`companyAttachmentsGetAll`](docs/sdks/companyattachments/README.md#getall) - Get List of Company Attachments
- [`companyAttachmentsGetDetails`](docs/sdks/companyattachments/README.md#getdetails) - Get Company Attachment Details
- [`companyBenefitsBulkUpdateEmployeeBenefits`](docs/sdks/companybenefits/README.md#bulkupdateemployeebenefits) - Bulk update employee benefits for a company benefit
- [`companyBenefitsCreate`](docs/sdks/companybenefits/README.md#create) - Create a company benefit
- [`companyBenefitsDelete`](docs/sdks/companybenefits/README.md#delete) - Delete a company benefit
- [`companyBenefitsGet`](docs/sdks/companybenefits/README.md#get) - Get a company benefit
- [`companyBenefitsGetAll`](docs/sdks/companybenefits/README.md#getall) - Get all benefits supported by Gusto
- [`companyBenefitsGetEmployeeBenefits`](docs/sdks/companybenefits/README.md#getemployeebenefits) - Get all employee benefits for a company benefit
- [`companyBenefitsGetRequirements`](docs/sdks/companybenefits/README.md#getrequirements) - Get benefit fields requirements by ID
- [`companyBenefitsGetSummary`](docs/sdks/companybenefits/README.md#getsummary) - Get company benefit summary by company benefit id.
- [`companyBenefitsGetSupportedBenefit`](docs/sdks/companybenefits/README.md#getsupportedbenefit) - Get a supported benefit by ID
- [`companyBenefitsUpdate`](docs/sdks/companybenefits/README.md#update) - Update a company benefit
- [`companyFormsGet`](docs/sdks/companyforms/README.md#get) - Get a company form
- [`companyFormsGetPdf`](docs/sdks/companyforms/README.md#getpdf) - Get a company form pdf
- [`companyFormsSign`](docs/sdks/companyforms/README.md#sign) - Sign a company form
- [`contractorDocumentsGet`](docs/sdks/contractordocuments/README.md#get) - Get a contractor document
- [`contractorDocumentsGetPdf`](docs/sdks/contractordocuments/README.md#getpdf) - Get the contractor document pdf
- [`contractorDocumentsList`](docs/sdks/contractordocuments/README.md#list) - Get all contractor documents
- [`contractorDocumentsSign`](docs/sdks/contractordocuments/README.md#sign) - Sign a contractor document
- [`contractorFormsGenerate1099`](docs/sdks/contractorforms/README.md#generate1099) - Generate a 1099 form [DEMO]
- [`contractorFormsGet`](docs/sdks/contractorforms/README.md#get) - Get a contractor form
- [`contractorFormsGetAll`](docs/sdks/contractorforms/README.md#getall) - Get all contractor forms
- [`contractorFormsGetPdf`](docs/sdks/contractorforms/README.md#getpdf) - Get the contractor form pdf
- [`contractorPaymentGroupsCreate`](docs/sdks/contractorpaymentgroups/README.md#create) - Create a contractor payment group
- [`contractorPaymentGroupsDelete`](docs/sdks/contractorpaymentgroups/README.md#delete) - Cancel a contractor payment group
- [`contractorPaymentGroupsFund`](docs/sdks/contractorpaymentgroups/README.md#fund) - Fund a contractor payment group [DEMO]
- [`contractorPaymentGroupsGet`](docs/sdks/contractorpaymentgroups/README.md#get) - Fetch a contractor payment group
- [`contractorPaymentGroupsList`](docs/sdks/contractorpaymentgroups/README.md#list) - Get contractor payment groups for a company
- [`contractorPaymentGroupsPreview`](docs/sdks/contractorpaymentgroups/README.md#preview) - Preview a contractor payment group
- [`contractorPaymentMethodCreateBankAccount`](docs/sdks/contractorpaymentmethod/README.md#createbankaccount) - Create a contractor bank account
- [`contractorPaymentMethodGet`](docs/sdks/contractorpaymentmethod/README.md#get) - Get a contractor's payment method
- [`contractorPaymentMethodGetBankAccounts`](docs/sdks/contractorpaymentmethod/README.md#getbankaccounts) - Get all contractor bank accounts
- [`contractorPaymentMethodUpdatePaymentMethod`](docs/sdks/contractorpaymentmethod/README.md#updatepaymentmethod) - Update a contractor's payment method
- [`contractorPaymentsCancel`](docs/sdks/contractorpayments/README.md#cancel) - Cancel a contractor payment
- [`contractorPaymentsCreate`](docs/sdks/contractorpayments/README.md#create) - Create a contractor payment
- [`contractorPaymentsFund`](docs/sdks/contractorpayments/README.md#fund) - Fund a contractor payment [DEMO]
- [`contractorPaymentsGet`](docs/sdks/contractorpayments/README.md#get) - Get a single contractor payment
- [`contractorPaymentsGetPayments`](docs/sdks/contractorpayments/README.md#getpayments) - Get contractor payments for a company
- [`contractorPaymentsGetReceipt`](docs/sdks/contractorpayments/README.md#getreceipt) - Get a single contractor payment receipt
- [`contractorsCreate`](docs/sdks/contractors/README.md#create) - Create a contractor
- [`contractorsDelete`](docs/sdks/contractors/README.md#delete) - Delete a contractor
- [`contractorsGet`](docs/sdks/contractors/README.md#get) - Get a contractor
- [`contractorsGetAddress`](docs/sdks/contractors/README.md#getaddress) - Get a contractor address
- [`contractorsGetOnboardingStatus`](docs/sdks/contractors/README.md#getonboardingstatus) - Get the contractor's onboarding status
- [`contractorsList`](docs/sdks/contractors/README.md#list) - Get contractors of a company
- [`contractorsUpdate`](docs/sdks/contractors/README.md#update) - Update a contractor
- [`contractorsUpdateAddress`](docs/sdks/contractors/README.md#updateaddress) - Update a contractor's address
- [`contractorsUpdateOnboardingStatus`](docs/sdks/contractors/README.md#updateonboardingstatus) - Change the contractor's onboarding status
- [`departmentsAddPeople`](docs/sdks/departments/README.md#addpeople) - Add people to a department
- [`departmentsCreate`](docs/sdks/departments/README.md#create) - Create a department
- [`departmentsDelete`](docs/sdks/departments/README.md#delete) - Delete a department
- [`departmentsGet`](docs/sdks/departments/README.md#get) - Get a department
- [`departmentsList`](docs/sdks/departments/README.md#list) - Get all departments of a company
- [`departmentsRemovePeople`](docs/sdks/departments/README.md#removepeople) - Remove people from a department
- [`departmentsUpdate`](docs/sdks/departments/README.md#update) - Update a department
- [`earningTypesCreate`](docs/sdks/earningtypes/README.md#create) - Create a custom earning type
- [`earningTypesDeactivate`](docs/sdks/earningtypes/README.md#deactivate) - Deactivate an earning type
- [`earningTypesGetAll`](docs/sdks/earningtypes/README.md#getall) - Get all earning types for a company
- [`earningTypesUpdate`](docs/sdks/earningtypes/README.md#update) - Update an earning type
- [`employeeAddressesCreate`](docs/sdks/employeeaddresses/README.md#create) - Create an employee's home address
- [`employeeAddressesDelete`](docs/sdks/employeeaddresses/README.md#delete) - Delete an employee's work address
- [`employeeAddressesGet`](docs/sdks/employeeaddresses/README.md#get) - Get an employee's work addresses
- [`employeeAddressesGetHomeAddress`](docs/sdks/employeeaddresses/README.md#gethomeaddress) - Get an employee's home address
- [`employeeAddressesGetHomeAddresses`](docs/sdks/employeeaddresses/README.md#gethomeaddresses) - Get an employee's home addresses
- [`employeeAddressesGetWorkAddress`](docs/sdks/employeeaddresses/README.md#getworkaddress) - Get an employee work address
- [`employeeAddressesRemoveHomeAddress`](docs/sdks/employeeaddresses/README.md#removehomeaddress) - Delete an employee's home address
- [`employeeAddressesUpdateHomeAddress`](docs/sdks/employeeaddresses/README.md#updatehomeaddress) - Update an employee's home address
- [`employeeAddressesUpdateWorkAddress`](docs/sdks/employeeaddresses/README.md#updateworkaddress) - Update an employee work address
- [`employeeAddressesWorkAddressesCreate`](docs/sdks/workaddresses/README.md#create) - Create an employee work address
- [`employeeBenefitsCreateBenefit`](docs/sdks/employeebenefits/README.md#createbenefit) - Create an employee benefit
- [`employeeBenefitsCreateYtdAmountsFromDifferentCompany`](docs/sdks/employeebenefits/README.md#createytdamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
- [`employeeBenefitsDelete`](docs/sdks/employeebenefits/README.md#delete) - Delete an employee benefit
- [`employeeBenefitsGet`](docs/sdks/employeebenefits/README.md#get) - Get an employee benefit
- [`employeeBenefitsGetAll`](docs/sdks/employeebenefits/README.md#getall) - Get all benefits for an employee
- [`employeeBenefitsUpdate`](docs/sdks/employeebenefits/README.md#update) - Update an employee benefit
- [`employeeEmploymentsCreateRehire`](docs/sdks/employeeemployments/README.md#createrehire) - Create an employee rehire
- [`employeeEmploymentsCreateTermination`](docs/sdks/employeeemployments/README.md#createtermination) - Create an employee termination
- [`employeeEmploymentsDeleteRehire`](docs/sdks/employeeemployments/README.md#deleterehire) - Delete an employee rehire
- [`employeeEmploymentsDeleteTermination`](docs/sdks/employeeemployments/README.md#deletetermination) - Delete an employee termination
- [`employeeEmploymentsGetHistory`](docs/sdks/employeeemployments/README.md#gethistory) - Get employment history for an employee
- [`employeeEmploymentsGetRehire`](docs/sdks/employeeemployments/README.md#getrehire) - Get an employee rehire
- [`employeeEmploymentsGetTermination`](docs/sdks/employeeemployments/README.md#gettermination) - Get terminations for an employee
- [`employeeEmploymentsUpdateRehire`](docs/sdks/employeeemployments/README.md#updaterehire) - Update an employee rehire
- [`employeeEmploymentsUpdateTermination`](docs/sdks/employeeemployments/README.md#updatetermination) - Update an employee termination
- [`employeeFormsGenerateW2`](docs/sdks/employeeforms/README.md#generatew2) - Generate a W2 form [DEMO]
- [`employeeFormsGetAll`](docs/sdks/employeeforms/README.md#getall) - Get all employee forms
- [`employeeFormsGetForm`](docs/sdks/employeeforms/README.md#getform) - Get an employee form
- [`employeeFormsGetPdf`](docs/sdks/employeeforms/README.md#getpdf) - Get the employee form pdf
- [`employeeFormsSign`](docs/sdks/employeeforms/README.md#sign) - Sign an employee form
- [`employeePaymentMethodCreateBankAccount`](docs/sdks/employeepaymentmethod/README.md#createbankaccount) - Create an employee bank account
- [`employeePaymentMethodDeleteBankAccount`](docs/sdks/employeepaymentmethod/README.md#deletebankaccount) - Delete an employee bank account
- [`employeePaymentMethodGet`](docs/sdks/employeepaymentmethod/README.md#get) - Get an employee's payment method
- [`employeePaymentMethodUpdate`](docs/sdks/employeepaymentmethod/README.md#update) - Update an employee's payment method
- [`employeePaymentMethodUpdateBankAccount`](docs/sdks/employeepaymentmethod/README.md#updatebankaccount) - Update an employee bank account
- [`employeesCreate`](docs/sdks/employees/README.md#create) - Create an employee
- [`employeesCreateHistorical`](docs/sdks/employees/README.md#createhistorical) - Create a historical employee
- [`employeesDelete`](docs/sdks/employees/README.md#delete) - Delete an onboarding employee
- [`employeesGet`](docs/sdks/employees/README.md#get) - Get employees of a company
- [`employeesGetCustomFields`](docs/sdks/employees/README.md#getcustomfields) - Get an employee's custom fields
- [`employeesGetOnboardingStatus`](docs/sdks/employees/README.md#getonboardingstatus) - Get the employee's onboarding status
- [`employeesGetTimeOffActivities`](docs/sdks/employees/README.md#gettimeoffactivities) - Get employee time off activities
- [`employeesRetrieve`](docs/sdks/employees/README.md#retrieve) - Get an employee
- [`employeesUpdate`](docs/sdks/employees/README.md#update) - Update an employee
- [`employeesUpdateHistorical`](docs/sdks/employees/README.md#updatehistorical) - Update a historical employee
- [`employeesUpdateOnboardingDocumentsConfig`](docs/sdks/employees/README.md#updateonboardingdocumentsconfig) - Update an employee's onboarding documents config
- [`employeesUpdateOnboardingStatus`](docs/sdks/employees/README.md#updateonboardingstatus) - Update the employee's onboarding status
- [`employeeTaxSetupGetFederalTaxes`](docs/sdks/employeetaxsetup/README.md#getfederaltaxes) - Get an employee's federal taxes
- [`employeeTaxSetupGetStateTaxes`](docs/sdks/employeetaxsetup/README.md#getstatetaxes) - Get an employee's state taxes
- [`employeeTaxSetupUpdateFederalTaxes`](docs/sdks/employeetaxsetup/README.md#updatefederaltaxes) - Update an employee's federal taxes
- [`employeeTaxSetupUpdateStateTaxes`](docs/sdks/employeetaxsetup/README.md#updatestatetaxes) - Update an employee's state taxes
- [`eventsList`](docs/sdks/events/README.md#list) - Get all events
- [`externalPayrollsCreate`](docs/sdks/externalpayrolls/README.md#create) - Create a new external payroll for a company
- [`externalPayrollsDelete`](docs/sdks/externalpayrolls/README.md#delete) - Delete an external payroll
- [`externalPayrollsFinalizeTaxLiabilities`](docs/sdks/externalpayrolls/README.md#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls
- [`externalPayrollsGet`](docs/sdks/externalpayrolls/README.md#get) - Get an external payroll
- [`externalPayrollsGetTaxLiabilities`](docs/sdks/externalpayrolls/README.md#gettaxliabilities) - Get tax liabilities
- [`externalPayrollsGetTaxSuggestions`](docs/sdks/externalpayrolls/README.md#gettaxsuggestions) - Get tax suggestions for an external payroll
- [`externalPayrollsList`](docs/sdks/externalpayrolls/README.md#list) - Get external payrolls for a company
- [`externalPayrollsUpdate`](docs/sdks/externalpayrolls/README.md#update) - Update an external payroll
- [`externalPayrollsUpdateTaxLiabilities`](docs/sdks/externalpayrolls/README.md#updatetaxliabilities) - Update tax liabilities
- [`federalTaxDetailsGet`](docs/sdks/federaltaxdetails/README.md#get) - Get Federal Tax Details
- [`federalTaxDetailsUpdate`](docs/sdks/federaltaxdetails/README.md#update) - Update Federal Tax Details
- [`flowsCreate`](docs/sdks/flows/README.md#create) - Create a flow
- [`garnishmentsCreate`](docs/sdks/garnishments/README.md#create) - Create a garnishment
- [`garnishmentsFetch`](docs/sdks/garnishments/README.md#fetch) - Get a garnishment
- [`garnishmentsGet`](docs/sdks/garnishments/README.md#get) - Get garnishments for an employee
- [`garnishmentsGetChildSupport`](docs/sdks/garnishments/README.md#getchildsupport) - Get child support garnishment data
- [`garnishmentsUpdate`](docs/sdks/garnishments/README.md#update) - Update a garnishment
- [`generatedDocumentsGet`](docs/sdks/generateddocuments/README.md#get) - Get a generated document
- [`holidayPayPoliciesAddEmployees`](docs/sdks/holidaypaypolicies/README.md#addemployees) - Add employees to a company's holiday pay policy
- [`holidayPayPoliciesCreate`](docs/sdks/holidaypaypolicies/README.md#create) - Create a holiday pay policy for a company
- [`holidayPayPoliciesDelete`](docs/sdks/holidaypaypolicies/README.md#delete) - Delete a company's holiday pay policy
- [`holidayPayPoliciesGet`](docs/sdks/holidaypaypolicies/README.md#get) - Get a company's holiday pay policy
- [`holidayPayPoliciesRemoveEmployees`](docs/sdks/holidaypaypolicies/README.md#removeemployees) - Remove employees from a company's holiday pay policy
- [`holidayPayPoliciesUpdate`](docs/sdks/holidaypaypolicies/README.md#update) - Update a company's holiday pay policy
- [`i9VerificationCreateDocuments`](docs/sdks/i9verification/README.md#createdocuments) - Create an employee's I-9 authorization verification documents
- [`i9VerificationCreateOrUpdate`](docs/sdks/i9verification/README.md#createorupdate) - Create or update an employee's I-9 authorization
- [`i9VerificationDeleteDocument`](docs/sdks/i9verification/README.md#deletedocument) - Delete an employee's I-9 verification document
- [`i9VerificationEmployerSign`](docs/sdks/i9verification/README.md#employersign) - Employer sign an employee's Form I-9
- [`i9VerificationGetAuthorization`](docs/sdks/i9verification/README.md#getauthorization) - Get an employee's I-9 authorization
- [`i9VerificationGetDocumentOptions`](docs/sdks/i9verification/README.md#getdocumentoptions) - Get an employee's I-9 verification document options
- [`i9VerificationGetDocuments`](docs/sdks/i9verification/README.md#getdocuments) - Get an employee's I-9 verification documents
- [`industrySelectionGet`](docs/sdks/industryselection/README.md#get) - Get a company industry selection
- [`industrySelectionUpdate`](docs/sdks/industryselection/README.md#update) - Update a company industry selection
- [`introspectionGetTokenInfo`](docs/sdks/introspection/README.md#gettokeninfo) - Get info about the current access token
- [`introspectionRefreshAccessToken`](docs/sdks/introspection/README.md#refreshaccesstoken) - Refresh access token
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Retrieve invoicing data for companies
- [`jobsAndCompensationsCreateCompensation`](docs/sdks/jobsandcompensations/README.md#createcompensation) - Create a compensation
- [`jobsAndCompensationsCreateJob`](docs/sdks/jobsandcompensations/README.md#createjob) - Create a job
- [`jobsAndCompensationsDeleteCompensation`](docs/sdks/jobsandcompensations/README.md#deletecompensation) - Delete a compensation
- [`jobsAndCompensationsDeleteJob`](docs/sdks/jobsandcompensations/README.md#deletejob) - Delete an individual job
- [`jobsAndCompensationsGetCompensation`](docs/sdks/jobsandcompensations/README.md#getcompensation) - Get a compensation
- [`jobsAndCompensationsGetCompensations`](docs/sdks/jobsandcompensations/README.md#getcompensations) - Get compensations for a job
- [`jobsAndCompensationsGetJob`](docs/sdks/jobsandcompensations/README.md#getjob) - Get a job
- [`jobsAndCompensationsGetJobs`](docs/sdks/jobsandcompensations/README.md#getjobs) - Get jobs for an employee
- [`jobsAndCompensationsUpdate`](docs/sdks/jobsandcompensations/README.md#update) - Update a job
- [`jobsAndCompensationsUpdateCompensation`](docs/sdks/jobsandcompensations/README.md#updatecompensation) - Update a compensation
- [`locationsCreate`](docs/sdks/locations/README.md#create) - Create a company location
- [`locationsGet`](docs/sdks/locations/README.md#get) - Get a location
- [`locationsGetAll`](docs/sdks/locations/README.md#getall) - Get company locations
- [`locationsGetMinimumWages`](docs/sdks/locations/README.md#getminimumwages) - Get minimum wages for a location
- [`locationsUpdate`](docs/sdks/locations/README.md#update) - Update a location
- [`notificationsGet`](docs/sdks/notifications/README.md#get) - Get a notification's details
- [`paymentConfigsGet`](docs/sdks/paymentconfigs/README.md#get) - Get a company's payment configs
- [`paymentConfigsUpdate`](docs/sdks/paymentconfigs/README.md#update) - Update a company's payment configs
- [`payrollsCalculate`](docs/sdks/payrolls/README.md#calculate) - Calculate a payroll
- [`payrollsCalculateGrossUp`](docs/sdks/payrolls/README.md#calculategrossup) - Calculate gross up
- [`payrollsCancel`](docs/sdks/payrolls/README.md#cancel) - Cancel a payroll
- [`payrollsCreate`](docs/sdks/payrolls/README.md#create) - Create an off-cycle payroll
- [`payrollsDelete`](docs/sdks/payrolls/README.md#delete) - Delete a payroll
- [`payrollsGeneratePrintableChecks`](docs/sdks/payrolls/README.md#generateprintablechecks) - Generate printable payroll checks (pdf)
- [`payrollsGet`](docs/sdks/payrolls/README.md#get) - Get a single payroll
- [`payrollsGetAll`](docs/sdks/payrolls/README.md#getall) - Get all payrolls for a company
- [`payrollsGetBlockers`](docs/sdks/payrolls/README.md#getblockers) - Get all payroll blockers for a company
- [`payrollsGetPayStub`](docs/sdks/payrolls/README.md#getpaystub) - Get an employee pay stub (pdf)
- [`payrollsGetPayStubs`](docs/sdks/payrolls/README.md#getpaystubs) - Get an employee's pay stubs
- [`payrollsGetReceipt`](docs/sdks/payrolls/README.md#getreceipt) - Get a single payroll receipt
- [`payrollsGetReversals`](docs/sdks/payrolls/README.md#getreversals) - Get approved payroll reversals
- [`payrollsPrepareForUpdate`](docs/sdks/payrolls/README.md#prepareforupdate) - Prepare a payroll for update
- [`payrollsSkip`](docs/sdks/payrolls/README.md#skip) - Skip a payroll
- [`payrollsSubmit`](docs/sdks/payrolls/README.md#submit) - Submit payroll
- [`payrollsUpdate`](docs/sdks/payrolls/README.md#update) - Update a payroll by ID
- [`paySchedulesAssign`](docs/sdks/payschedules/README.md#assign) - Assign pay schedules for a company
- [`paySchedulesCreate`](docs/sdks/payschedules/README.md#create) - Create a new pay schedule
- [`paySchedulesGet`](docs/sdks/payschedules/README.md#get) - Get a pay schedule
- [`paySchedulesGetAssignments`](docs/sdks/payschedules/README.md#getassignments) - Get pay schedule assignments for a company
- [`paySchedulesGetForCompany`](docs/sdks/payschedules/README.md#getforcompany) - Get the pay schedules for a company
- [`paySchedulesList`](docs/sdks/payschedules/README.md#list) - Get pay periods for a company
- [`paySchedulesListUnprocessedTerminationPeriods`](docs/sdks/payschedules/README.md#listunprocessedterminationperiods) - Get termination pay periods for a company
- [`paySchedulesPreview`](docs/sdks/payschedules/README.md#preview) - Preview pay schedule dates
- [`paySchedulesPreviewAssignment`](docs/sdks/payschedules/README.md#previewassignment) - Preview pay schedule assignments for a company
- [`paySchedulesUpdate`](docs/sdks/payschedules/README.md#update) - Update a pay schedule
- [`recoveryCasesGetAll`](docs/sdks/recoverycases/README.md#getall) - Get all recovery cases for a company
- [`recoveryCasesRedebit`](docs/sdks/recoverycases/README.md#redebit) - Initiate a redebit for a recovery case
- [`reportsCreate`](docs/sdks/reports/README.md#create) - Create a custom report
- [`reportsGet`](docs/sdks/reports/README.md#get) - Get a report
- [`reportsGetTemplate`](docs/sdks/reports/README.md#gettemplate) - Get a report template
- [`signatoriesCreate`](docs/sdks/signatories/README.md#create) - Create a signatory
- [`signatoriesDelete`](docs/sdks/signatories/README.md#delete) - Delete a signatory
- [`signatoriesGet`](docs/sdks/signatories/README.md#get) - Get all company signatories
- [`signatoriesInvite`](docs/sdks/signatories/README.md#invite) - Invite a signatory
- [`signatoriesUpdate`](docs/sdks/signatories/README.md#update) - Update a signatory
- [`taxRequirementsGetAll`](docs/sdks/taxrequirements/README.md#getall) - Get All Tax Requirement States
- [`taxRequirementsGetByState`](docs/sdks/taxrequirements/README.md#getbystate) - Get State Tax Requirements
- [`taxRequirementsUpdate`](docs/sdks/taxrequirements/README.md#update) - Update State Tax Requirements
- [`timeOffPoliciesAddEmployees`](docs/sdks/timeoffpolicies/README.md#addemployees) - Add employees to a time off policy
- [`timeOffPoliciesCalculateAccruingHours`](docs/sdks/timeoffpolicies/README.md#calculateaccruinghours) - Calculate accruing time off hours
- [`timeOffPoliciesCreate`](docs/sdks/timeoffpolicies/README.md#create) - Create a time off policy
- [`timeOffPoliciesDeactivate`](docs/sdks/timeoffpolicies/README.md#deactivate) - Deactivate a time off policy
- [`timeOffPoliciesGet`](docs/sdks/timeoffpolicies/README.md#get) - Get all time off policies
- [`timeOffPoliciesRemoveEmployees`](docs/sdks/timeoffpolicies/README.md#removeemployees) - Remove employees from a time off policy
- [`timeOffPoliciesRetrieve`](docs/sdks/timeoffpolicies/README.md#retrieve) - Get a time off policy
- [`timeOffPoliciesUpdate`](docs/sdks/timeoffpolicies/README.md#update) - Update a time off policy
- [`timeOffPoliciesUpdateBalance`](docs/sdks/timeoffpolicies/README.md#updatebalance) - Update employee time off hour balances
- [`webhooksCreateSubscription`](docs/sdks/webhooks/README.md#createsubscription) - Create a webhook subscription
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook subscription
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook subscription
- [`webhooksListSubscriptions`](docs/sdks/webhooks/README.md#listsubscriptions) - List webhook subscriptions
- [`webhooksRequestVerificationToken`](docs/sdks/webhooks/README.md#requestverificationtoken) - Request the webhook subscription verification_token
- [`webhooksUpdateSubscription`](docs/sdks/webhooks/README.md#updatesubscription) - Update a webhook subscription
- [`webhooksVerifySubscription`](docs/sdks/webhooks/README.md#verifysubscription) - Verify the webhook subscription
- [`wireInRequestsGet`](docs/sdks/wireinrequests/README.md#get) - Get a single Wire In Request
- [`wireInRequestsGetAll`](docs/sdks/wireinrequests/README.md#getall) - Get all Wire In Requests for a company
- [`wireInRequestsSubmitRequest`](docs/sdks/wireinrequests/README.md#submitrequest) - Submit a wire in request

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyAttachments.create({
    companyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getTokenInfo({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getTokenInfo({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `createPartnerManaged` method may throw the following errors:

| Error Type                            | Status Code | Content Type     |
| ------------------------------------- | ----------- | ---------------- |
| errors.UnprocessableEntityErrorObject | 422         | application/json |
| errors.APIError                       | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { GustoEmbedded } from "gusto-embedded";
import {
  SDKValidationError,
  UnprocessableEntityErrorObject,
} from "gusto-embedded/models/errors";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  let result;
  try {
    result = await gustoEmbedded.companies.createPartnerManaged({
      systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
    }, {
      requestBody: {
        user: {
          firstName: "Frank",
          lastName: "Ocean",
          email: "frank@example.com",
          phone: "2345558899",
        },
        company: {
          name: "Frank's Ocean, LLC",
          tradeName: "Frank’s Ocean",
          ein: "123456789",
          contractorOnly: false,
        },
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof UnprocessableEntityErrorObject): {
        // Handle err.data$: UnprocessableEntityErrorObjectData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  serverURL: "https://api.gusto-demo.com",
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getTokenInfo({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { GustoEmbedded } from "gusto-embedded";
import { HTTPClient } from "gusto-embedded/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new GustoEmbedded({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { GustoEmbedded } from "gusto-embedded";

const sdk = new GustoEmbedded({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GUSTOEMBEDDED_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=gusto-embedded&utm_campaign=typescript)
