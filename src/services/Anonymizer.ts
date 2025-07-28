import crypto from 'crypto';

export type AnonymizationStrategy = 'hash' | 'mask';

export class Anonymizer {
  private strategy: AnonymizationStrategy;

  constructor(strategy: AnonymizationStrategy = 'hash') {
    this.strategy = strategy;
  }

  public anonymize(value: string): string {
    switch (this.strategy) {
      case 'hash':
        return this.hash(value);
      case 'mask':
        return this.mask(value);
      default:
        return value;
    }
  }

  private hash(value: string): string {
    return crypto.createHash('sha256').update(value).digest('hex');
  }

  private mask(value: string): string {
    if (value.length <= 2) return '*'.repeat(value.length);
    return value[0] + '*'.repeat(value.length - 2) + value[value.length - 1];
  }
}
