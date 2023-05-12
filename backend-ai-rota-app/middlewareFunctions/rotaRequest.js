import circularJSON from 'circular-json';
import dotenv from 'dotenv';
dotenv.config();

import {Configuration, OpenAIApi}  from 'openai';
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

const newRotaFromOpenAI = async (req, res) => {
    try {
        const rotaSuggestion = await openai.createChatCompletion(testParams);        
        const message = await circularJSON.stringify(rotaSuggestion.data.choices[0].message);
        //console.log(rotaSuggestion.data.choices[0].message);
        console.log(message);
        res.send(message); 
    }catch(error) {
        console.log(error)
    }
};

export default newRotaFromOpenAI;