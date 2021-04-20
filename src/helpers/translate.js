export const getTranslate = async ( file, lang ) => {
    const resp = await fetch(`${process.env.PUBLIC_URL}/json/${file}_${lang}.json`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    const data = await resp.json();
    return data;
}