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
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
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

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @gusto/embedded-api
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @gusto/embedded-api
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @gusto/embedded-api
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @gusto/embedded-api
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@gusto/embedded-api")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

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
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

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

* [getAll](docs/sdks/achtransactions/README.md#getall) - Get all ACH transactions for a company

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [get](docs/sdks/bankaccounts/README.md#get) - Get all company bank accounts
* [create](docs/sdks/bankaccounts/README.md#create) - Create a company bank account
* [verify](docs/sdks/bankaccounts/README.md#verify) - Verify a company bank account
* [createFromPlaidToken](docs/sdks/bankaccounts/README.md#createfromplaidtoken) - Create a bank account from a plaid processor token
* [deleteV1CompaniesCompanyIdBankAccountsBankAccountId](docs/sdks/bankaccounts/README.md#deletev1companiescompanyidbankaccountsbankaccountid) - Delete a company bank account

### [companies](docs/sdks/companies/README.md)

* [createPartnerManaged](docs/sdks/companies/README.md#createpartnermanaged) - Create a partner managed company
* [get](docs/sdks/companies/README.md#get) - Get a company
* [update](docs/sdks/companies/README.md#update) - Update a company
* [migrate](docs/sdks/companies/README.md#migrate) - Migrate company to embedded payroll
* [acceptTermsOfService](docs/sdks/companies/README.md#accepttermsofservice) - Accept terms of service for a company user
* [retrieveTermsOfService](docs/sdks/companies/README.md#retrievetermsofservice) - Retrieve terms of service status for a company user
* [createAdmin](docs/sdks/companies/README.md#createadmin) - Create an admin for the company
* [listAdmins](docs/sdks/companies/README.md#listadmins) - Get all the admins at a company
* [getOnboardingStatus](docs/sdks/companies/README.md#getonboardingstatus) - Get the company's onboarding status
* [finishOnboarding](docs/sdks/companies/README.md#finishonboarding) - Finish company onboarding
* [getCustomFields](docs/sdks/companies/README.md#getcustomfields) - Get the custom fields of a company

#### [companies.suspensions](docs/sdks/suspensions/README.md)

* [get](docs/sdks/suspensions/README.md#get) - Get suspensions for this company
* [suspend](docs/sdks/suspensions/README.md#suspend) - Suspend a company's account

### [companyAttachment](docs/sdks/companyattachment/README.md)

* [getDownloadUrl](docs/sdks/companyattachment/README.md#getdownloadurl) - Get a temporary url to download the Company Attachment file

### [companyAttachments](docs/sdks/companyattachments/README.md)

* [getDetails](docs/sdks/companyattachments/README.md#getdetails) - Get Company Attachment Details
* [getList](docs/sdks/companyattachments/README.md#getlist) - Get List of Company Attachments
* [create](docs/sdks/companyattachments/README.md#create) - Create Company Attachment and Upload File

### [companyBenefits](docs/sdks/companybenefits/README.md)

* [create](docs/sdks/companybenefits/README.md#create) - Create a company benefit
* [list](docs/sdks/companybenefits/README.md#list) - Get benefits for a company
* [get](docs/sdks/companybenefits/README.md#get) - Get a company benefit
* [update](docs/sdks/companybenefits/README.md#update) - Update a company benefit
* [delete](docs/sdks/companybenefits/README.md#delete) - Delete a company benefit
* [getAll](docs/sdks/companybenefits/README.md#getall) - Get all benefits supported by Gusto
* [getSupported](docs/sdks/companybenefits/README.md#getsupported) - Get a supported benefit by ID
* [getSummary](docs/sdks/companybenefits/README.md#getsummary) - Get company benefit summary by company benefit id.
* [getEmployeeBenefits](docs/sdks/companybenefits/README.md#getemployeebenefits) - Get all employee benefits for a company benefit
* [updateEmployeeBenefits](docs/sdks/companybenefits/README.md#updateemployeebenefits) - Bulk update employee benefits for a company benefit
* [getRequirements](docs/sdks/companybenefits/README.md#getrequirements) - Get benefit fields requirements by ID
* [getV1CompanyBenefitsCompanyBenefitIdContributionExclusions](docs/sdks/companybenefits/README.md#getv1companybenefitscompanybenefitidcontributionexclusions) - Get contribution exclusions for a company benefit
* [putV1CompanyBenefitsCompanyBenefitIdContributionExclusions](docs/sdks/companybenefits/README.md#putv1companybenefitscompanybenefitidcontributionexclusions) - Update contribution exclusions for a company benefit

### [companyForms](docs/sdks/companyforms/README.md)

* [getAll](docs/sdks/companyforms/README.md#getall) - Get all company forms
* [get](docs/sdks/companyforms/README.md#get) - Get a company form
* [getPdf](docs/sdks/companyforms/README.md#getpdf) - Get a company form pdf
* [sign](docs/sdks/companyforms/README.md#sign) - Sign a company form

### [contractorDocuments](docs/sdks/contractordocuments/README.md)

* [getAll](docs/sdks/contractordocuments/README.md#getall) - Get all contractor documents
* [get](docs/sdks/contractordocuments/README.md#get) - Get a contractor document
* [getPdf](docs/sdks/contractordocuments/README.md#getpdf) - Get the contractor document pdf
* [sign](docs/sdks/contractordocuments/README.md#sign) - Sign a contractor document

### [contractorForms](docs/sdks/contractorforms/README.md)

* [list](docs/sdks/contractorforms/README.md#list) - Get all contractor forms
* [get](docs/sdks/contractorforms/README.md#get) - Get a contractor form
* [getPdf](docs/sdks/contractorforms/README.md#getpdf) - Get the contractor form pdf
* [generate1099](docs/sdks/contractorforms/README.md#generate1099) - Generate a 1099 form [DEMO]

### [contractorPaymentGroups](docs/sdks/contractorpaymentgroups/README.md)

* [getList](docs/sdks/contractorpaymentgroups/README.md#getlist) - Get contractor payment groups for a company
* [create](docs/sdks/contractorpaymentgroups/README.md#create) - Create a contractor payment group
* [preview](docs/sdks/contractorpaymentgroups/README.md#preview) - Preview a contractor payment group
* [get](docs/sdks/contractorpaymentgroups/README.md#get) - Get a contractor payment group
* [delete](docs/sdks/contractorpaymentgroups/README.md#delete) - Cancel a contractor payment group
* [fund](docs/sdks/contractorpaymentgroups/README.md#fund) - Fund a contractor payment group [DEMO]
* [getV1ContractorPaymentGroupsIdPartnerDisbursements](docs/sdks/contractorpaymentgroups/README.md#getv1contractorpaymentgroupsidpartnerdisbursements) - Get partner disbursements for a contractor payment group
* [patchV1ContractorPaymentGroupsIdPartnerDisbursements](docs/sdks/contractorpaymentgroups/README.md#patchv1contractorpaymentgroupsidpartnerdisbursements) - Update partner disbursements for a contractor payment group

### [contractorPaymentMethod](docs/sdks/contractorpaymentmethod/README.md)

* [getBankAccounts](docs/sdks/contractorpaymentmethod/README.md#getbankaccounts) - Get all contractor bank accounts
* [get](docs/sdks/contractorpaymentmethod/README.md#get) - Get a contractor's payment method
* [update](docs/sdks/contractorpaymentmethod/README.md#update) - Update a contractor's payment method

### [contractorPaymentMethods](docs/sdks/contractorpaymentmethods/README.md)

* [createBankAccount](docs/sdks/contractorpaymentmethods/README.md#createbankaccount) - Create a contractor bank account

### [contractorPayments](docs/sdks/contractorpayments/README.md)

* [getReceipt](docs/sdks/contractorpayments/README.md#getreceipt) - Get a single contractor payment receipt
* [fund](docs/sdks/contractorpayments/README.md#fund) - Fund a contractor payment [DEMO]
* [create](docs/sdks/contractorpayments/README.md#create) - Create a contractor payment
* [list](docs/sdks/contractorpayments/README.md#list) - Get contractor payments for a company
* [get](docs/sdks/contractorpayments/README.md#get) - Get a single contractor payment
* [delete](docs/sdks/contractorpayments/README.md#delete) - Cancel a contractor payment

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
* [getV1CompaniesCompanyIdContractorsPaymentDetails](docs/sdks/contractors/README.md#getv1companiescompanyidcontractorspaymentdetails) - List contractor payment details

### [departments](docs/sdks/departments/README.md)

* [create](docs/sdks/departments/README.md#create) - Create a department
* [getAll](docs/sdks/departments/README.md#getall) - Get all departments of a company
* [get](docs/sdks/departments/README.md#get) - Get a department
* [update](docs/sdks/departments/README.md#update) - Update a department
* [delete](docs/sdks/departments/README.md#delete) - Delete a department
* [addPeople](docs/sdks/departments/README.md#addpeople) - Add people to a department
* [removePeople](docs/sdks/departments/README.md#removepeople) - Remove people from a department

### [earningTypes](docs/sdks/earningtypes/README.md)

* [create](docs/sdks/earningtypes/README.md#create) - Create a custom earning type
* [list](docs/sdks/earningtypes/README.md#list) - Get all earning types for a company
* [update](docs/sdks/earningtypes/README.md#update) - Update an earning type
* [delete](docs/sdks/earningtypes/README.md#delete) - Deactivate an earning type

### [employeeAddresses](docs/sdks/employeeaddresses/README.md)

* [get](docs/sdks/employeeaddresses/README.md#get) - Get an employee's home addresses
* [create](docs/sdks/employeeaddresses/README.md#create) - Create an employee's home address
* [retrieveHomeAddress](docs/sdks/employeeaddresses/README.md#retrievehomeaddress) - Get an employee's home address
* [update](docs/sdks/employeeaddresses/README.md#update) - Update an employee's home address
* [delete](docs/sdks/employeeaddresses/README.md#delete) - Delete an employee's home address
* [getWorkAddresses](docs/sdks/employeeaddresses/README.md#getworkaddresses) - Get an employee's work addresses
* [createWorkAddress](docs/sdks/employeeaddresses/README.md#createworkaddress) - Create an employee work address
* [retrieveWorkAddress](docs/sdks/employeeaddresses/README.md#retrieveworkaddress) - Get an employee work address
* [updateWorkAddress](docs/sdks/employeeaddresses/README.md#updateworkaddress) - Update an employee work address
* [deleteWorkAddress](docs/sdks/employeeaddresses/README.md#deleteworkaddress) - Delete an employee's work address

### [employeeBenefits](docs/sdks/employeebenefits/README.md)

* [create](docs/sdks/employeebenefits/README.md#create) - Create an employee benefit
* [get](docs/sdks/employeebenefits/README.md#get) - Get all benefits for an employee
* [retrieve](docs/sdks/employeebenefits/README.md#retrieve) - Get an employee benefit
* [update](docs/sdks/employeebenefits/README.md#update) - Update an employee benefit
* [delete](docs/sdks/employeebenefits/README.md#delete) - Delete an employee benefit
* [getYtdBenefitAmountsFromDifferentCompany](docs/sdks/employeebenefits/README.md#getytdbenefitamountsfromdifferentcompany) - Get year-to-date benefit amounts from a different company
* [createYtdBenefitAmountsFromDifferentCompany](docs/sdks/employeebenefits/README.md#createytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company

### [employeeEmployments](docs/sdks/employeeemployments/README.md)

* [createTermination](docs/sdks/employeeemployments/README.md#createtermination) - Create an employee termination
* [getTerminations](docs/sdks/employeeemployments/README.md#getterminations) - Get terminations for an employee
* [deleteTermination](docs/sdks/employeeemployments/README.md#deletetermination) - Delete an employee termination
* [updateTermination](docs/sdks/employeeemployments/README.md#updatetermination) - Update an employee termination
* [createRehire](docs/sdks/employeeemployments/README.md#createrehire) - Create an employee rehire
* [rehire](docs/sdks/employeeemployments/README.md#rehire) - Update an employee rehire
* [getRehire](docs/sdks/employeeemployments/README.md#getrehire) - Get an employee rehire
* [deleteRehire](docs/sdks/employeeemployments/README.md#deleterehire) - Delete an employee rehire
* [getHistory](docs/sdks/employeeemployments/README.md#gethistory) - Get employment history for an employee

### [employeeForms](docs/sdks/employeeforms/README.md)

* [generateW2](docs/sdks/employeeforms/README.md#generatew2) - Generate a W2 form [DEMO]
* [list](docs/sdks/employeeforms/README.md#list) - Get all employee forms
* [get](docs/sdks/employeeforms/README.md#get) - Get an employee form
* [getPdf](docs/sdks/employeeforms/README.md#getpdf) - Get the employee form pdf
* [sign](docs/sdks/employeeforms/README.md#sign) - Sign an employee form

### [employeePaymentMethod](docs/sdks/employeepaymentmethod/README.md)

* [create](docs/sdks/employeepaymentmethod/README.md#create) - Create an employee bank account
* [deleteBankAccount](docs/sdks/employeepaymentmethod/README.md#deletebankaccount) - Delete an employee bank account
* [updateBankAccount](docs/sdks/employeepaymentmethod/README.md#updatebankaccount) - Update an employee bank account
* [get](docs/sdks/employeepaymentmethod/README.md#get) - Get an employee's payment method
* [update](docs/sdks/employeepaymentmethod/README.md#update) - Update an employee's payment method

### [employeePaymentMethods](docs/sdks/employeepaymentmethods/README.md)

* [getBankAccounts](docs/sdks/employeepaymentmethods/README.md#getbankaccounts) - Get all employee bank accounts

### [employees](docs/sdks/employees/README.md)

* [list](docs/sdks/employees/README.md#list) - Get employees of a company
* [create](docs/sdks/employees/README.md#create) - Create an employee
* [getV1CompaniesCompanyIdEmployeesPaymentDetails](docs/sdks/employees/README.md#getv1companiescompanyidemployeespaymentdetails) - Get employee payment details for a company
* [createHistorical](docs/sdks/employees/README.md#createhistorical) - Create a historical employee
* [get](docs/sdks/employees/README.md#get) - Get an employee
* [update](docs/sdks/employees/README.md#update) - Update an employee.
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

* [get](docs/sdks/events/README.md#get) - Get all events

### [externalPayrolls](docs/sdks/externalpayrolls/README.md)

* [create](docs/sdks/externalpayrolls/README.md#create) - Create a new external payroll for a company
* [get](docs/sdks/externalpayrolls/README.md#get) - Get external payrolls for a company
* [retrieve](docs/sdks/externalpayrolls/README.md#retrieve) - Get an external payroll
* [delete](docs/sdks/externalpayrolls/README.md#delete) - Delete an external payroll
* [update](docs/sdks/externalpayrolls/README.md#update) - Update an external payroll
* [calculateTaxes](docs/sdks/externalpayrolls/README.md#calculatetaxes) - Get tax suggestions for an external payroll
* [listTaxLiabilities](docs/sdks/externalpayrolls/README.md#listtaxliabilities) - Get tax liabilities
* [updateTaxLiabilities](docs/sdks/externalpayrolls/README.md#updatetaxliabilities) - Update tax liabilities
* [finalizeTaxLiabilities](docs/sdks/externalpayrolls/README.md#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls

### [federalTaxDetails](docs/sdks/federaltaxdetails/README.md)

* [get](docs/sdks/federaltaxdetails/README.md#get) - Get Federal Tax Details
* [update](docs/sdks/federaltaxdetails/README.md#update) - Update Federal Tax Details

### [flows](docs/sdks/flows/README.md)

* [create](docs/sdks/flows/README.md#create) - Create a flow

### [garnishments](docs/sdks/garnishments/README.md)

* [create](docs/sdks/garnishments/README.md#create) - Create a garnishment
* [list](docs/sdks/garnishments/README.md#list) - Get garnishments for an employee
* [get](docs/sdks/garnishments/README.md#get) - Get a garnishment
* [update](docs/sdks/garnishments/README.md#update) - Update a garnishment
* [getChildSupportData](docs/sdks/garnishments/README.md#getchildsupportdata) - Get child support garnishment data

### [generatedDocuments](docs/sdks/generateddocuments/README.md)

* [get](docs/sdks/generateddocuments/README.md#get) - Get a generated document

### [historicalEmployees](docs/sdks/historicalemployees/README.md)

* [update](docs/sdks/historicalemployees/README.md#update) - Update a historical employee

### [holidayPayPolicies](docs/sdks/holidaypaypolicies/README.md)

* [get](docs/sdks/holidaypaypolicies/README.md#get) - Get a company's holiday pay policy
* [create](docs/sdks/holidaypaypolicies/README.md#create) - Create a holiday pay policy for a company
* [update](docs/sdks/holidaypaypolicies/README.md#update) - Update a company's holiday pay policy
* [delete](docs/sdks/holidaypaypolicies/README.md#delete) - Delete a company's holiday pay policy
* [addEmployees](docs/sdks/holidaypaypolicies/README.md#addemployees) - Add employees to a company's holiday pay policy
* [removeEmployees](docs/sdks/holidaypaypolicies/README.md#removeemployees) - Remove employees from a company's holiday pay policy

### [i9Verification](docs/sdks/i9verification/README.md)

* [getAuthorization](docs/sdks/i9verification/README.md#getauthorization) - Get an employee's I-9 authorization
* [update](docs/sdks/i9verification/README.md#update) - Create or update an employee's I-9 authorization
* [getDocumentOptions](docs/sdks/i9verification/README.md#getdocumentoptions) - Get an employee's I-9 verification document options
* [getDocuments](docs/sdks/i9verification/README.md#getdocuments) - Get an employee's I-9 verification documents
* [createDocuments](docs/sdks/i9verification/README.md#createdocuments) - Create an employee's I-9 authorization verification documents
* [deleteDocument](docs/sdks/i9verification/README.md#deletedocument) - Delete an employee's I-9 verification document
* [employerSign](docs/sdks/i9verification/README.md#employersign) - Employer sign an employee's Form I-9

### [industrySelection](docs/sdks/industryselection/README.md)

* [get](docs/sdks/industryselection/README.md#get) - Get a company industry selection
* [update](docs/sdks/industryselection/README.md#update) - Update a company industry selection

### [informationRequests](docs/sdks/informationrequests/README.md)

* [getInformationRequests](docs/sdks/informationrequests/README.md#getinformationrequests) - Get all information requests for a company

### [introspection](docs/sdks/introspection/README.md)

* [getInfo](docs/sdks/introspection/README.md#getinfo) - Get info about the current access token
* [refreshToken](docs/sdks/introspection/README.md#refreshtoken) - Refresh access token

### [invoices](docs/sdks/invoices/README.md)

* [get](docs/sdks/invoices/README.md#get) - Retrieve invoicing data for companies

### [jobsAndCompensations](docs/sdks/jobsandcompensations/README.md)

* [createJob](docs/sdks/jobsandcompensations/README.md#createjob) - Create a job
* [getJobs](docs/sdks/jobsandcompensations/README.md#getjobs) - Get jobs for an employee
* [getJob](docs/sdks/jobsandcompensations/README.md#getjob) - Get a job
* [update](docs/sdks/jobsandcompensations/README.md#update) - Update a job
* [delete](docs/sdks/jobsandcompensations/README.md#delete) - Delete an individual job
* [getCompensations](docs/sdks/jobsandcompensations/README.md#getcompensations) - Get compensations for a job
* [createCompensation](docs/sdks/jobsandcompensations/README.md#createcompensation) - Create a compensation
* [getCompensation](docs/sdks/jobsandcompensations/README.md#getcompensation) - Get a compensation
* [updateCompensation](docs/sdks/jobsandcompensations/README.md#updatecompensation) - Update a compensation
* [deleteCompensation](docs/sdks/jobsandcompensations/README.md#deletecompensation) - Delete a compensation

### [locations](docs/sdks/locations/README.md)

* [create](docs/sdks/locations/README.md#create) - Create a company location
* [get](docs/sdks/locations/README.md#get) - Get company locations
* [retrieve](docs/sdks/locations/README.md#retrieve) - Get a location
* [update](docs/sdks/locations/README.md#update) - Update a location
* [getMinimumWages](docs/sdks/locations/README.md#getminimumwages) - Get minimum wages for a location

### [notifications](docs/sdks/notifications/README.md)

* [getDetails](docs/sdks/notifications/README.md#getdetails) - Get a notification's details
* [getCompanyNotifications](docs/sdks/notifications/README.md#getcompanynotifications) - Get notifications for company

### [paymentConfigs](docs/sdks/paymentconfigs/README.md)

* [get](docs/sdks/paymentconfigs/README.md#get) - Get a company's payment configs
* [update](docs/sdks/paymentconfigs/README.md#update) - Update a company's payment configs

### [payrolls](docs/sdks/payrolls/README.md)

* [list](docs/sdks/payrolls/README.md#list) - Get all payrolls for a company
* [createOffCycle](docs/sdks/payrolls/README.md#createoffcycle) - Create an off-cycle payroll
* [getApprovedReversals](docs/sdks/payrolls/README.md#getapprovedreversals) - Get approved payroll reversals
* [get](docs/sdks/payrolls/README.md#get) - Get a single payroll
* [update](docs/sdks/payrolls/README.md#update) - Update a payroll by ID
* [delete](docs/sdks/payrolls/README.md#delete) - Delete a payroll
* [prepare](docs/sdks/payrolls/README.md#prepare) - Prepare a payroll for update
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
* [getV1CompaniesCompanyIdPayrollsIdPartnerDisbursements](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrollsidpartnerdisbursements) - Get partner disbursements for a payroll
* [patchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements](docs/sdks/payrolls/README.md#patchv1companiescompanyidpayrollsidpartnerdisbursements) - Update partner disbursements for a payroll

### [paySchedules](docs/sdks/payschedules/README.md)

* [create](docs/sdks/payschedules/README.md#create) - Create a new pay schedule
* [getAll](docs/sdks/payschedules/README.md#getall) - Get the pay schedules for a company
* [getPreview](docs/sdks/payschedules/README.md#getpreview) - Preview pay schedule dates
* [get](docs/sdks/payschedules/README.md#get) - Get a pay schedule
* [update](docs/sdks/payschedules/README.md#update) - Update a pay schedule
* [getPayPeriods](docs/sdks/payschedules/README.md#getpayperiods) - Get pay periods for a company
* [getUnprocessedTerminationPeriods](docs/sdks/payschedules/README.md#getunprocessedterminationperiods) - Get termination pay periods for a company
* [getAssignments](docs/sdks/payschedules/README.md#getassignments) - Get pay schedule assignments for a company
* [previewAssignment](docs/sdks/payschedules/README.md#previewassignment) - Preview pay schedule assignments for a company
* [assign](docs/sdks/payschedules/README.md#assign) - Assign pay schedules for a company

### [recoveryCases](docs/sdks/recoverycases/README.md)

* [get](docs/sdks/recoverycases/README.md#get) - Get all recovery cases for a company
* [redebit](docs/sdks/recoverycases/README.md#redebit) - Initiate a redebit for a recovery case

### [reimbursements](docs/sdks/reimbursements/README.md)

* [getV1EmployeesEmployeeIdRecurringReimbursements](docs/sdks/reimbursements/README.md#getv1employeesemployeeidrecurringreimbursements) - Get recurring reimbursements for an employee
* [postV1EmployeesEmployeeIdRecurringReimbursements](docs/sdks/reimbursements/README.md#postv1employeesemployeeidrecurringreimbursements) - Create a recurring reimbursement
* [getV1RecurringReimbursements](docs/sdks/reimbursements/README.md#getv1recurringreimbursements) - Get a recurring reimbursement
* [putV1RecurringReimbursements](docs/sdks/reimbursements/README.md#putv1recurringreimbursements) - Update a recurring reimbursement
* [deleteV1RecurringReimbursements](docs/sdks/reimbursements/README.md#deletev1recurringreimbursements) - Delete a recurring reimbursement

### [reports](docs/sdks/reports/README.md)

* [createCustom](docs/sdks/reports/README.md#createcustom) - Create a custom report
* [postPayrollsPayrollUuidReportsGeneralLedger](docs/sdks/reports/README.md#postpayrollspayrolluuidreportsgeneralledger) - Create a general ledger report
* [getReportsRequestUuid](docs/sdks/reports/README.md#getreportsrequestuuid) - Get a report
* [getTemplate](docs/sdks/reports/README.md#gettemplate) - Get a report template

### [salaryEstimates](docs/sdks/salaryestimates/README.md)

* [postV1EmployeesEmployeeIdSalaryEstimates](docs/sdks/salaryestimates/README.md#postv1employeesemployeeidsalaryestimates) - Create a salary estimate for an employee
* [getV1SalaryEstimatesId](docs/sdks/salaryestimates/README.md#getv1salaryestimatesid) - Get a salary estimate
* [putV1SalaryEstimatesId](docs/sdks/salaryestimates/README.md#putv1salaryestimatesid) - Update a salary estimate
* [postV1SalaryEstimatesUuidAccept](docs/sdks/salaryestimates/README.md#postv1salaryestimatesuuidaccept) - Accept a salary estimate
* [getV1SalaryEstimatesOccupations](docs/sdks/salaryestimates/README.md#getv1salaryestimatesoccupations) - Search for BLS occupations

### [signatories](docs/sdks/signatories/README.md)

* [create](docs/sdks/signatories/README.md#create) - Create a signatory
* [list](docs/sdks/signatories/README.md#list) - Get all company signatories
* [invite](docs/sdks/signatories/README.md#invite) - Invite a signatory
* [update](docs/sdks/signatories/README.md#update) - Update a signatory
* [delete](docs/sdks/signatories/README.md#delete) - Delete a signatory

### [taxRequirements](docs/sdks/taxrequirements/README.md)

* [get](docs/sdks/taxrequirements/README.md#get) - Get State Tax Requirements
* [updateState](docs/sdks/taxrequirements/README.md#updatestate) - Update State Tax Requirements
* [getAll](docs/sdks/taxrequirements/README.md#getall) - Get All Tax Requirement States

### [timeOffPolicies](docs/sdks/timeoffpolicies/README.md)

* [calculateAccruingTimeOffHours](docs/sdks/timeoffpolicies/README.md#calculateaccruingtimeoffhours) - Calculate accruing time off hours
* [get](docs/sdks/timeoffpolicies/README.md#get) - Get a time off policy
* [update](docs/sdks/timeoffpolicies/README.md#update) - Update a time off policy
* [getAll](docs/sdks/timeoffpolicies/README.md#getall) - Get all time off policies
* [create](docs/sdks/timeoffpolicies/README.md#create) - Create a time off policy
* [addEmployees](docs/sdks/timeoffpolicies/README.md#addemployees) - Add employees to a time off policy
* [removeEmployees](docs/sdks/timeoffpolicies/README.md#removeemployees) - Remove employees from a time off policy
* [updateBalance](docs/sdks/timeoffpolicies/README.md#updatebalance) - Update employee time off hour balances
* [deactivate](docs/sdks/timeoffpolicies/README.md#deactivate) - Deactivate a time off policy

### [webhooks](docs/sdks/webhooks/README.md)

* [createSubscription](docs/sdks/webhooks/README.md#createsubscription) - Create a webhook subscription
* [listSubscriptions](docs/sdks/webhooks/README.md#listsubscriptions) - List webhook subscriptions
* [updateSubscription](docs/sdks/webhooks/README.md#updatesubscription) - Update a webhook subscription
* [getSubscription](docs/sdks/webhooks/README.md#getsubscription) - Get a webhook subscription
* [deleteSubscription](docs/sdks/webhooks/README.md#deletesubscription) - Delete a webhook subscription
* [verify](docs/sdks/webhooks/README.md#verify) - Verify the webhook subscription
* [requestVerificationToken](docs/sdks/webhooks/README.md#requestverificationtoken) - Request the webhook subscription verification_token
* [getV1WebhooksHealthCheck](docs/sdks/webhooks/README.md#getv1webhookshealthcheck) - Get the webhooks health status

### [wireInRequests](docs/sdks/wireinrequests/README.md)

* [get](docs/sdks/wireinrequests/README.md#get) - Get a single Wire In Request
* [submit](docs/sdks/wireinrequests/README.md#submit) - Submit a wire in request
* [list](docs/sdks/wireinrequests/README.md#list) - Get all Wire In Requests for a company

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

- [`achTransactionsGetAll`](docs/sdks/achtransactions/README.md#getall) - Get all ACH transactions for a company
- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create a company bank account
- [`bankAccountsCreateFromPlaidToken`](docs/sdks/bankaccounts/README.md#createfromplaidtoken) - Create a bank account from a plaid processor token
- [`bankAccountsDeleteV1CompaniesCompanyIdBankAccountsBankAccountId`](docs/sdks/bankaccounts/README.md#deletev1companiescompanyidbankaccountsbankaccountid) - Delete a company bank account
- [`bankAccountsGet`](docs/sdks/bankaccounts/README.md#get) - Get all company bank accounts
- [`bankAccountsVerify`](docs/sdks/bankaccounts/README.md#verify) - Verify a company bank account
- [`companiesAcceptTermsOfService`](docs/sdks/companies/README.md#accepttermsofservice) - Accept terms of service for a company user
- [`companiesCreateAdmin`](docs/sdks/companies/README.md#createadmin) - Create an admin for the company
- [`companiesCreatePartnerManaged`](docs/sdks/companies/README.md#createpartnermanaged) - Create a partner managed company
- [`companiesFinishOnboarding`](docs/sdks/companies/README.md#finishonboarding) - Finish company onboarding
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get a company
- [`companiesGetCustomFields`](docs/sdks/companies/README.md#getcustomfields) - Get the custom fields of a company
- [`companiesGetOnboardingStatus`](docs/sdks/companies/README.md#getonboardingstatus) - Get the company's onboarding status
- [`companiesListAdmins`](docs/sdks/companies/README.md#listadmins) - Get all the admins at a company
- [`companiesMigrate`](docs/sdks/companies/README.md#migrate) - Migrate company to embedded payroll
- [`companiesRetrieveTermsOfService`](docs/sdks/companies/README.md#retrievetermsofservice) - Retrieve terms of service status for a company user
- [`companiesSuspensionsGet`](docs/sdks/suspensions/README.md#get) - Get suspensions for this company
- [`companiesSuspensionsSuspend`](docs/sdks/suspensions/README.md#suspend) - Suspend a company's account
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update a company
- [`companyAttachmentGetDownloadUrl`](docs/sdks/companyattachment/README.md#getdownloadurl) - Get a temporary url to download the Company Attachment file
- [`companyAttachmentsCreate`](docs/sdks/companyattachments/README.md#create) - Create Company Attachment and Upload File
- [`companyAttachmentsGetDetails`](docs/sdks/companyattachments/README.md#getdetails) - Get Company Attachment Details
- [`companyAttachmentsGetList`](docs/sdks/companyattachments/README.md#getlist) - Get List of Company Attachments
- [`companyBenefitsCreate`](docs/sdks/companybenefits/README.md#create) - Create a company benefit
- [`companyBenefitsDelete`](docs/sdks/companybenefits/README.md#delete) - Delete a company benefit
- [`companyBenefitsGet`](docs/sdks/companybenefits/README.md#get) - Get a company benefit
- [`companyBenefitsGetAll`](docs/sdks/companybenefits/README.md#getall) - Get all benefits supported by Gusto
- [`companyBenefitsGetEmployeeBenefits`](docs/sdks/companybenefits/README.md#getemployeebenefits) - Get all employee benefits for a company benefit
- [`companyBenefitsGetRequirements`](docs/sdks/companybenefits/README.md#getrequirements) - Get benefit fields requirements by ID
- [`companyBenefitsGetSummary`](docs/sdks/companybenefits/README.md#getsummary) - Get company benefit summary by company benefit id.
- [`companyBenefitsGetSupported`](docs/sdks/companybenefits/README.md#getsupported) - Get a supported benefit by ID
- [`companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions`](docs/sdks/companybenefits/README.md#getv1companybenefitscompanybenefitidcontributionexclusions) - Get contribution exclusions for a company benefit
- [`companyBenefitsList`](docs/sdks/companybenefits/README.md#list) - Get benefits for a company
- [`companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions`](docs/sdks/companybenefits/README.md#putv1companybenefitscompanybenefitidcontributionexclusions) - Update contribution exclusions for a company benefit
- [`companyBenefitsUpdate`](docs/sdks/companybenefits/README.md#update) - Update a company benefit
- [`companyBenefitsUpdateEmployeeBenefits`](docs/sdks/companybenefits/README.md#updateemployeebenefits) - Bulk update employee benefits for a company benefit
- [`companyFormsGet`](docs/sdks/companyforms/README.md#get) - Get a company form
- [`companyFormsGetAll`](docs/sdks/companyforms/README.md#getall) - Get all company forms
- [`companyFormsGetPdf`](docs/sdks/companyforms/README.md#getpdf) - Get a company form pdf
- [`companyFormsSign`](docs/sdks/companyforms/README.md#sign) - Sign a company form
- [`contractorDocumentsGet`](docs/sdks/contractordocuments/README.md#get) - Get a contractor document
- [`contractorDocumentsGetAll`](docs/sdks/contractordocuments/README.md#getall) - Get all contractor documents
- [`contractorDocumentsGetPdf`](docs/sdks/contractordocuments/README.md#getpdf) - Get the contractor document pdf
- [`contractorDocumentsSign`](docs/sdks/contractordocuments/README.md#sign) - Sign a contractor document
- [`contractorFormsGenerate1099`](docs/sdks/contractorforms/README.md#generate1099) - Generate a 1099 form [DEMO]
- [`contractorFormsGet`](docs/sdks/contractorforms/README.md#get) - Get a contractor form
- [`contractorFormsGetPdf`](docs/sdks/contractorforms/README.md#getpdf) - Get the contractor form pdf
- [`contractorFormsList`](docs/sdks/contractorforms/README.md#list) - Get all contractor forms
- [`contractorPaymentGroupsCreate`](docs/sdks/contractorpaymentgroups/README.md#create) - Create a contractor payment group
- [`contractorPaymentGroupsDelete`](docs/sdks/contractorpaymentgroups/README.md#delete) - Cancel a contractor payment group
- [`contractorPaymentGroupsFund`](docs/sdks/contractorpaymentgroups/README.md#fund) - Fund a contractor payment group [DEMO]
- [`contractorPaymentGroupsGet`](docs/sdks/contractorpaymentgroups/README.md#get) - Get a contractor payment group
- [`contractorPaymentGroupsGetList`](docs/sdks/contractorpaymentgroups/README.md#getlist) - Get contractor payment groups for a company
- [`contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements`](docs/sdks/contractorpaymentgroups/README.md#getv1contractorpaymentgroupsidpartnerdisbursements) - Get partner disbursements for a contractor payment group
- [`contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements`](docs/sdks/contractorpaymentgroups/README.md#patchv1contractorpaymentgroupsidpartnerdisbursements) - Update partner disbursements for a contractor payment group
- [`contractorPaymentGroupsPreview`](docs/sdks/contractorpaymentgroups/README.md#preview) - Preview a contractor payment group
- [`contractorPaymentMethodGet`](docs/sdks/contractorpaymentmethod/README.md#get) - Get a contractor's payment method
- [`contractorPaymentMethodGetBankAccounts`](docs/sdks/contractorpaymentmethod/README.md#getbankaccounts) - Get all contractor bank accounts
- [`contractorPaymentMethodsCreateBankAccount`](docs/sdks/contractorpaymentmethods/README.md#createbankaccount) - Create a contractor bank account
- [`contractorPaymentMethodUpdate`](docs/sdks/contractorpaymentmethod/README.md#update) - Update a contractor's payment method
- [`contractorPaymentsCreate`](docs/sdks/contractorpayments/README.md#create) - Create a contractor payment
- [`contractorPaymentsDelete`](docs/sdks/contractorpayments/README.md#delete) - Cancel a contractor payment
- [`contractorPaymentsFund`](docs/sdks/contractorpayments/README.md#fund) - Fund a contractor payment [DEMO]
- [`contractorPaymentsGet`](docs/sdks/contractorpayments/README.md#get) - Get a single contractor payment
- [`contractorPaymentsGetReceipt`](docs/sdks/contractorpayments/README.md#getreceipt) - Get a single contractor payment receipt
- [`contractorPaymentsList`](docs/sdks/contractorpayments/README.md#list) - Get contractor payments for a company
- [`contractorsCreate`](docs/sdks/contractors/README.md#create) - Create a contractor
- [`contractorsDelete`](docs/sdks/contractors/README.md#delete) - Delete a contractor
- [`contractorsGet`](docs/sdks/contractors/README.md#get) - Get a contractor
- [`contractorsGetAddress`](docs/sdks/contractors/README.md#getaddress) - Get a contractor address
- [`contractorsGetOnboardingStatus`](docs/sdks/contractors/README.md#getonboardingstatus) - Get the contractor's onboarding status
- [`contractorsGetV1CompaniesCompanyIdContractorsPaymentDetails`](docs/sdks/contractors/README.md#getv1companiescompanyidcontractorspaymentdetails) - List contractor payment details
- [`contractorsList`](docs/sdks/contractors/README.md#list) - Get contractors of a company
- [`contractorsUpdate`](docs/sdks/contractors/README.md#update) - Update a contractor
- [`contractorsUpdateAddress`](docs/sdks/contractors/README.md#updateaddress) - Update a contractor's address
- [`contractorsUpdateOnboardingStatus`](docs/sdks/contractors/README.md#updateonboardingstatus) - Change the contractor's onboarding status
- [`departmentsAddPeople`](docs/sdks/departments/README.md#addpeople) - Add people to a department
- [`departmentsCreate`](docs/sdks/departments/README.md#create) - Create a department
- [`departmentsDelete`](docs/sdks/departments/README.md#delete) - Delete a department
- [`departmentsGet`](docs/sdks/departments/README.md#get) - Get a department
- [`departmentsGetAll`](docs/sdks/departments/README.md#getall) - Get all departments of a company
- [`departmentsRemovePeople`](docs/sdks/departments/README.md#removepeople) - Remove people from a department
- [`departmentsUpdate`](docs/sdks/departments/README.md#update) - Update a department
- [`earningTypesCreate`](docs/sdks/earningtypes/README.md#create) - Create a custom earning type
- [`earningTypesDelete`](docs/sdks/earningtypes/README.md#delete) - Deactivate an earning type
- [`earningTypesList`](docs/sdks/earningtypes/README.md#list) - Get all earning types for a company
- [`earningTypesUpdate`](docs/sdks/earningtypes/README.md#update) - Update an earning type
- [`employeeAddressesCreate`](docs/sdks/employeeaddresses/README.md#create) - Create an employee's home address
- [`employeeAddressesCreateWorkAddress`](docs/sdks/employeeaddresses/README.md#createworkaddress) - Create an employee work address
- [`employeeAddressesDelete`](docs/sdks/employeeaddresses/README.md#delete) - Delete an employee's home address
- [`employeeAddressesDeleteWorkAddress`](docs/sdks/employeeaddresses/README.md#deleteworkaddress) - Delete an employee's work address
- [`employeeAddressesGet`](docs/sdks/employeeaddresses/README.md#get) - Get an employee's home addresses
- [`employeeAddressesGetWorkAddresses`](docs/sdks/employeeaddresses/README.md#getworkaddresses) - Get an employee's work addresses
- [`employeeAddressesRetrieveHomeAddress`](docs/sdks/employeeaddresses/README.md#retrievehomeaddress) - Get an employee's home address
- [`employeeAddressesRetrieveWorkAddress`](docs/sdks/employeeaddresses/README.md#retrieveworkaddress) - Get an employee work address
- [`employeeAddressesUpdate`](docs/sdks/employeeaddresses/README.md#update) - Update an employee's home address
- [`employeeAddressesUpdateWorkAddress`](docs/sdks/employeeaddresses/README.md#updateworkaddress) - Update an employee work address
- [`employeeBenefitsCreate`](docs/sdks/employeebenefits/README.md#create) - Create an employee benefit
- [`employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany`](docs/sdks/employeebenefits/README.md#createytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
- [`employeeBenefitsDelete`](docs/sdks/employeebenefits/README.md#delete) - Delete an employee benefit
- [`employeeBenefitsGet`](docs/sdks/employeebenefits/README.md#get) - Get all benefits for an employee
- [`employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany`](docs/sdks/employeebenefits/README.md#getytdbenefitamountsfromdifferentcompany) - Get year-to-date benefit amounts from a different company
- [`employeeBenefitsRetrieve`](docs/sdks/employeebenefits/README.md#retrieve) - Get an employee benefit
- [`employeeBenefitsUpdate`](docs/sdks/employeebenefits/README.md#update) - Update an employee benefit
- [`employeeEmploymentsCreateRehire`](docs/sdks/employeeemployments/README.md#createrehire) - Create an employee rehire
- [`employeeEmploymentsCreateTermination`](docs/sdks/employeeemployments/README.md#createtermination) - Create an employee termination
- [`employeeEmploymentsDeleteRehire`](docs/sdks/employeeemployments/README.md#deleterehire) - Delete an employee rehire
- [`employeeEmploymentsDeleteTermination`](docs/sdks/employeeemployments/README.md#deletetermination) - Delete an employee termination
- [`employeeEmploymentsGetHistory`](docs/sdks/employeeemployments/README.md#gethistory) - Get employment history for an employee
- [`employeeEmploymentsGetRehire`](docs/sdks/employeeemployments/README.md#getrehire) - Get an employee rehire
- [`employeeEmploymentsGetTerminations`](docs/sdks/employeeemployments/README.md#getterminations) - Get terminations for an employee
- [`employeeEmploymentsRehire`](docs/sdks/employeeemployments/README.md#rehire) - Update an employee rehire
- [`employeeEmploymentsUpdateTermination`](docs/sdks/employeeemployments/README.md#updatetermination) - Update an employee termination
- [`employeeFormsGenerateW2`](docs/sdks/employeeforms/README.md#generatew2) - Generate a W2 form [DEMO]
- [`employeeFormsGet`](docs/sdks/employeeforms/README.md#get) - Get an employee form
- [`employeeFormsGetPdf`](docs/sdks/employeeforms/README.md#getpdf) - Get the employee form pdf
- [`employeeFormsList`](docs/sdks/employeeforms/README.md#list) - Get all employee forms
- [`employeeFormsSign`](docs/sdks/employeeforms/README.md#sign) - Sign an employee form
- [`employeePaymentMethodCreate`](docs/sdks/employeepaymentmethod/README.md#create) - Create an employee bank account
- [`employeePaymentMethodDeleteBankAccount`](docs/sdks/employeepaymentmethod/README.md#deletebankaccount) - Delete an employee bank account
- [`employeePaymentMethodGet`](docs/sdks/employeepaymentmethod/README.md#get) - Get an employee's payment method
- [`employeePaymentMethodsGetBankAccounts`](docs/sdks/employeepaymentmethods/README.md#getbankaccounts) - Get all employee bank accounts
- [`employeePaymentMethodUpdate`](docs/sdks/employeepaymentmethod/README.md#update) - Update an employee's payment method
- [`employeePaymentMethodUpdateBankAccount`](docs/sdks/employeepaymentmethod/README.md#updatebankaccount) - Update an employee bank account
- [`employeesCreate`](docs/sdks/employees/README.md#create) - Create an employee
- [`employeesCreateHistorical`](docs/sdks/employees/README.md#createhistorical) - Create a historical employee
- [`employeesDelete`](docs/sdks/employees/README.md#delete) - Delete an onboarding employee
- [`employeesGet`](docs/sdks/employees/README.md#get) - Get an employee
- [`employeesGetCustomFields`](docs/sdks/employees/README.md#getcustomfields) - Get an employee's custom fields
- [`employeesGetOnboardingStatus`](docs/sdks/employees/README.md#getonboardingstatus) - Get the employee's onboarding status
- [`employeesGetTimeOffActivities`](docs/sdks/employees/README.md#gettimeoffactivities) - Get employee time off activities
- [`employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails`](docs/sdks/employees/README.md#getv1companiescompanyidemployeespaymentdetails) - Get employee payment details for a company
- [`employeesList`](docs/sdks/employees/README.md#list) - Get employees of a company
- [`employeesUpdate`](docs/sdks/employees/README.md#update) - Update an employee.
- [`employeesUpdateOnboardingDocumentsConfig`](docs/sdks/employees/README.md#updateonboardingdocumentsconfig) - Update an employee's onboarding documents config
- [`employeesUpdateOnboardingStatus`](docs/sdks/employees/README.md#updateonboardingstatus) - Update the employee's onboarding status
- [`employeeTaxSetupGetFederalTaxes`](docs/sdks/employeetaxsetup/README.md#getfederaltaxes) - Get an employee's federal taxes
- [`employeeTaxSetupGetStateTaxes`](docs/sdks/employeetaxsetup/README.md#getstatetaxes) - Get an employee's state taxes
- [`employeeTaxSetupUpdateFederalTaxes`](docs/sdks/employeetaxsetup/README.md#updatefederaltaxes) - Update an employee's federal taxes
- [`employeeTaxSetupUpdateStateTaxes`](docs/sdks/employeetaxsetup/README.md#updatestatetaxes) - Update an employee's state taxes
- [`eventsGet`](docs/sdks/events/README.md#get) - Get all events
- [`externalPayrollsCalculateTaxes`](docs/sdks/externalpayrolls/README.md#calculatetaxes) - Get tax suggestions for an external payroll
- [`externalPayrollsCreate`](docs/sdks/externalpayrolls/README.md#create) - Create a new external payroll for a company
- [`externalPayrollsDelete`](docs/sdks/externalpayrolls/README.md#delete) - Delete an external payroll
- [`externalPayrollsFinalizeTaxLiabilities`](docs/sdks/externalpayrolls/README.md#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls
- [`externalPayrollsGet`](docs/sdks/externalpayrolls/README.md#get) - Get external payrolls for a company
- [`externalPayrollsListTaxLiabilities`](docs/sdks/externalpayrolls/README.md#listtaxliabilities) - Get tax liabilities
- [`externalPayrollsRetrieve`](docs/sdks/externalpayrolls/README.md#retrieve) - Get an external payroll
- [`externalPayrollsUpdate`](docs/sdks/externalpayrolls/README.md#update) - Update an external payroll
- [`externalPayrollsUpdateTaxLiabilities`](docs/sdks/externalpayrolls/README.md#updatetaxliabilities) - Update tax liabilities
- [`federalTaxDetailsGet`](docs/sdks/federaltaxdetails/README.md#get) - Get Federal Tax Details
- [`federalTaxDetailsUpdate`](docs/sdks/federaltaxdetails/README.md#update) - Update Federal Tax Details
- [`flowsCreate`](docs/sdks/flows/README.md#create) - Create a flow
- [`garnishmentsCreate`](docs/sdks/garnishments/README.md#create) - Create a garnishment
- [`garnishmentsGet`](docs/sdks/garnishments/README.md#get) - Get a garnishment
- [`garnishmentsGetChildSupportData`](docs/sdks/garnishments/README.md#getchildsupportdata) - Get child support garnishment data
- [`garnishmentsList`](docs/sdks/garnishments/README.md#list) - Get garnishments for an employee
- [`garnishmentsUpdate`](docs/sdks/garnishments/README.md#update) - Update a garnishment
- [`generatedDocumentsGet`](docs/sdks/generateddocuments/README.md#get) - Get a generated document
- [`historicalEmployeesUpdate`](docs/sdks/historicalemployees/README.md#update) - Update a historical employee
- [`holidayPayPoliciesAddEmployees`](docs/sdks/holidaypaypolicies/README.md#addemployees) - Add employees to a company's holiday pay policy
- [`holidayPayPoliciesCreate`](docs/sdks/holidaypaypolicies/README.md#create) - Create a holiday pay policy for a company
- [`holidayPayPoliciesDelete`](docs/sdks/holidaypaypolicies/README.md#delete) - Delete a company's holiday pay policy
- [`holidayPayPoliciesGet`](docs/sdks/holidaypaypolicies/README.md#get) - Get a company's holiday pay policy
- [`holidayPayPoliciesRemoveEmployees`](docs/sdks/holidaypaypolicies/README.md#removeemployees) - Remove employees from a company's holiday pay policy
- [`holidayPayPoliciesUpdate`](docs/sdks/holidaypaypolicies/README.md#update) - Update a company's holiday pay policy
- [`i9VerificationCreateDocuments`](docs/sdks/i9verification/README.md#createdocuments) - Create an employee's I-9 authorization verification documents
- [`i9VerificationDeleteDocument`](docs/sdks/i9verification/README.md#deletedocument) - Delete an employee's I-9 verification document
- [`i9VerificationEmployerSign`](docs/sdks/i9verification/README.md#employersign) - Employer sign an employee's Form I-9
- [`i9VerificationGetAuthorization`](docs/sdks/i9verification/README.md#getauthorization) - Get an employee's I-9 authorization
- [`i9VerificationGetDocumentOptions`](docs/sdks/i9verification/README.md#getdocumentoptions) - Get an employee's I-9 verification document options
- [`i9VerificationGetDocuments`](docs/sdks/i9verification/README.md#getdocuments) - Get an employee's I-9 verification documents
- [`i9VerificationUpdate`](docs/sdks/i9verification/README.md#update) - Create or update an employee's I-9 authorization
- [`industrySelectionGet`](docs/sdks/industryselection/README.md#get) - Get a company industry selection
- [`industrySelectionUpdate`](docs/sdks/industryselection/README.md#update) - Update a company industry selection
- [`informationRequestsGetInformationRequests`](docs/sdks/informationrequests/README.md#getinformationrequests) - Get all information requests for a company
- [`introspectionGetInfo`](docs/sdks/introspection/README.md#getinfo) - Get info about the current access token
- [`introspectionRefreshToken`](docs/sdks/introspection/README.md#refreshtoken) - Refresh access token
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Retrieve invoicing data for companies
- [`jobsAndCompensationsCreateCompensation`](docs/sdks/jobsandcompensations/README.md#createcompensation) - Create a compensation
- [`jobsAndCompensationsCreateJob`](docs/sdks/jobsandcompensations/README.md#createjob) - Create a job
- [`jobsAndCompensationsDelete`](docs/sdks/jobsandcompensations/README.md#delete) - Delete an individual job
- [`jobsAndCompensationsDeleteCompensation`](docs/sdks/jobsandcompensations/README.md#deletecompensation) - Delete a compensation
- [`jobsAndCompensationsGetCompensation`](docs/sdks/jobsandcompensations/README.md#getcompensation) - Get a compensation
- [`jobsAndCompensationsGetCompensations`](docs/sdks/jobsandcompensations/README.md#getcompensations) - Get compensations for a job
- [`jobsAndCompensationsGetJob`](docs/sdks/jobsandcompensations/README.md#getjob) - Get a job
- [`jobsAndCompensationsGetJobs`](docs/sdks/jobsandcompensations/README.md#getjobs) - Get jobs for an employee
- [`jobsAndCompensationsUpdate`](docs/sdks/jobsandcompensations/README.md#update) - Update a job
- [`jobsAndCompensationsUpdateCompensation`](docs/sdks/jobsandcompensations/README.md#updatecompensation) - Update a compensation
- [`locationsCreate`](docs/sdks/locations/README.md#create) - Create a company location
- [`locationsGet`](docs/sdks/locations/README.md#get) - Get company locations
- [`locationsGetMinimumWages`](docs/sdks/locations/README.md#getminimumwages) - Get minimum wages for a location
- [`locationsRetrieve`](docs/sdks/locations/README.md#retrieve) - Get a location
- [`locationsUpdate`](docs/sdks/locations/README.md#update) - Update a location
- [`notificationsGetCompanyNotifications`](docs/sdks/notifications/README.md#getcompanynotifications) - Get notifications for company
- [`notificationsGetDetails`](docs/sdks/notifications/README.md#getdetails) - Get a notification's details
- [`paymentConfigsGet`](docs/sdks/paymentconfigs/README.md#get) - Get a company's payment configs
- [`paymentConfigsUpdate`](docs/sdks/paymentconfigs/README.md#update) - Update a company's payment configs
- [`payrollsCalculate`](docs/sdks/payrolls/README.md#calculate) - Calculate a payroll
- [`payrollsCalculateGrossUp`](docs/sdks/payrolls/README.md#calculategrossup) - Calculate gross up
- [`payrollsCancel`](docs/sdks/payrolls/README.md#cancel) - Cancel a payroll
- [`payrollsCreateOffCycle`](docs/sdks/payrolls/README.md#createoffcycle) - Create an off-cycle payroll
- [`payrollsDelete`](docs/sdks/payrolls/README.md#delete) - Delete a payroll
- [`payrollsGeneratePrintableChecks`](docs/sdks/payrolls/README.md#generateprintablechecks) - Generate printable payroll checks (pdf)
- [`payrollsGet`](docs/sdks/payrolls/README.md#get) - Get a single payroll
- [`payrollsGetApprovedReversals`](docs/sdks/payrolls/README.md#getapprovedreversals) - Get approved payroll reversals
- [`payrollsGetBlockers`](docs/sdks/payrolls/README.md#getblockers) - Get all payroll blockers for a company
- [`payrollsGetPayStub`](docs/sdks/payrolls/README.md#getpaystub) - Get an employee pay stub (pdf)
- [`payrollsGetPayStubs`](docs/sdks/payrolls/README.md#getpaystubs) - Get an employee's pay stubs
- [`payrollsGetReceipt`](docs/sdks/payrolls/README.md#getreceipt) - Get a single payroll receipt
- [`payrollsGetV1CompaniesCompanyIdPayrollsIdPartnerDisbursements`](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrollsidpartnerdisbursements) - Get partner disbursements for a payroll
- [`payrollsList`](docs/sdks/payrolls/README.md#list) - Get all payrolls for a company
- [`payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements`](docs/sdks/payrolls/README.md#patchv1companiescompanyidpayrollsidpartnerdisbursements) - Update partner disbursements for a payroll
- [`payrollsPrepare`](docs/sdks/payrolls/README.md#prepare) - Prepare a payroll for update
- [`payrollsSkip`](docs/sdks/payrolls/README.md#skip) - Skip a payroll
- [`payrollsSubmit`](docs/sdks/payrolls/README.md#submit) - Submit payroll
- [`payrollsUpdate`](docs/sdks/payrolls/README.md#update) - Update a payroll by ID
- [`paySchedulesAssign`](docs/sdks/payschedules/README.md#assign) - Assign pay schedules for a company
- [`paySchedulesCreate`](docs/sdks/payschedules/README.md#create) - Create a new pay schedule
- [`paySchedulesGet`](docs/sdks/payschedules/README.md#get) - Get a pay schedule
- [`paySchedulesGetAll`](docs/sdks/payschedules/README.md#getall) - Get the pay schedules for a company
- [`paySchedulesGetAssignments`](docs/sdks/payschedules/README.md#getassignments) - Get pay schedule assignments for a company
- [`paySchedulesGetPayPeriods`](docs/sdks/payschedules/README.md#getpayperiods) - Get pay periods for a company
- [`paySchedulesGetPreview`](docs/sdks/payschedules/README.md#getpreview) - Preview pay schedule dates
- [`paySchedulesGetUnprocessedTerminationPeriods`](docs/sdks/payschedules/README.md#getunprocessedterminationperiods) - Get termination pay periods for a company
- [`paySchedulesPreviewAssignment`](docs/sdks/payschedules/README.md#previewassignment) - Preview pay schedule assignments for a company
- [`paySchedulesUpdate`](docs/sdks/payschedules/README.md#update) - Update a pay schedule
- [`recoveryCasesGet`](docs/sdks/recoverycases/README.md#get) - Get all recovery cases for a company
- [`recoveryCasesRedebit`](docs/sdks/recoverycases/README.md#redebit) - Initiate a redebit for a recovery case
- [`reimbursementsDeleteV1RecurringReimbursements`](docs/sdks/reimbursements/README.md#deletev1recurringreimbursements) - Delete a recurring reimbursement
- [`reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements`](docs/sdks/reimbursements/README.md#getv1employeesemployeeidrecurringreimbursements) - Get recurring reimbursements for an employee
- [`reimbursementsGetV1RecurringReimbursements`](docs/sdks/reimbursements/README.md#getv1recurringreimbursements) - Get a recurring reimbursement
- [`reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements`](docs/sdks/reimbursements/README.md#postv1employeesemployeeidrecurringreimbursements) - Create a recurring reimbursement
- [`reimbursementsPutV1RecurringReimbursements`](docs/sdks/reimbursements/README.md#putv1recurringreimbursements) - Update a recurring reimbursement
- [`reportsCreateCustom`](docs/sdks/reports/README.md#createcustom) - Create a custom report
- [`reportsGetReportsRequestUuid`](docs/sdks/reports/README.md#getreportsrequestuuid) - Get a report
- [`reportsGetTemplate`](docs/sdks/reports/README.md#gettemplate) - Get a report template
- [`reportsPostPayrollsPayrollUuidReportsGeneralLedger`](docs/sdks/reports/README.md#postpayrollspayrolluuidreportsgeneralledger) - Create a general ledger report
- [`salaryEstimatesGetV1SalaryEstimatesId`](docs/sdks/salaryestimates/README.md#getv1salaryestimatesid) - Get a salary estimate
- [`salaryEstimatesGetV1SalaryEstimatesOccupations`](docs/sdks/salaryestimates/README.md#getv1salaryestimatesoccupations) - Search for BLS occupations
- [`salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates`](docs/sdks/salaryestimates/README.md#postv1employeesemployeeidsalaryestimates) - Create a salary estimate for an employee
- [`salaryEstimatesPostV1SalaryEstimatesUuidAccept`](docs/sdks/salaryestimates/README.md#postv1salaryestimatesuuidaccept) - Accept a salary estimate
- [`salaryEstimatesPutV1SalaryEstimatesId`](docs/sdks/salaryestimates/README.md#putv1salaryestimatesid) - Update a salary estimate
- [`signatoriesCreate`](docs/sdks/signatories/README.md#create) - Create a signatory
- [`signatoriesDelete`](docs/sdks/signatories/README.md#delete) - Delete a signatory
- [`signatoriesInvite`](docs/sdks/signatories/README.md#invite) - Invite a signatory
- [`signatoriesList`](docs/sdks/signatories/README.md#list) - Get all company signatories
- [`signatoriesUpdate`](docs/sdks/signatories/README.md#update) - Update a signatory
- [`taxRequirementsGet`](docs/sdks/taxrequirements/README.md#get) - Get State Tax Requirements
- [`taxRequirementsGetAll`](docs/sdks/taxrequirements/README.md#getall) - Get All Tax Requirement States
- [`taxRequirementsUpdateState`](docs/sdks/taxrequirements/README.md#updatestate) - Update State Tax Requirements
- [`timeOffPoliciesAddEmployees`](docs/sdks/timeoffpolicies/README.md#addemployees) - Add employees to a time off policy
- [`timeOffPoliciesCalculateAccruingTimeOffHours`](docs/sdks/timeoffpolicies/README.md#calculateaccruingtimeoffhours) - Calculate accruing time off hours
- [`timeOffPoliciesCreate`](docs/sdks/timeoffpolicies/README.md#create) - Create a time off policy
- [`timeOffPoliciesDeactivate`](docs/sdks/timeoffpolicies/README.md#deactivate) - Deactivate a time off policy
- [`timeOffPoliciesGet`](docs/sdks/timeoffpolicies/README.md#get) - Get a time off policy
- [`timeOffPoliciesGetAll`](docs/sdks/timeoffpolicies/README.md#getall) - Get all time off policies
- [`timeOffPoliciesRemoveEmployees`](docs/sdks/timeoffpolicies/README.md#removeemployees) - Remove employees from a time off policy
- [`timeOffPoliciesUpdate`](docs/sdks/timeoffpolicies/README.md#update) - Update a time off policy
- [`timeOffPoliciesUpdateBalance`](docs/sdks/timeoffpolicies/README.md#updatebalance) - Update employee time off hour balances
- [`webhooksCreateSubscription`](docs/sdks/webhooks/README.md#createsubscription) - Create a webhook subscription
- [`webhooksDeleteSubscription`](docs/sdks/webhooks/README.md#deletesubscription) - Delete a webhook subscription
- [`webhooksGetSubscription`](docs/sdks/webhooks/README.md#getsubscription) - Get a webhook subscription
- [`webhooksGetV1WebhooksHealthCheck`](docs/sdks/webhooks/README.md#getv1webhookshealthcheck) - Get the webhooks health status
- [`webhooksListSubscriptions`](docs/sdks/webhooks/README.md#listsubscriptions) - List webhook subscriptions
- [`webhooksRequestVerificationToken`](docs/sdks/webhooks/README.md#requestverificationtoken) - Request the webhook subscription verification_token
- [`webhooksUpdateSubscription`](docs/sdks/webhooks/README.md#updatesubscription) - Update a webhook subscription
- [`webhooksVerify`](docs/sdks/webhooks/README.md#verify) - Verify the webhook subscription
- [`wireInRequestsGet`](docs/sdks/wireinrequests/README.md#get) - Get a single Wire In Request
- [`wireInRequestsList`](docs/sdks/wireinrequests/README.md#list) - Get all Wire In Requests for a company
- [`wireInRequestsSubmit`](docs/sdks/wireinrequests/README.md#submit) - Submit a wire in request

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useAchTransactionsGetAll`](docs/sdks/achtransactions/README.md#getall) - Get all ACH transactions for a company
- [`useBankAccountsCreateFromPlaidTokenMutation`](docs/sdks/bankaccounts/README.md#createfromplaidtoken) - Create a bank account from a plaid processor token
- [`useBankAccountsCreateMutation`](docs/sdks/bankaccounts/README.md#create) - Create a company bank account
- [`useBankAccountsDeleteV1CompaniesCompanyIdBankAccountsBankAccountIdMutation`](docs/sdks/bankaccounts/README.md#deletev1companiescompanyidbankaccountsbankaccountid) - Delete a company bank account
- [`useBankAccountsGet`](docs/sdks/bankaccounts/README.md#get) - Get all company bank accounts
- [`useBankAccountsVerifyMutation`](docs/sdks/bankaccounts/README.md#verify) - Verify a company bank account
- [`useCompaniesAcceptTermsOfServiceMutation`](docs/sdks/companies/README.md#accepttermsofservice) - Accept terms of service for a company user
- [`useCompaniesCreateAdminMutation`](docs/sdks/companies/README.md#createadmin) - Create an admin for the company
- [`useCompaniesCreatePartnerManagedMutation`](docs/sdks/companies/README.md#createpartnermanaged) - Create a partner managed company
- [`useCompaniesFinishOnboardingMutation`](docs/sdks/companies/README.md#finishonboarding) - Finish company onboarding
- [`useCompaniesGet`](docs/sdks/companies/README.md#get) - Get a company
- [`useCompaniesGetCustomFields`](docs/sdks/companies/README.md#getcustomfields) - Get the custom fields of a company
- [`useCompaniesGetOnboardingStatus`](docs/sdks/companies/README.md#getonboardingstatus) - Get the company's onboarding status
- [`useCompaniesListAdmins`](docs/sdks/companies/README.md#listadmins) - Get all the admins at a company
- [`useCompaniesMigrateMutation`](docs/sdks/companies/README.md#migrate) - Migrate company to embedded payroll
- [`useCompaniesRetrieveTermsOfServiceMutation`](docs/sdks/companies/README.md#retrievetermsofservice) - Retrieve terms of service status for a company user
- [`useCompaniesSuspensionsGet`](docs/sdks/suspensions/README.md#get) - Get suspensions for this company
- [`useCompaniesSuspensionsSuspendMutation`](docs/sdks/suspensions/README.md#suspend) - Suspend a company's account
- [`useCompaniesUpdateMutation`](docs/sdks/companies/README.md#update) - Update a company
- [`useCompanyAttachmentGetDownloadUrl`](docs/sdks/companyattachment/README.md#getdownloadurl) - Get a temporary url to download the Company Attachment file
- [`useCompanyAttachmentsCreateMutation`](docs/sdks/companyattachments/README.md#create) - Create Company Attachment and Upload File
- [`useCompanyAttachmentsGetDetails`](docs/sdks/companyattachments/README.md#getdetails) - Get Company Attachment Details
- [`useCompanyAttachmentsGetList`](docs/sdks/companyattachments/README.md#getlist) - Get List of Company Attachments
- [`useCompanyBenefitsCreateMutation`](docs/sdks/companybenefits/README.md#create) - Create a company benefit
- [`useCompanyBenefitsDeleteMutation`](docs/sdks/companybenefits/README.md#delete) - Delete a company benefit
- [`useCompanyBenefitsGet`](docs/sdks/companybenefits/README.md#get) - Get a company benefit
- [`useCompanyBenefitsGetAll`](docs/sdks/companybenefits/README.md#getall) - Get all benefits supported by Gusto
- [`useCompanyBenefitsGetEmployeeBenefits`](docs/sdks/companybenefits/README.md#getemployeebenefits) - Get all employee benefits for a company benefit
- [`useCompanyBenefitsGetRequirements`](docs/sdks/companybenefits/README.md#getrequirements) - Get benefit fields requirements by ID
- [`useCompanyBenefitsGetSummary`](docs/sdks/companybenefits/README.md#getsummary) - Get company benefit summary by company benefit id.
- [`useCompanyBenefitsGetSupported`](docs/sdks/companybenefits/README.md#getsupported) - Get a supported benefit by ID
- [`useCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions`](docs/sdks/companybenefits/README.md#getv1companybenefitscompanybenefitidcontributionexclusions) - Get contribution exclusions for a company benefit
- [`useCompanyBenefitsList`](docs/sdks/companybenefits/README.md#list) - Get benefits for a company
- [`useCompanyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsMutation`](docs/sdks/companybenefits/README.md#putv1companybenefitscompanybenefitidcontributionexclusions) - Update contribution exclusions for a company benefit
- [`useCompanyBenefitsUpdateEmployeeBenefitsMutation`](docs/sdks/companybenefits/README.md#updateemployeebenefits) - Bulk update employee benefits for a company benefit
- [`useCompanyBenefitsUpdateMutation`](docs/sdks/companybenefits/README.md#update) - Update a company benefit
- [`useCompanyFormsGet`](docs/sdks/companyforms/README.md#get) - Get a company form
- [`useCompanyFormsGetAll`](docs/sdks/companyforms/README.md#getall) - Get all company forms
- [`useCompanyFormsGetPdf`](docs/sdks/companyforms/README.md#getpdf) - Get a company form pdf
- [`useCompanyFormsSignMutation`](docs/sdks/companyforms/README.md#sign) - Sign a company form
- [`useContractorDocumentsGet`](docs/sdks/contractordocuments/README.md#get) - Get a contractor document
- [`useContractorDocumentsGetAll`](docs/sdks/contractordocuments/README.md#getall) - Get all contractor documents
- [`useContractorDocumentsGetPdf`](docs/sdks/contractordocuments/README.md#getpdf) - Get the contractor document pdf
- [`useContractorDocumentsSignMutation`](docs/sdks/contractordocuments/README.md#sign) - Sign a contractor document
- [`useContractorFormsGenerate1099Mutation`](docs/sdks/contractorforms/README.md#generate1099) - Generate a 1099 form [DEMO]
- [`useContractorFormsGet`](docs/sdks/contractorforms/README.md#get) - Get a contractor form
- [`useContractorFormsGetPdf`](docs/sdks/contractorforms/README.md#getpdf) - Get the contractor form pdf
- [`useContractorFormsList`](docs/sdks/contractorforms/README.md#list) - Get all contractor forms
- [`useContractorPaymentGroupsCreateMutation`](docs/sdks/contractorpaymentgroups/README.md#create) - Create a contractor payment group
- [`useContractorPaymentGroupsDeleteMutation`](docs/sdks/contractorpaymentgroups/README.md#delete) - Cancel a contractor payment group
- [`useContractorPaymentGroupsFundMutation`](docs/sdks/contractorpaymentgroups/README.md#fund) - Fund a contractor payment group [DEMO]
- [`useContractorPaymentGroupsGet`](docs/sdks/contractorpaymentgroups/README.md#get) - Get a contractor payment group
- [`useContractorPaymentGroupsGetList`](docs/sdks/contractorpaymentgroups/README.md#getlist) - Get contractor payment groups for a company
- [`useContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements`](docs/sdks/contractorpaymentgroups/README.md#getv1contractorpaymentgroupsidpartnerdisbursements) - Get partner disbursements for a contractor payment group
- [`useContractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursementsMutation`](docs/sdks/contractorpaymentgroups/README.md#patchv1contractorpaymentgroupsidpartnerdisbursements) - Update partner disbursements for a contractor payment group
- [`useContractorPaymentGroupsPreviewMutation`](docs/sdks/contractorpaymentgroups/README.md#preview) - Preview a contractor payment group
- [`useContractorPaymentMethodGet`](docs/sdks/contractorpaymentmethod/README.md#get) - Get a contractor's payment method
- [`useContractorPaymentMethodGetBankAccounts`](docs/sdks/contractorpaymentmethod/README.md#getbankaccounts) - Get all contractor bank accounts
- [`useContractorPaymentMethodsCreateBankAccountMutation`](docs/sdks/contractorpaymentmethods/README.md#createbankaccount) - Create a contractor bank account
- [`useContractorPaymentMethodUpdateMutation`](docs/sdks/contractorpaymentmethod/README.md#update) - Update a contractor's payment method
- [`useContractorPaymentsCreateMutation`](docs/sdks/contractorpayments/README.md#create) - Create a contractor payment
- [`useContractorPaymentsDeleteMutation`](docs/sdks/contractorpayments/README.md#delete) - Cancel a contractor payment
- [`useContractorPaymentsFundMutation`](docs/sdks/contractorpayments/README.md#fund) - Fund a contractor payment [DEMO]
- [`useContractorPaymentsGet`](docs/sdks/contractorpayments/README.md#get) - Get a single contractor payment
- [`useContractorPaymentsGetReceipt`](docs/sdks/contractorpayments/README.md#getreceipt) - Get a single contractor payment receipt
- [`useContractorPaymentsList`](docs/sdks/contractorpayments/README.md#list) - Get contractor payments for a company
- [`useContractorsCreateMutation`](docs/sdks/contractors/README.md#create) - Create a contractor
- [`useContractorsDeleteMutation`](docs/sdks/contractors/README.md#delete) - Delete a contractor
- [`useContractorsGet`](docs/sdks/contractors/README.md#get) - Get a contractor
- [`useContractorsGetAddress`](docs/sdks/contractors/README.md#getaddress) - Get a contractor address
- [`useContractorsGetOnboardingStatus`](docs/sdks/contractors/README.md#getonboardingstatus) - Get the contractor's onboarding status
- [`useContractorsGetV1CompaniesCompanyIdContractorsPaymentDetails`](docs/sdks/contractors/README.md#getv1companiescompanyidcontractorspaymentdetails) - List contractor payment details
- [`useContractorsList`](docs/sdks/contractors/README.md#list) - Get contractors of a company
- [`useContractorsUpdateAddressMutation`](docs/sdks/contractors/README.md#updateaddress) - Update a contractor's address
- [`useContractorsUpdateMutation`](docs/sdks/contractors/README.md#update) - Update a contractor
- [`useContractorsUpdateOnboardingStatusMutation`](docs/sdks/contractors/README.md#updateonboardingstatus) - Change the contractor's onboarding status
- [`useDepartmentsAddPeopleMutation`](docs/sdks/departments/README.md#addpeople) - Add people to a department
- [`useDepartmentsCreateMutation`](docs/sdks/departments/README.md#create) - Create a department
- [`useDepartmentsDeleteMutation`](docs/sdks/departments/README.md#delete) - Delete a department
- [`useDepartmentsGet`](docs/sdks/departments/README.md#get) - Get a department
- [`useDepartmentsGetAll`](docs/sdks/departments/README.md#getall) - Get all departments of a company
- [`useDepartmentsRemovePeopleMutation`](docs/sdks/departments/README.md#removepeople) - Remove people from a department
- [`useDepartmentsUpdateMutation`](docs/sdks/departments/README.md#update) - Update a department
- [`useEarningTypesCreateMutation`](docs/sdks/earningtypes/README.md#create) - Create a custom earning type
- [`useEarningTypesDeleteMutation`](docs/sdks/earningtypes/README.md#delete) - Deactivate an earning type
- [`useEarningTypesList`](docs/sdks/earningtypes/README.md#list) - Get all earning types for a company
- [`useEarningTypesUpdateMutation`](docs/sdks/earningtypes/README.md#update) - Update an earning type
- [`useEmployeeAddressesCreateMutation`](docs/sdks/employeeaddresses/README.md#create) - Create an employee's home address
- [`useEmployeeAddressesCreateWorkAddressMutation`](docs/sdks/employeeaddresses/README.md#createworkaddress) - Create an employee work address
- [`useEmployeeAddressesDeleteMutation`](docs/sdks/employeeaddresses/README.md#delete) - Delete an employee's home address
- [`useEmployeeAddressesDeleteWorkAddressMutation`](docs/sdks/employeeaddresses/README.md#deleteworkaddress) - Delete an employee's work address
- [`useEmployeeAddressesGet`](docs/sdks/employeeaddresses/README.md#get) - Get an employee's home addresses
- [`useEmployeeAddressesGetWorkAddresses`](docs/sdks/employeeaddresses/README.md#getworkaddresses) - Get an employee's work addresses
- [`useEmployeeAddressesRetrieveHomeAddress`](docs/sdks/employeeaddresses/README.md#retrievehomeaddress) - Get an employee's home address
- [`useEmployeeAddressesRetrieveWorkAddress`](docs/sdks/employeeaddresses/README.md#retrieveworkaddress) - Get an employee work address
- [`useEmployeeAddressesUpdateMutation`](docs/sdks/employeeaddresses/README.md#update) - Update an employee's home address
- [`useEmployeeAddressesUpdateWorkAddressMutation`](docs/sdks/employeeaddresses/README.md#updateworkaddress) - Update an employee work address
- [`useEmployeeBenefitsCreateMutation`](docs/sdks/employeebenefits/README.md#create) - Create an employee benefit
- [`useEmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutation`](docs/sdks/employeebenefits/README.md#createytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
- [`useEmployeeBenefitsDeleteMutation`](docs/sdks/employeebenefits/README.md#delete) - Delete an employee benefit
- [`useEmployeeBenefitsGet`](docs/sdks/employeebenefits/README.md#get) - Get all benefits for an employee
- [`useEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany`](docs/sdks/employeebenefits/README.md#getytdbenefitamountsfromdifferentcompany) - Get year-to-date benefit amounts from a different company
- [`useEmployeeBenefitsRetrieve`](docs/sdks/employeebenefits/README.md#retrieve) - Get an employee benefit
- [`useEmployeeBenefitsUpdateMutation`](docs/sdks/employeebenefits/README.md#update) - Update an employee benefit
- [`useEmployeeEmploymentsCreateRehireMutation`](docs/sdks/employeeemployments/README.md#createrehire) - Create an employee rehire
- [`useEmployeeEmploymentsCreateTerminationMutation`](docs/sdks/employeeemployments/README.md#createtermination) - Create an employee termination
- [`useEmployeeEmploymentsDeleteRehireMutation`](docs/sdks/employeeemployments/README.md#deleterehire) - Delete an employee rehire
- [`useEmployeeEmploymentsDeleteTerminationMutation`](docs/sdks/employeeemployments/README.md#deletetermination) - Delete an employee termination
- [`useEmployeeEmploymentsGetHistory`](docs/sdks/employeeemployments/README.md#gethistory) - Get employment history for an employee
- [`useEmployeeEmploymentsGetRehire`](docs/sdks/employeeemployments/README.md#getrehire) - Get an employee rehire
- [`useEmployeeEmploymentsGetTerminations`](docs/sdks/employeeemployments/README.md#getterminations) - Get terminations for an employee
- [`useEmployeeEmploymentsRehireMutation`](docs/sdks/employeeemployments/README.md#rehire) - Update an employee rehire
- [`useEmployeeEmploymentsUpdateTerminationMutation`](docs/sdks/employeeemployments/README.md#updatetermination) - Update an employee termination
- [`useEmployeeFormsGenerateW2Mutation`](docs/sdks/employeeforms/README.md#generatew2) - Generate a W2 form [DEMO]
- [`useEmployeeFormsGet`](docs/sdks/employeeforms/README.md#get) - Get an employee form
- [`useEmployeeFormsGetPdf`](docs/sdks/employeeforms/README.md#getpdf) - Get the employee form pdf
- [`useEmployeeFormsList`](docs/sdks/employeeforms/README.md#list) - Get all employee forms
- [`useEmployeeFormsSignMutation`](docs/sdks/employeeforms/README.md#sign) - Sign an employee form
- [`useEmployeePaymentMethodCreateMutation`](docs/sdks/employeepaymentmethod/README.md#create) - Create an employee bank account
- [`useEmployeePaymentMethodDeleteBankAccountMutation`](docs/sdks/employeepaymentmethod/README.md#deletebankaccount) - Delete an employee bank account
- [`useEmployeePaymentMethodGet`](docs/sdks/employeepaymentmethod/README.md#get) - Get an employee's payment method
- [`useEmployeePaymentMethodsGetBankAccounts`](docs/sdks/employeepaymentmethods/README.md#getbankaccounts) - Get all employee bank accounts
- [`useEmployeePaymentMethodUpdateBankAccountMutation`](docs/sdks/employeepaymentmethod/README.md#updatebankaccount) - Update an employee bank account
- [`useEmployeePaymentMethodUpdateMutation`](docs/sdks/employeepaymentmethod/README.md#update) - Update an employee's payment method
- [`useEmployeesCreateHistoricalMutation`](docs/sdks/employees/README.md#createhistorical) - Create a historical employee
- [`useEmployeesCreateMutation`](docs/sdks/employees/README.md#create) - Create an employee
- [`useEmployeesDeleteMutation`](docs/sdks/employees/README.md#delete) - Delete an onboarding employee
- [`useEmployeesGet`](docs/sdks/employees/README.md#get) - Get an employee
- [`useEmployeesGetCustomFields`](docs/sdks/employees/README.md#getcustomfields) - Get an employee's custom fields
- [`useEmployeesGetOnboardingStatus`](docs/sdks/employees/README.md#getonboardingstatus) - Get the employee's onboarding status
- [`useEmployeesGetTimeOffActivities`](docs/sdks/employees/README.md#gettimeoffactivities) - Get employee time off activities
- [`useEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetails`](docs/sdks/employees/README.md#getv1companiescompanyidemployeespaymentdetails) - Get employee payment details for a company
- [`useEmployeesList`](docs/sdks/employees/README.md#list) - Get employees of a company
- [`useEmployeesUpdateMutation`](docs/sdks/employees/README.md#update) - Update an employee.
- [`useEmployeesUpdateOnboardingDocumentsConfigMutation`](docs/sdks/employees/README.md#updateonboardingdocumentsconfig) - Update an employee's onboarding documents config
- [`useEmployeesUpdateOnboardingStatusMutation`](docs/sdks/employees/README.md#updateonboardingstatus) - Update the employee's onboarding status
- [`useEmployeeTaxSetupGetFederalTaxes`](docs/sdks/employeetaxsetup/README.md#getfederaltaxes) - Get an employee's federal taxes
- [`useEmployeeTaxSetupGetStateTaxes`](docs/sdks/employeetaxsetup/README.md#getstatetaxes) - Get an employee's state taxes
- [`useEmployeeTaxSetupUpdateFederalTaxesMutation`](docs/sdks/employeetaxsetup/README.md#updatefederaltaxes) - Update an employee's federal taxes
- [`useEmployeeTaxSetupUpdateStateTaxesMutation`](docs/sdks/employeetaxsetup/README.md#updatestatetaxes) - Update an employee's state taxes
- [`useEventsGet`](docs/sdks/events/README.md#get) - Get all events
- [`useExternalPayrollsCalculateTaxes`](docs/sdks/externalpayrolls/README.md#calculatetaxes) - Get tax suggestions for an external payroll
- [`useExternalPayrollsCreateMutation`](docs/sdks/externalpayrolls/README.md#create) - Create a new external payroll for a company
- [`useExternalPayrollsDeleteMutation`](docs/sdks/externalpayrolls/README.md#delete) - Delete an external payroll
- [`useExternalPayrollsFinalizeTaxLiabilitiesMutation`](docs/sdks/externalpayrolls/README.md#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls
- [`useExternalPayrollsGet`](docs/sdks/externalpayrolls/README.md#get) - Get external payrolls for a company
- [`useExternalPayrollsListTaxLiabilities`](docs/sdks/externalpayrolls/README.md#listtaxliabilities) - Get tax liabilities
- [`useExternalPayrollsRetrieve`](docs/sdks/externalpayrolls/README.md#retrieve) - Get an external payroll
- [`useExternalPayrollsUpdateMutation`](docs/sdks/externalpayrolls/README.md#update) - Update an external payroll
- [`useExternalPayrollsUpdateTaxLiabilitiesMutation`](docs/sdks/externalpayrolls/README.md#updatetaxliabilities) - Update tax liabilities
- [`useFederalTaxDetailsGet`](docs/sdks/federaltaxdetails/README.md#get) - Get Federal Tax Details
- [`useFederalTaxDetailsUpdateMutation`](docs/sdks/federaltaxdetails/README.md#update) - Update Federal Tax Details
- [`useFlowsCreateMutation`](docs/sdks/flows/README.md#create) - Create a flow
- [`useGarnishmentsCreateMutation`](docs/sdks/garnishments/README.md#create) - Create a garnishment
- [`useGarnishmentsGet`](docs/sdks/garnishments/README.md#get) - Get a garnishment
- [`useGarnishmentsGetChildSupportData`](docs/sdks/garnishments/README.md#getchildsupportdata) - Get child support garnishment data
- [`useGarnishmentsList`](docs/sdks/garnishments/README.md#list) - Get garnishments for an employee
- [`useGarnishmentsUpdateMutation`](docs/sdks/garnishments/README.md#update) - Update a garnishment
- [`useGeneratedDocumentsGet`](docs/sdks/generateddocuments/README.md#get) - Get a generated document
- [`useHistoricalEmployeesUpdateMutation`](docs/sdks/historicalemployees/README.md#update) - Update a historical employee
- [`useHolidayPayPoliciesAddEmployeesMutation`](docs/sdks/holidaypaypolicies/README.md#addemployees) - Add employees to a company's holiday pay policy
- [`useHolidayPayPoliciesCreateMutation`](docs/sdks/holidaypaypolicies/README.md#create) - Create a holiday pay policy for a company
- [`useHolidayPayPoliciesDeleteMutation`](docs/sdks/holidaypaypolicies/README.md#delete) - Delete a company's holiday pay policy
- [`useHolidayPayPoliciesGet`](docs/sdks/holidaypaypolicies/README.md#get) - Get a company's holiday pay policy
- [`useHolidayPayPoliciesRemoveEmployeesMutation`](docs/sdks/holidaypaypolicies/README.md#removeemployees) - Remove employees from a company's holiday pay policy
- [`useHolidayPayPoliciesUpdateMutation`](docs/sdks/holidaypaypolicies/README.md#update) - Update a company's holiday pay policy
- [`useI9VerificationCreateDocumentsMutation`](docs/sdks/i9verification/README.md#createdocuments) - Create an employee's I-9 authorization verification documents
- [`useI9VerificationDeleteDocumentMutation`](docs/sdks/i9verification/README.md#deletedocument) - Delete an employee's I-9 verification document
- [`useI9VerificationEmployerSignMutation`](docs/sdks/i9verification/README.md#employersign) - Employer sign an employee's Form I-9
- [`useI9VerificationGetAuthorization`](docs/sdks/i9verification/README.md#getauthorization) - Get an employee's I-9 authorization
- [`useI9VerificationGetDocumentOptions`](docs/sdks/i9verification/README.md#getdocumentoptions) - Get an employee's I-9 verification document options
- [`useI9VerificationGetDocuments`](docs/sdks/i9verification/README.md#getdocuments) - Get an employee's I-9 verification documents
- [`useI9VerificationUpdateMutation`](docs/sdks/i9verification/README.md#update) - Create or update an employee's I-9 authorization
- [`useIndustrySelectionGet`](docs/sdks/industryselection/README.md#get) - Get a company industry selection
- [`useIndustrySelectionUpdateMutation`](docs/sdks/industryselection/README.md#update) - Update a company industry selection
- [`useInformationRequestsGetInformationRequests`](docs/sdks/informationrequests/README.md#getinformationrequests) - Get all information requests for a company
- [`useIntrospectionGetInfo`](docs/sdks/introspection/README.md#getinfo) - Get info about the current access token
- [`useIntrospectionRefreshTokenMutation`](docs/sdks/introspection/README.md#refreshtoken) - Refresh access token
- [`useInvoicesGet`](docs/sdks/invoices/README.md#get) - Retrieve invoicing data for companies
- [`useJobsAndCompensationsCreateCompensationMutation`](docs/sdks/jobsandcompensations/README.md#createcompensation) - Create a compensation
- [`useJobsAndCompensationsCreateJobMutation`](docs/sdks/jobsandcompensations/README.md#createjob) - Create a job
- [`useJobsAndCompensationsDeleteCompensationMutation`](docs/sdks/jobsandcompensations/README.md#deletecompensation) - Delete a compensation
- [`useJobsAndCompensationsDeleteMutation`](docs/sdks/jobsandcompensations/README.md#delete) - Delete an individual job
- [`useJobsAndCompensationsGetCompensation`](docs/sdks/jobsandcompensations/README.md#getcompensation) - Get a compensation
- [`useJobsAndCompensationsGetCompensations`](docs/sdks/jobsandcompensations/README.md#getcompensations) - Get compensations for a job
- [`useJobsAndCompensationsGetJob`](docs/sdks/jobsandcompensations/README.md#getjob) - Get a job
- [`useJobsAndCompensationsGetJobs`](docs/sdks/jobsandcompensations/README.md#getjobs) - Get jobs for an employee
- [`useJobsAndCompensationsUpdateCompensationMutation`](docs/sdks/jobsandcompensations/README.md#updatecompensation) - Update a compensation
- [`useJobsAndCompensationsUpdateMutation`](docs/sdks/jobsandcompensations/README.md#update) - Update a job
- [`useLocationsCreateMutation`](docs/sdks/locations/README.md#create) - Create a company location
- [`useLocationsGet`](docs/sdks/locations/README.md#get) - Get company locations
- [`useLocationsGetMinimumWages`](docs/sdks/locations/README.md#getminimumwages) - Get minimum wages for a location
- [`useLocationsRetrieve`](docs/sdks/locations/README.md#retrieve) - Get a location
- [`useLocationsUpdateMutation`](docs/sdks/locations/README.md#update) - Update a location
- [`useNotificationsGetCompanyNotifications`](docs/sdks/notifications/README.md#getcompanynotifications) - Get notifications for company
- [`useNotificationsGetDetails`](docs/sdks/notifications/README.md#getdetails) - Get a notification's details
- [`usePaymentConfigsGet`](docs/sdks/paymentconfigs/README.md#get) - Get a company's payment configs
- [`usePaymentConfigsUpdateMutation`](docs/sdks/paymentconfigs/README.md#update) - Update a company's payment configs
- [`usePayrollsCalculateGrossUpMutation`](docs/sdks/payrolls/README.md#calculategrossup) - Calculate gross up
- [`usePayrollsCalculateMutation`](docs/sdks/payrolls/README.md#calculate) - Calculate a payroll
- [`usePayrollsCancelMutation`](docs/sdks/payrolls/README.md#cancel) - Cancel a payroll
- [`usePayrollsCreateOffCycleMutation`](docs/sdks/payrolls/README.md#createoffcycle) - Create an off-cycle payroll
- [`usePayrollsDeleteMutation`](docs/sdks/payrolls/README.md#delete) - Delete a payroll
- [`usePayrollsGeneratePrintableChecksMutation`](docs/sdks/payrolls/README.md#generateprintablechecks) - Generate printable payroll checks (pdf)
- [`usePayrollsGet`](docs/sdks/payrolls/README.md#get) - Get a single payroll
- [`usePayrollsGetApprovedReversals`](docs/sdks/payrolls/README.md#getapprovedreversals) - Get approved payroll reversals
- [`usePayrollsGetBlockers`](docs/sdks/payrolls/README.md#getblockers) - Get all payroll blockers for a company
- [`usePayrollsGetPayStub`](docs/sdks/payrolls/README.md#getpaystub) - Get an employee pay stub (pdf)
- [`usePayrollsGetPayStubs`](docs/sdks/payrolls/README.md#getpaystubs) - Get an employee's pay stubs
- [`usePayrollsGetReceipt`](docs/sdks/payrolls/README.md#getreceipt) - Get a single payroll receipt
- [`usePayrollsGetV1CompaniesCompanyIdPayrollsIdPartnerDisbursements`](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrollsidpartnerdisbursements) - Get partner disbursements for a payroll
- [`usePayrollsList`](docs/sdks/payrolls/README.md#list) - Get all payrolls for a company
- [`usePayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutation`](docs/sdks/payrolls/README.md#patchv1companiescompanyidpayrollsidpartnerdisbursements) - Update partner disbursements for a payroll
- [`usePayrollsPrepareMutation`](docs/sdks/payrolls/README.md#prepare) - Prepare a payroll for update
- [`usePayrollsSkipMutation`](docs/sdks/payrolls/README.md#skip) - Skip a payroll
- [`usePayrollsSubmitMutation`](docs/sdks/payrolls/README.md#submit) - Submit payroll
- [`usePayrollsUpdateMutation`](docs/sdks/payrolls/README.md#update) - Update a payroll by ID
- [`usePaySchedulesAssignMutation`](docs/sdks/payschedules/README.md#assign) - Assign pay schedules for a company
- [`usePaySchedulesCreateMutation`](docs/sdks/payschedules/README.md#create) - Create a new pay schedule
- [`usePaySchedulesGet`](docs/sdks/payschedules/README.md#get) - Get a pay schedule
- [`usePaySchedulesGetAll`](docs/sdks/payschedules/README.md#getall) - Get the pay schedules for a company
- [`usePaySchedulesGetAssignments`](docs/sdks/payschedules/README.md#getassignments) - Get pay schedule assignments for a company
- [`usePaySchedulesGetPayPeriods`](docs/sdks/payschedules/README.md#getpayperiods) - Get pay periods for a company
- [`usePaySchedulesGetPreview`](docs/sdks/payschedules/README.md#getpreview) - Preview pay schedule dates
- [`usePaySchedulesGetUnprocessedTerminationPeriods`](docs/sdks/payschedules/README.md#getunprocessedterminationperiods) - Get termination pay periods for a company
- [`usePaySchedulesPreviewAssignmentMutation`](docs/sdks/payschedules/README.md#previewassignment) - Preview pay schedule assignments for a company
- [`usePaySchedulesUpdateMutation`](docs/sdks/payschedules/README.md#update) - Update a pay schedule
- [`useRecoveryCasesGet`](docs/sdks/recoverycases/README.md#get) - Get all recovery cases for a company
- [`useRecoveryCasesRedebitMutation`](docs/sdks/recoverycases/README.md#redebit) - Initiate a redebit for a recovery case
- [`useReimbursementsDeleteV1RecurringReimbursementsMutation`](docs/sdks/reimbursements/README.md#deletev1recurringreimbursements) - Delete a recurring reimbursement
- [`useReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements`](docs/sdks/reimbursements/README.md#getv1employeesemployeeidrecurringreimbursements) - Get recurring reimbursements for an employee
- [`useReimbursementsGetV1RecurringReimbursements`](docs/sdks/reimbursements/README.md#getv1recurringreimbursements) - Get a recurring reimbursement
- [`useReimbursementsPostV1EmployeesEmployeeIdRecurringReimbursementsMutation`](docs/sdks/reimbursements/README.md#postv1employeesemployeeidrecurringreimbursements) - Create a recurring reimbursement
- [`useReimbursementsPutV1RecurringReimbursementsMutation`](docs/sdks/reimbursements/README.md#putv1recurringreimbursements) - Update a recurring reimbursement
- [`useReportsCreateCustomMutation`](docs/sdks/reports/README.md#createcustom) - Create a custom report
- [`useReportsGetReportsRequestUuid`](docs/sdks/reports/README.md#getreportsrequestuuid) - Get a report
- [`useReportsGetTemplate`](docs/sdks/reports/README.md#gettemplate) - Get a report template
- [`useReportsPostPayrollsPayrollUuidReportsGeneralLedgerMutation`](docs/sdks/reports/README.md#postpayrollspayrolluuidreportsgeneralledger) - Create a general ledger report
- [`useSalaryEstimatesGetV1SalaryEstimatesId`](docs/sdks/salaryestimates/README.md#getv1salaryestimatesid) - Get a salary estimate
- [`useSalaryEstimatesGetV1SalaryEstimatesOccupations`](docs/sdks/salaryestimates/README.md#getv1salaryestimatesoccupations) - Search for BLS occupations
- [`useSalaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimatesMutation`](docs/sdks/salaryestimates/README.md#postv1employeesemployeeidsalaryestimates) - Create a salary estimate for an employee
- [`useSalaryEstimatesPostV1SalaryEstimatesUuidAcceptMutation`](docs/sdks/salaryestimates/README.md#postv1salaryestimatesuuidaccept) - Accept a salary estimate
- [`useSalaryEstimatesPutV1SalaryEstimatesIdMutation`](docs/sdks/salaryestimates/README.md#putv1salaryestimatesid) - Update a salary estimate
- [`useSignatoriesCreateMutation`](docs/sdks/signatories/README.md#create) - Create a signatory
- [`useSignatoriesDeleteMutation`](docs/sdks/signatories/README.md#delete) - Delete a signatory
- [`useSignatoriesInviteMutation`](docs/sdks/signatories/README.md#invite) - Invite a signatory
- [`useSignatoriesList`](docs/sdks/signatories/README.md#list) - Get all company signatories
- [`useSignatoriesUpdateMutation`](docs/sdks/signatories/README.md#update) - Update a signatory
- [`useTaxRequirementsGet`](docs/sdks/taxrequirements/README.md#get) - Get State Tax Requirements
- [`useTaxRequirementsGetAll`](docs/sdks/taxrequirements/README.md#getall) - Get All Tax Requirement States
- [`useTaxRequirementsUpdateStateMutation`](docs/sdks/taxrequirements/README.md#updatestate) - Update State Tax Requirements
- [`useTimeOffPoliciesAddEmployeesMutation`](docs/sdks/timeoffpolicies/README.md#addemployees) - Add employees to a time off policy
- [`useTimeOffPoliciesCalculateAccruingTimeOffHoursMutation`](docs/sdks/timeoffpolicies/README.md#calculateaccruingtimeoffhours) - Calculate accruing time off hours
- [`useTimeOffPoliciesCreateMutation`](docs/sdks/timeoffpolicies/README.md#create) - Create a time off policy
- [`useTimeOffPoliciesDeactivateMutation`](docs/sdks/timeoffpolicies/README.md#deactivate) - Deactivate a time off policy
- [`useTimeOffPoliciesGet`](docs/sdks/timeoffpolicies/README.md#get) - Get a time off policy
- [`useTimeOffPoliciesGetAll`](docs/sdks/timeoffpolicies/README.md#getall) - Get all time off policies
- [`useTimeOffPoliciesRemoveEmployeesMutation`](docs/sdks/timeoffpolicies/README.md#removeemployees) - Remove employees from a time off policy
- [`useTimeOffPoliciesUpdateBalanceMutation`](docs/sdks/timeoffpolicies/README.md#updatebalance) - Update employee time off hour balances
- [`useTimeOffPoliciesUpdateMutation`](docs/sdks/timeoffpolicies/README.md#update) - Update a time off policy
- [`useWebhooksCreateSubscriptionMutation`](docs/sdks/webhooks/README.md#createsubscription) - Create a webhook subscription
- [`useWebhooksDeleteSubscriptionMutation`](docs/sdks/webhooks/README.md#deletesubscription) - Delete a webhook subscription
- [`useWebhooksGetSubscription`](docs/sdks/webhooks/README.md#getsubscription) - Get a webhook subscription
- [`useWebhooksGetV1WebhooksHealthCheck`](docs/sdks/webhooks/README.md#getv1webhookshealthcheck) - Get the webhooks health status
- [`useWebhooksListSubscriptions`](docs/sdks/webhooks/README.md#listsubscriptions) - List webhook subscriptions
- [`useWebhooksRequestVerificationToken`](docs/sdks/webhooks/README.md#requestverificationtoken) - Request the webhook subscription verification_token
- [`useWebhooksUpdateSubscriptionMutation`](docs/sdks/webhooks/README.md#updatesubscription) - Update a webhook subscription
- [`useWebhooksVerifyMutation`](docs/sdks/webhooks/README.md#verify) - Verify the webhook subscription
- [`useWireInRequestsGet`](docs/sdks/wireinrequests/README.md#get) - Get a single Wire In Request
- [`useWireInRequestsList`](docs/sdks/wireinrequests/README.md#list) - Get all Wire In Requests for a company
- [`useWireInRequestsSubmitMutation`](docs/sdks/wireinrequests/README.md#submit) - Submit a wire in request

</details>
<!-- End React hooks with TanStack Query [react-query] -->

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
import { GustoEmbedded } from "@gusto/embedded-api";
import { openAsBlob } from "node:fs";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyAttachments.create({
    companyId: "<id>",
    requestBody: {
      document: await openAsBlob("example.file"),
      category: "gep_notice",
    },
  });

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
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({}, {
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

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

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
  const result = await gustoEmbedded.introspection.getInfo({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`GustoEmbeddedError`](./src/models/errors/gustoembeddederror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { GustoEmbeddedError } from "@gusto/embedded-api/models/errors/gustoembeddederror.js.js";
import { UnprocessableEntityErrorObject } from "@gusto/embedded-api/models/errors/unprocessableentityerrorobject.js";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  try {
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

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof GustoEmbeddedError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof UnprocessableEntityErrorObject) {
        console.log(error.data$.errors); // EntityErrorObject[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`GustoEmbeddedError`](./src/models/errors/gustoembeddederror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (12)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`GustoEmbeddedError`](./src/models/errors/gustoembeddederror.ts)**:
* [`UnprocessableEntityErrorObject`](./src/models/errors/unprocessableentityerrorobject.ts): Unprocessable Entity    This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details. Applicable to 149 of 271 methods.*
* [`NotFoundErrorObject`](./src/models/errors/notfounderrorobject.ts): Not Found     The requested resource does not exist. Make sure the provided ID/UUID is valid. Status code `404`. Applicable to 4 of 271 methods.*
* [`UnprocessableEntityErrorObject1`](./src/models/errors/unprocessableentityerrorobject1.ts): Unprocessable Entity    This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details. Status code `422`. Applicable to 4 of 271 methods.*
* [`PayrollBlockersError`](./src/models/errors/payrollblockerserror.ts): Payroll Blockers Error  For detailed information, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers). Status code `422`. Applicable to 4 of 271 methods.*
* [`DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody`](./src/models/errors/deletev1companybenefitscompanybenefitidresponsebody.ts): Unprocessable Entity. Status code `422`. Applicable to 1 of 271 methods.*
* [`CompanySuspensionCreationErrors`](./src/models/errors/companysuspensioncreationerrors.ts): Unprocessable Entity    This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details. Status code `422`. Applicable to 1 of 271 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name   | Server                       | Description |
| ------ | ---------------------------- | ----------- |
| `demo` | `https://api.gusto-demo.com` | Demo        |
| `prod` | `https://api.gusto.com`      | Prod        |

#### Example

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  server: "demo",
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  serverURL: "https://api.gusto-demo.com",
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

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
import { GustoEmbedded } from "@gusto/embedded-api";
import { HTTPClient } from "@gusto/embedded-api/lib/http";

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

const sdk = new GustoEmbedded({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

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
