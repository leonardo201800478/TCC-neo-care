// app/services/connection/PowerSyncCredentials.ts
export class PowerSyncCredentials {
  private apiKey: string
  private apiSecret: string

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey
    this.apiSecret = apiSecret
  }

  getApiKey(): string {
    return this.apiKey
  }

  getApiSecret(): string {
    return this.apiSecret
  }
}