export const getTimeString = (now) => {
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hour}:${minute}:${seconds}`
}

const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

const getCurrentDate = (now) => {
    const currentDate = new Date(0);
    currentDate.setUTCDate(now.getUTCDate());
    return currentDate;
}

const getNextWeekendDate = (now) => {
    const nextWeekendDate = new Date(now);
    const dayOfWeek = nextWeekendDate.getUTCDay();
  
    // Calculate the number of days until the next Saturday (6 - dayOfWeek)
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  
    const timeUntilSaturday = daysUntilSaturday * 24 * 60  *60 * 1000;

    nextWeekendDate.setTime(nextWeekendDate.getTime() + timeUntilSaturday);
  
    return nextWeekendDate;
  };

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}

export const getDates = (now) => {
    const currDate = getCurrentDate(now);
    const nextWeekendDate = getNextWeekendDate(now);
    return { currDate, nextWeekendDate };
}