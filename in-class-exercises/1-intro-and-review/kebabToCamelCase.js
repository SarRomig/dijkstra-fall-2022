// Convert kebab case words into camel casing. The first word within the output should be capitalized only if 
//it is the first letter of a word and dashes should be removed.

// * change-this-word gets converted into changeThisWord
// *day-month-year gets converted into dayMonthYear
//  ALL-CAPS gets converted into allCaps





function kebabToCamel(kebabString) {
    let camelString = "";

//Loop over kebabString. If char is a dash, don't use it in camelString and the following will be capitalized. 
    for (let i = 0; i < kebabString.length; i++) {
        if (kebabString[i] == "-") {
        i++; //to move it over ("skip" the dash)
        camelString += kebabString[i].toUpperCase();
        }
        else {
            //Otherwise, copy lowercase to camelString
            camelString += kebabString[i];
        }
    }
    return camelString;
}
console.log(kebabToCamel("hello-boot-camp-2022"));
