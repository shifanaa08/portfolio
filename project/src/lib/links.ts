const PLACEHOLDER_PREFIX = '#replace-';

export const isLinkConfigured = (url: string) => url.length > 0 && !url.startsWith(PLACEHOLDER_PREFIX);
