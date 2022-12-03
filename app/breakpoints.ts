/**
 * using a desktop first approach, we define our breakpoints as the following
 * phone: 600px - 37.5rem
 * tablet: 950px - 59.375rem
 * desktop: 1300px - 81.25rem
 */

export const BREAKPOINTS = {
  mobileMax: "37.5rem",
  tabletMax: "59.375rem",
  laptopMax: "81.25rem",
} as const;

export const QUERIES = {
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax})`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax})`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax})`,
} as const;
