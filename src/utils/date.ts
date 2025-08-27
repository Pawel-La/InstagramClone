const TIME_UNITS = {
  YEAR: 'YEAR',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY',
  HOUR: 'HOUR',
  MINUTE: 'MINUTE',
} as const;

type TimeUnits = keyof typeof TIME_UNITS;

type TimeSince = {
  unit: TimeUnits;
  quantity: number;
};

function timeSince(date: Date): TimeSince {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) {
    return { unit: 'YEAR', quantity: years };
  } else if (months >= 1) {
    return { unit: 'MONTH', quantity: months };
  } else if (weeks >= 1) {
    return { unit: 'WEEK', quantity: weeks };
  } else if (days >= 1) {
    return { unit: 'DAY', quantity: days };
  } else if (hours >= 1) {
    return { unit: 'HOUR', quantity: hours };
  } else {
    return { unit: 'MINUTE', quantity: minutes };
  }
}

function stringifyTimeSince(timeSince: TimeSince): string {
  let timeSinceAsString;

  if (timeSince.unit === 'YEAR' && timeSince.quantity === 1) {
    timeSinceAsString = `${timeSince.quantity} rok`;
  } else if (timeSince.unit === 'YEAR' && timeSince.quantity < 5) {
    timeSinceAsString = `${timeSince.quantity} lata`;
  } else if (timeSince.unit === 'YEAR' && timeSince.quantity >= 5) {
    timeSinceAsString = `${timeSince.quantity} lat`;
  } else if (timeSince.unit === 'MONTH') {
    timeSinceAsString = `${timeSince.quantity} mies.`;
  } else if (timeSince.unit === 'WEEK') {
    timeSinceAsString = `${timeSince.quantity} tydz.`;
  } else if (timeSince.unit === 'DAY' && timeSince.quantity === 1) {
    timeSinceAsString = `${timeSince.quantity} dzień`;
  } else if (timeSince.unit === 'DAY' && timeSince.quantity > 1) {
    timeSinceAsString = `${timeSince.quantity} dni`;
  } else if (timeSince.unit === 'HOUR') {
    timeSinceAsString = `${timeSince.quantity} godz.`;
  } else if (timeSince.unit === 'MINUTE') {
    timeSinceAsString = `${timeSince.quantity} min.`;
  } else {
    throw new Error('invalid time - this should not supposed to happen, it is a bug');
  }

  return timeSinceAsString;
}

export { timeSince, stringifyTimeSince };
