
const info_es = {
  "rol": "Lider Técnico - Full Stack",
  "country": "País",
  "city": "Ciudad",
  "age": "Edad",
  "languages": [
      {
          "lang": "Español",
          "perc": 100,
          "variant": "customColor"
      },
      {
          "lang": "Ingles",
          "perc": 50,
          "variant": "customColor"
      },
      {
          "lang": "Italiano",
          "perc": 10,
          "variant": "customColor"
      }
  ]
}

const info_en = {
  "rol": "Lead Engineer - Full Stack",
  "country": "Country",
  "city": "City",
  "age": "Age",
  "languages": [
      {
          "lang": "Spanish",
          "perc": 100,
          "variant": "customColor"
      },
      {
          "lang": "English",
          "perc": 50,
          "variant": "customColor"
      },
      {
          "lang": "Italian",
          "perc": 10,
          "variant": "customColor"
      }
  ]
}

export const getTranslate = async ( file, lang ) => {
  if(lang === 'ES'){
    return info_es;
  }else{

    return info_en;
  }
}