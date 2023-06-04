import version from '../version'

export class ResourceUrls {
  static create(): ResourceUrls {
    const domain = this.resourceUrl || this.defaultDomain
    return new ResourceUrls(domain)
  }

  private static readonly defaultDomain = 'https://github.com'
  private readonly domain: string

  private constructor(domain: string) {
    this.domain = domain
  }

  get baseUrl(): string {
    return `${this.domain}/cross-platform-actions`
  }

  get diskBaseUrl(): string {
    return `${this.domain}/korli`
  }

  get resourceBaseUrl(): string {
    return `${this.baseUrl}/resources/releases/download/${version.resources}`
  }

  private static get resourceUrl(): string | undefined {
    return process.env['CPA_RESOURCE_URL']
  }
}
