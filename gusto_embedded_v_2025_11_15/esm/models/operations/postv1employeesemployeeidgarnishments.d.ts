import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Garnishment } from "../components/garnishment.js";
import { GarnishmentChildSupport, GarnishmentChildSupport$Outbound } from "../components/garnishmentchildsupport.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The specific type of garnishment for court ordered garnishments.
 */
export declare const GarnishmentType: {
    readonly ChildSupport: "child_support";
    readonly FederalTaxLien: "federal_tax_lien";
    readonly StateTaxLien: "state_tax_lien";
    readonly StudentLoan: "student_loan";
    readonly CreditorGarnishment: "creditor_garnishment";
    readonly FederalLoan: "federal_loan";
    readonly OtherGarnishment: "other_garnishment";
};
/**
 * The specific type of garnishment for court ordered garnishments.
 */
export type GarnishmentType = ClosedEnum<typeof GarnishmentType>;
export type PostV1EmployeesEmployeeIdGarnishmentsRequestBody = {
    /**
     * Whether or not this garnishment is currently active.
     */
    active?: boolean | undefined;
    /**
     * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
     */
    amount: string;
    /**
     * The description of the garnishment.
     */
    description?: string | undefined;
    /**
     * Whether the garnishment is court ordered.
     */
    courtOrdered: boolean;
    /**
     * The specific type of garnishment for court ordered garnishments.
     */
    garnishmentType?: GarnishmentType | null | undefined;
    /**
     * The number of times to apply the garnishment. Ignored if recurring is true.
     */
    times?: number | null | undefined;
    /**
     * Whether the garnishment should recur indefinitely.
     */
    recurring?: boolean | undefined;
    /**
     * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
     */
    annualMaximum?: string | null | undefined;
    /**
     * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
     */
    payPeriodMaximum?: string | null | undefined;
    /**
     * Whether the amount should be treated as a percentage to be deducted per pay period.
     */
    deductAsPercentage?: boolean | undefined;
    /**
     * A maximum total deduction for the lifetime of this garnishment. A null value indicates no maximum.
     */
    totalAmount?: string | null | undefined;
    /**
     * Additional child support order details
     */
    childSupport?: GarnishmentChildSupport | null | undefined;
};
export type PostV1EmployeesEmployeeIdGarnishmentsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody;
};
export type PostV1EmployeesEmployeeIdGarnishmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    garnishment?: Garnishment | undefined;
};
/** @internal */
export declare const GarnishmentType$outboundSchema: z.ZodNativeEnum<typeof GarnishmentType>;
/** @internal */
export type PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound = {
    active: boolean;
    amount: string;
    description?: string | undefined;
    court_ordered: boolean;
    garnishment_type?: string | null | undefined;
    times: number | null;
    recurring: boolean;
    annual_maximum: string | null;
    pay_period_maximum: string | null;
    deduct_as_percentage: boolean;
    total_amount?: string | null | undefined;
    child_support?: GarnishmentChildSupport$Outbound | null | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdGarnishmentsRequestBody>;
export declare function postV1EmployeesEmployeeIdGarnishmentsRequestBodyToJSON(postV1EmployeesEmployeeIdGarnishmentsRequestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody): string;
/** @internal */
export type PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdGarnishmentsRequest>;
export declare function postV1EmployeesEmployeeIdGarnishmentsRequestToJSON(postV1EmployeesEmployeeIdGarnishmentsRequest: PostV1EmployeesEmployeeIdGarnishmentsRequest): string;
/** @internal */
export declare const PostV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdGarnishmentsResponse, z.ZodTypeDef, unknown>;
export declare function postV1EmployeesEmployeeIdGarnishmentsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdGarnishmentsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidgarnishments.d.ts.map