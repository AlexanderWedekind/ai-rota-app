import circularJSON from 'circular-json';
import dotenv from 'dotenv';
dotenv.config();
import convert from './csvjson.js';
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

const instructions =
`
here is a csv string:

"name","contracted","mon-hall1-am","mon-hall1-pm","mon-hall2","mon-hall3","tue-hall1-am","tue-hall1-pm","tue-hall2","tue-hall3","wed-hall1-am","wed-hall1-pm","wed-hall2","wed-hall3","thu-hall1-am","thu-hall1-pm","thu-hall2","thu-hall3","fri-hall1-am","fri-hall1-pm","fri-hall2","fri-hall3","sat-hall1-am","sat-hall1-pm","sat-hall2","sat-hall3","sun-hall1-am","sun-hall1-pm","sun-hall2","sun-hall3"
"alex1",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex2",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex3",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex4",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex5",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex6",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex7",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"alex8",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

the csv string represents a shift rota in a place of work.
you will provide assistance in filling it out, according to instruction which I shall provide.
in order for you to follow my instructions, we will agree on multiple words by which we refer to each column.
we will also agree on which columns should be altered.
we will also agree on how we refer to the rows and which attribute we use to identify them. 

first we will agree on how to refer to the columns.
after that i will provide you with instructions on how to fill out the rota.

the values in the columns 'name' and 'contracted' stay unaltered, and we will refer to these columns as 'name' and 'contracted'.
we refer to all the other columns in multiple ways.
here follow the different ways by which we refer to them:
all columns other than 'name' and 'contracted' are referred to as 'shifts'.
additionally the columns "mon-hall1-am","mon-hall1-pm","mon-hall2","mon-hall3" are referred to as 'mon-shifts'.
additionally the columns "tue-hall1-am","tue-hall1-pm","tue-hall2","tue-hall3" are referred to as 'tue-shifts'.
additionally the columns "wed-hall1-am","wed-hall1-pm","wed-hall2","wed-hall3" are referred to as 'wed-shifts'.
additionally the columns "thu-hall1-am","thu-hall1-pm","thu-hall2","thu-hall3" are referred to as 'thu-shifts'.
additionally the columns "fri-hall1-am","fri-hall1-pm","fri-hall2","fri-hall3" are referred to as 'fri-shifts'.
additionally the columns "sat-hall1-am","sat-hall1-pm","sat-hall2","sat-hall3" are referred to as 'sat-shifts'.
additionally the columns "sun-hall1-am","sun-hall1-pm","sun-hall2","sun-hall3" are referred to as 'sun-shifts'.

we will refer to each row as an 'employee', and we will identify each employee by their 'name' value.

additionally the columns "mon-hall1-am","mon-hall1-pm",
 "tue-hall1-am","tue-hall1-pm",
 "wed-hall1-am","wed-hall1-pm",
 "thu-hall1-am","thu-hall1-pm",
 "fri-hall1-am","fri-hall1-pm",
 "sat-hall1-am","sat-hall1-pm",
 "sun-hall1-am","sun-hall1-pm", are referred to as 'hall1-shifts'.

 additionally the columns "mon-hall2",
 "tue-hall2",
 "wed-hall2",
 "thu-hall2",
 "fri-hall2",
 "sat-hall2",
 "sun-hall2", are referred to as 'hall2-shifts'.

 additionally the columns "mon-hall3",
"tue-hall3",
"wed-hall3",
"thu-hall3",
"fri-hall3",
"sat-hall3",
"sun-hall3" are referred to as 'hall3-shifts'.

here follow the intructions, using the agreed upon row and column references:

each field in any of the 'hall1-shift' columns can have a numeric value of either 0 or 8.

each field in any of the 'hall2-shift' and 'hall3-shift columns can have a numeric value of either 0 or 2. 

each 'shift' column must be have at least one non-zero value in only one of it's fields, all other fields for that 'shift' column should stay at 0.

each 'employee' row can have a non-zero value in only one of the fields under all the 'mon-shifts' columns, all other fields under the 'mon-shift' columns for that employee stay at 0. 
each 'employee' row can have a non-zero value in only one of the fields under all the 'tue-shifts' columns, all other fields under the 'tue-shift' columns for that employee stay at 0.
each 'employee' row can have a non-zero value in only one of the fields under all the 'wed-shifts' columns, all other fields under the 'wed-shift' columns for that employee stay at 0.
each 'employee' row can have a non-zero value in only one of the fields under all the 'thu-shifts' columns, all other fields under the 'thu-shift' columns for that employee stay at 0.
each 'employee' row can have a non-zero value in only one of the fields under all the 'fri-shifts' columns, all other fields under the 'fri-shift' columns for that employee stay at 0.
each 'employee' row can have a non-zero value in only one of the fields under all the 'sat-shifts' columns, all other fields under the 'sat-shift' columns for that employee stay at 0.
each 'employee' row can have a non-zero value in only one of the fields under all the 'sun-shifts' columns, all other fields under the 'sun-shift' columns for that employee stay at 0.

in your answer I want you to send me the updated CSV string with the values filled out, based on the instructions above.
Send only the updated CSV string, without any additional text before or after it.
`;

const rotaPrompt = {
    model: "gpt-3.5-turbo",
    messages: [{role: "user",    
                content: instructions}]
};

const testParams = {
    model: "gpt-3.5-turbo",
    messages: [{role: "user",    
                content: "Hi, how are you?"}]
};

const newRotaFromOpenAI = async (req, res) => {
    try {
        console.log(rotaPrompt);
        const rotaSuggestion = await openai.createChatCompletion(rotaPrompt);        
        //const message = await circularJSON.stringify(rotaSuggestion.data.choices[0].message);
        const message = rotaSuggestion.data.choices[0].message;
        //console.log(rotaSuggestion.data.choices[0].message);
    }catch(error) {
        console.log('error from openai:\n' + error)
    }
    try {
        const rota = await convert(message);
    }catch(error) {
        console.log(`error converting from csvstring to json ${error}`); 
    }
        console.log(message);
        console.log(rota);
        res.send(JSON.stringify(rota)); 
    
};

export default newRotaFromOpenAI;