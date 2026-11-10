/** Open off-site links in a new tab, safely. */
export function linkProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }
}
