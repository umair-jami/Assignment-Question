// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
//@ts-ignore
let describe_city = (city: string = "Lahore", country: string = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};
//with default city and country
describe_city();
//with karachi city and defalult country
describe_city("Karachi");
//with london city and default acountry
describe_city("London not");
