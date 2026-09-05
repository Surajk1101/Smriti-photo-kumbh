/**
 * Utility helper to parse and format Instagram handles and URLs cleanly
 */
export interface InstagramInfo {
  handle: string; // e.g. '@samriddhi.photo'
  username: string; // e.g. 'samriddhi.photo'
  url: string; // e.g. 'https://www.instagram.com/samriddhi.photo/'
}

export function parseInstagram(input?: string): InstagramInfo {
  const fallback = {
    handle: '@samriddhi.photo',
    username: 'samriddhi.photo',
    url: 'https://www.instagram.com/samriddhi.photo/',
  };

  if (!input || !input.trim()) {
    return fallback;
  }

  const clean = input.trim();

  // If it's a full URL
  if (clean.startsWith('http://') || clean.startsWith('https://') || clean.includes('instagram.com/')) {
    const match = clean.match(/instagram\.com\/([a-zA-Z0-9._]+)/i);
    if (match && match[1]) {
      const username = match[1].replace(/\/$/, '');
      return {
        handle: `@${username}`,
        username,
        url: clean.startsWith('http') ? clean : `https://${clean}`,
      };
    }
  }

  // It's a username or @handle
  const username = clean.replace(/^@/, '').replace(/\/$/, '');
  return {
    handle: `@${username}`,
    username,
    url: `https://www.instagram.com/${username}/`,
  };
}
