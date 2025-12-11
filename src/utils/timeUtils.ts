/**
 * Utility functions for time and date formatting.
 */

/**
 * Calculates the time difference between the current time and a given date,
 * returning a human-readable "time ago" string.
 *
 * Supports units: seconds, minutes, hours, days, months, years.
 * Handles edge cases: null/undefined, invalid dates, future dates.
 *
 * @param dateInput - The date to calculate time ago from. Can be a Date object, timestamp number, or date string.
 * @returns A string representing the time elapsed (e.g., "2 minutes ago", "Just now") or "-" if invalid.
 */
export function timeAgo(dateInput: Date | string | number | null | undefined): string {
  if (!dateInput) {
    return '-';
  }

  const date = new Date(dateInput);
  
  // Check for invalid date
  if (isNaN(date.getTime())) {
    return '-';
  }

  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  // Future date handling (or extremely close current time)
  if (secondsPast < 0) {
    // If it's just a small skew (e.g. server time vs client time), treat as "Just now"
    // otherwise if it's significant, maybe show the date or "In the future"
    // For this requirement, we'll treat future/negative as "Just now" for very small diffs,
    // or simply return the formatted date if it's way off. 
    // Let's stick to "Just now" for slightly future, or generic handling.
    return 'Just now';
  }

  if (secondsPast < 60) {
    return 'Just now';
  }
  
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  
  if (secondsPast < 2592000) { // Approx 30 days
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  
  if (secondsPast < 31536000) { // Approx 365 days
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  
  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}
