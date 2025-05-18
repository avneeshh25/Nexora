export interface UsageStats {
  messagesSent: number;
  messagesReceived: number;
  callsDuration: number;
  callsInitiated: number;
  callsReceived: number;
}

export class AuthService {
  private static instance: AuthService;
  private apiKey: string = '';
  private usageStats: UsageStats = {
    messagesSent: 0,
    messagesReceived: 0,
    callsDuration: 0,
    callsInitiated: 0,
    callsReceived: 0
  };

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async validateApiKey(apiKey: string, serverUrl: string): Promise<boolean> {
    // Always return true, bypassing API key validation
    console.log('API key validation bypassed - using SDK without authentication');
    return true;
  }

  async trackUsage(type: keyof UsageStats, value: number = 1, serverUrl: string): Promise<void> {
    // Update local tracking stats
    this.usageStats[type] += value;

    // Only send to server if we have an API key
    if (!this.apiKey) return;

    try {
      await fetch(`${serverUrl}/usage/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          type,
          value,
          timestamp: Date.now(),
        }),
      });
    } catch (error) {
      console.error('Usage tracking failed:', error);
    }
  }

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getUsageStats(): UsageStats {
    return { ...this.usageStats };
  }
}