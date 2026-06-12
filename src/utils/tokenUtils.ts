// utils/tokenUtils.ts
export function setExpirationTime(hours: number): Date {
    const now = new Date();
    now.setHours(now.getHours() + hours);
    return now;
  }
  