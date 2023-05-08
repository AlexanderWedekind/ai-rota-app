const circularJSON = require('circular-json');

const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    //organization : process.env.OPENAI_ORG_ID,
    apiKey : process.env.OPENAI_API_KEY,
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
                content: "Hi, how are you?"}]
};

exports.newRotaFromOpenAI = async (req, res) => {
    try {
        const rotaSuggestion = await openai.createChatCompletion(testParams);
        //const rotaReply = await rotaSuggestion.json();
        //console.log(rotaSuggestion);
        console.log(rotaSuggestion.data.choices[0].message);
        res.send(circularJSON.stringify(rotaSuggestion)); 
    }catch(error) {
        console.log(error)
    }
};

