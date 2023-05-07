const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    //organization : process.env.OPENAI_ORG_ID,
    apiKey : process.env.OPAN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// const generatedRota = await openai.createCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{role: "user",    
//                 conten: "say: hello-world"}]
// });

const testParams = {
    model: "gpt-3.5-turbo",
    messages: [{role: "user",    
                conten: "say: hello-world"}]
};

exports.newRotaFromOpenAI = (req, res) => {
    let rota = (async () => {await openai.createChatCompletion(testParams)})();
    console.log(rota);
    res.send(rota);    
};

