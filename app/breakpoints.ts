/**
 * using a desktop first approach, we define our breakpoints as the following
 * phone: 600px - 37.5rem
 * tablet: 950px - 59.375rem
 * desktop: 1300px - 81.25rem
 */

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
} as const;

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
} as const;
