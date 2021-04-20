
const info_es = {
  "rol": "Lider Técnico - Full Stack",
  "country": "País",
  "city": "Ciudad",
  "age": "Edad",
  "languages": [
      {
          "lang": "Español",
          "perc": 100,
          "variant": "success"
      },
      {
          "lang": "Ingles",
          "perc": 66,
          "variant": "warning"
      },
      {
          "lang": "Italiano",
          "perc": 33,
          "variant": "danger"
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
          "variant": "success"
      },
      {
          "lang": "English",
          "perc": 70,
          "variant": "warning"
      },
      {
          "lang": "Italian",
          "perc": 20,
          "variant": "danger"
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