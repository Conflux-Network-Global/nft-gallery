/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Cache {
  private ttl = 0;

  private cache: Map<string, any> = new Map();

  constructor(ttl = 0, cache: Map<string, any> = new Map()) {
    this.ttl = ttl;
    this.cache = cache;
  }

  public put(key: string, value: any): void {
    this.cache.set(key, value);
    setTimeout(() => {
      this.drop(key);
    }, this.ttl);
  }

  public get<T>(key: string): T {
    return this.cache.get(key);
  }

  public drop(key: string): boolean {
    return this.cache.delete(key);
  }
}
