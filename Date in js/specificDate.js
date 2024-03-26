const specificDate = new Date(2091, 0, 26)
console.log(specificDate)

specificDate.setMonth(10);
console.log(specificDate)

// US --- month/date
console.log(specificDate.toLocaleString())
// UK --- date/month
console.log(specificDate.toLocaleString('en-GB'));

//  unix  epoc [Date to second convert method]

