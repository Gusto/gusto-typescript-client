/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export const RecipientType = {
  Company: "Company",
  Employee: "Employee",
  Contractor: "Contractor",
} as const;
/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export type RecipientType = ClosedEnum<typeof RecipientType>;

export type Pages = {
  /**
   * Image URL for the page
   */
  imageUrl?: string | undefined;
  /**
   * Page number
   */
  pageNumber?: number | undefined;
};

export type Fields = {
  /**
   * Unique identifier of the field
   */
  key?: string | undefined;
  /**
   * Auto-filled value of the field
   */
  value?: string | null | undefined;
  /**
   * X-coordinate location of the field on the page
   */
  x?: number | undefined;
  /**
   * Y-coordinate location of the field on the page
   */
  y?: number | undefined;
  /**
   * Width of the field
   */
  width?: number | undefined;
  /**
   * Height of the field
   */
  height?: number | undefined;
  /**
   * Page number of the field
   */
  pageNumber?: number | undefined;
  /**
   * The field's data type
   */
  dataType?: string | undefined;
  /**
   * Whether the field is required
   */
  required?: boolean | undefined;
};

export type Document = {
  /**
   * The UUID of the document
   */
  uuid?: string | undefined;
  /**
   * The title of the document
   */
  title?: string | undefined;
  /**
   * The type identifier of the document
   */
  name?: string | undefined;
  /**
   * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
   */
  recipientType?: RecipientType | undefined;
  /**
   * Unique identifier for the recipient associated with the document
   */
  recipientUuid?: string | undefined;
  /**
   * List of the document's pages and associated image URLs. This is only returned for documents with `required_signing` = `true`, and can be used for signing preparation.
   */
  pages?: Array<Pages> | undefined;
  /**
   * List of the document's fields and associated data. Values are set for auto-filled fields. This is only returned for documents with `required_signing` = `true`, and can be used for signing preparation.
   */
  fields?: Array<Fields> | undefined;
  /**
   * When the document was signed (will be `null` if unsigned)
   */
  signedAt?: string | null | undefined;
  /**
   * The description of the document
   */
  description?: string | undefined;
  /**
   * A boolean flag that indicates whether the document needs signing or not. Note that this value will change after the document is signed.
   */
  requiresSigning?: boolean | undefined;
  /**
   * If the document is in a draft state
   */
  draft?: boolean | undefined;
  /**
   * The year of this document. This value is nullable and will not be present on all documents.
   */
  year?: number | null | undefined;
  /**
   * The quarter of this document. This value is nullable and will not be present on all documents.
   */
  quarter?: number | null | undefined;
};

/** @internal */
export const RecipientType$inboundSchema: z.ZodNativeEnum<
  typeof RecipientType
> = z.nativeEnum(RecipientType);

/** @internal */
export const RecipientType$outboundSchema: z.ZodNativeEnum<
  typeof RecipientType
> = RecipientType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientType$ {
  /** @deprecated use `RecipientType$inboundSchema` instead. */
  export const inboundSchema = RecipientType$inboundSchema;
  /** @deprecated use `RecipientType$outboundSchema` instead. */
  export const outboundSchema = RecipientType$outboundSchema;
}

/** @internal */
export const Pages$inboundSchema: z.ZodType<Pages, z.ZodTypeDef, unknown> = z
  .object({
    image_url: z.string().optional(),
    page_number: z.number().int().optional(),
  }).transform((v) => {
    return remap$(v, {
      "image_url": "imageUrl",
      "page_number": "pageNumber",
    });
  });

/** @internal */
export type Pages$Outbound = {
  image_url?: string | undefined;
  page_number?: number | undefined;
};

/** @internal */
export const Pages$outboundSchema: z.ZodType<
  Pages$Outbound,
  z.ZodTypeDef,
  Pages
> = z.object({
  imageUrl: z.string().optional(),
  pageNumber: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
    pageNumber: "page_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pages$ {
  /** @deprecated use `Pages$inboundSchema` instead. */
  export const inboundSchema = Pages$inboundSchema;
  /** @deprecated use `Pages$outboundSchema` instead. */
  export const outboundSchema = Pages$outboundSchema;
  /** @deprecated use `Pages$Outbound` instead. */
  export type Outbound = Pages$Outbound;
}

export function pagesToJSON(pages: Pages): string {
  return JSON.stringify(Pages$outboundSchema.parse(pages));
}

export function pagesFromJSON(
  jsonString: string,
): SafeParseResult<Pages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pages' from JSON`,
  );
}

/** @internal */
export const Fields$inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown> = z
  .object({
    key: z.string().optional(),
    value: z.nullable(z.string()).optional(),
    x: z.number().int().optional(),
    y: z.number().int().optional(),
    width: z.number().int().optional(),
    height: z.number().int().optional(),
    page_number: z.number().int().optional(),
    data_type: z.string().optional(),
    required: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "page_number": "pageNumber",
      "data_type": "dataType",
    });
  });

/** @internal */
export type Fields$Outbound = {
  key?: string | undefined;
  value?: string | null | undefined;
  x?: number | undefined;
  y?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  page_number?: number | undefined;
  data_type?: string | undefined;
  required?: boolean | undefined;
};

/** @internal */
export const Fields$outboundSchema: z.ZodType<
  Fields$Outbound,
  z.ZodTypeDef,
  Fields
> = z.object({
  key: z.string().optional(),
  value: z.nullable(z.string()).optional(),
  x: z.number().int().optional(),
  y: z.number().int().optional(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  pageNumber: z.number().int().optional(),
  dataType: z.string().optional(),
  required: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    pageNumber: "page_number",
    dataType: "data_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Fields$ {
  /** @deprecated use `Fields$inboundSchema` instead. */
  export const inboundSchema = Fields$inboundSchema;
  /** @deprecated use `Fields$outboundSchema` instead. */
  export const outboundSchema = Fields$outboundSchema;
  /** @deprecated use `Fields$Outbound` instead. */
  export type Outbound = Fields$Outbound;
}

export function fieldsToJSON(fields: Fields): string {
  return JSON.stringify(Fields$outboundSchema.parse(fields));
}

export function fieldsFromJSON(
  jsonString: string,
): SafeParseResult<Fields, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Fields$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Fields' from JSON`,
  );
}

/** @internal */
export const Document$inboundSchema: z.ZodType<
  Document,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  title: z.string().optional(),
  name: z.string().optional(),
  recipient_type: RecipientType$inboundSchema.optional(),
  recipient_uuid: z.string().optional(),
  pages: z.array(z.lazy(() => Pages$inboundSchema)).optional(),
  fields: z.array(z.lazy(() => Fields$inboundSchema)).optional(),
  signed_at: z.nullable(z.string()).optional(),
  description: z.string().optional(),
  requires_signing: z.boolean().optional(),
  draft: z.boolean().optional(),
  year: z.nullable(z.number().int()).optional(),
  quarter: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "recipient_type": "recipientType",
    "recipient_uuid": "recipientUuid",
    "signed_at": "signedAt",
    "requires_signing": "requiresSigning",
  });
});

/** @internal */
export type Document$Outbound = {
  uuid?: string | undefined;
  title?: string | undefined;
  name?: string | undefined;
  recipient_type?: string | undefined;
  recipient_uuid?: string | undefined;
  pages?: Array<Pages$Outbound> | undefined;
  fields?: Array<Fields$Outbound> | undefined;
  signed_at?: string | null | undefined;
  description?: string | undefined;
  requires_signing?: boolean | undefined;
  draft?: boolean | undefined;
  year?: number | null | undefined;
  quarter?: number | null | undefined;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<
  Document$Outbound,
  z.ZodTypeDef,
  Document
> = z.object({
  uuid: z.string().optional(),
  title: z.string().optional(),
  name: z.string().optional(),
  recipientType: RecipientType$outboundSchema.optional(),
  recipientUuid: z.string().optional(),
  pages: z.array(z.lazy(() => Pages$outboundSchema)).optional(),
  fields: z.array(z.lazy(() => Fields$outboundSchema)).optional(),
  signedAt: z.nullable(z.string()).optional(),
  description: z.string().optional(),
  requiresSigning: z.boolean().optional(),
  draft: z.boolean().optional(),
  year: z.nullable(z.number().int()).optional(),
  quarter: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    recipientType: "recipient_type",
    recipientUuid: "recipient_uuid",
    signedAt: "signed_at",
    requiresSigning: "requires_signing",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
  /** @deprecated use `Document$inboundSchema` instead. */
  export const inboundSchema = Document$inboundSchema;
  /** @deprecated use `Document$outboundSchema` instead. */
  export const outboundSchema = Document$outboundSchema;
  /** @deprecated use `Document$Outbound` instead. */
  export type Outbound = Document$Outbound;
}

export function documentToJSON(document: Document): string {
  return JSON.stringify(Document$outboundSchema.parse(document));
}

export function documentFromJSON(
  jsonString: string,
): SafeParseResult<Document, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Document$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Document' from JSON`,
  );
}
