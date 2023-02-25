function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400) {
        return "leap year";
      } else {
        return "not leap";
      }
    } else {
      return "leap year";
    }
  } else {
    return "not leap year";
  }
}
console.log(leapYear(2004))