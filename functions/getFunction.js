// const apiKey = '208768ae46bb6b48c1fe540952be7b79'
// const API_ENDPOINT = `//api.mediastack.com/v1/news?access_key=208768ae46bb6b48c1fe540952be7b79&categories=health`;


exports.handler = async (event, context) => {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
    
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};




// exports.handler = async function (event, context) {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ message:'hello world!'})
//     }
// }