export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// Countries that should default to Spanish
export const spanishCountries = [
  "ES", // Spain
  "MX", // Mexico
  "AR", // Argentina
  "CO", // Colombia
  "PE", // Peru
  "VE", // Venezuela
  "CL", // Chile
  "EC", // Ecuador
  "GT", // Guatemala
  "CU", // Cuba
  "BO", // Bolivia
  "DO", // Dominican Republic
  "HN", // Honduras
  "PY", // Paraguay
  "SV", // El Salvador
  "NI", // Nicaragua
  "CR", // Costa Rica
  "PA", // Panama
  "UY", // Uruguay
  "PR", // Puerto Rico
];
