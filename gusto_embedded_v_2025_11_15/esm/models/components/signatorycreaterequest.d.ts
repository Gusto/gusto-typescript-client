import * as z from "zod/v3";
import { RFCDate } from "../../types/rfcdate.js";
/**
 * The signatory's home address.
 */
export type HomeAddress = {
    street1: string;
    street2?: string | undefined;
    city: string;
    state: string;
    zip: string;
    country?: string | undefined;
};
/**
 * Request body for creating a signatory with complete information. All listed required fields must be provided.
 */
export type SignatoryCreateRequest = {
    /**
     * The signatory's first name.
     */
    firstName: string;
    /**
     * The signatory's last name.
     */
    lastName: string;
    /**
     * The signatory's title (e.g. CEO, President).
     */
    title: string;
    /**
     * The signatory's phone number.
     */
    phone: string;
    /**
     * The signatory's date of birth.
     */
    birthday: RFCDate;
    /**
     * The signatory's email address.
     */
    email: string;
    /**
     * The signatory's SSN.
     */
    ssn: string;
    /**
     * The signatory's home address.
     */
    homeAddress: HomeAddress;
};
/** @internal */
export type HomeAddress$Outbound = {
    street_1: string;
    street_2?: string | undefined;
    city: string;
    state: string;
    zip: string;
    country: string;
};
/** @internal */
export declare const HomeAddress$outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
export declare function homeAddressToJSON(homeAddress: HomeAddress): string;
/** @internal */
export type SignatoryCreateRequest$Outbound = {
    first_name: string;
    last_name: string;
    title: string;
    phone: string;
    birthday: string;
    email: string;
    ssn: string;
    home_address: HomeAddress$Outbound;
};
/** @internal */
export declare const SignatoryCreateRequest$outboundSchema: z.ZodType<SignatoryCreateRequest$Outbound, z.ZodTypeDef, SignatoryCreateRequest>;
export declare function signatoryCreateRequestToJSON(signatoryCreateRequest: SignatoryCreateRequest): string;
//# sourceMappingURL=signatorycreaterequest.d.ts.map