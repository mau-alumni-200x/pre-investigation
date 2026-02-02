/**
 * Generate asset path with base URL
 * @param {string} path - Asset path (e.g., 'assets/imgs/logo.svg')
 * @returns {string} Full path with base URL
 */
export const asset = (path) => `${import.meta.env.BASE_URL}/${path}`;
