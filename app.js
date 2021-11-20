const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
 function getCountryByIso3(isoCode) {
    
    let country_data = {};
    
    for (let i = 0; i < countries.length; i++) {
        if (isoCode === countries[i].iso3) {
            country_data = countries[i];
      }
    }
    
    return country_data;
  }

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    
    let country_name_translated = {};

    for(let i=0 ; i<countries.length ; i++){
        if(isoCode === countries[i].iso3){
            country_name_translated.isoCode = countries[i].iso3;

            for(language_found in countries[i].translations){
                if(language === language_found){
                    country_name_translated.translation = countries[i].translations[language_found];

                }
            }
        }
    }

    return country_name_translated;

}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();