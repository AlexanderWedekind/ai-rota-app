const emptyRota = [
    {
      "name": "alex",
      "contractedHours": 30,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "bob",
      "contractedHours": 10,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "lisa",
      "contractedHours": 10,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "henry",
      "contractedHours": 35,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "arthur",
      "contractedHours": 10,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "jeremiah",
      "contractedHours": 35,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "hiacynth",
      "contractedHours": 35,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    },
    {
      "name": "brenda",
      "contractedHours": 10,
      "monday": 0,
      "tuesday": 0,
      "wednesday": 0,
      "thursday": 0,
      "friday": 0,
      "saturday": 0,
      "sunday": 0
    }
  ];

const shifts = [
    {
      "shift": "hall 1 am",
      "hours": 8
    },
    {
      "shift": "hall 1 pm",
      "hours": 8
    },
    {
      "shift": "hall 2",
      "hours": 2
    },
    {
      "shift": "hall 3",
      "hours": 2
    }
  ]

const setTheScene1 = "I will send you an empty rota in JSON format.\nThen I will send you an array of shifts in JSON format.\nThen I will let you know how to fill in the rota";

const helpfullReply1 = "Sure! Please go ahead and provide the empty rota in JSON format and the array of shifts in JSON format. Once I have both, you can let me know how you would like to fill in the rota, and I'll assist you accordingly.";

const settheScene2 = "here follows the empty rota: " + JSON.stringify(emptyRota);

const helpfullRply2 = "Thank you for providing the empty rota. Now, please provide the array of shifts in JSON format, and let me know how you would like to fill in the rota using those shifts.";

const setTheScene3 = "Here follows the array of shifts in JSON format: " + JSON.stringify(shifts);

const helpfullReply3 = "Thank you for providing the array of shifts. Now, please let me know how you would like to fill in the rota using those shifts.";

const setTheScene4 = "";


const columns = `name, contracted, mon-hall1-am, mon-hall1-pm, mon-hall2, mon-hall3,
tue-hall1-am, tue-hall1-pm, tue-hall2, tue-hall3,
wed-hall1-am, wed-hall1-pm, wed-hall2, wed-hall3,
thu-hall1-am, thu-hall1-pm, thu-hall2, thu-hall3,
fri-hall1-am, fri-hall1-pm, fri-hall2, fri-hall3,
sat-hall1-am, sat-hall1-pm, sat-hall2, sat-hall3,
sun-hall1-am, sun-hall1-pm, sun-hall2, sun-hall3,  `;


const enmptyRotaCsv = 
`
"name","contracted","mon-hall1-am","mon-hall1-pm","mon-hall2","mon-hall3","tue-hall1-am","tue-hall1-pm","tue-hall2","tue-hall3","wed-hall1-am","wed-hall1-pm","wed-hall2","wed-hall3","thu-hall1-am","thu-hall1-pm","thu-hall2","thu-hall3","fri-hall1-am","fri-hall1-pm","fri-hall2","fri-hall3","sat-hall1-am","sat-hall1-pm","sat-hall2","sat-hall3","sun-hall1-am","sun-hall1-pm","sun-hall2","sun-hall3"
"alex",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"bob",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"lisa",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"henry",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"arthur",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"jeremiah",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"hiacynth",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"brenda",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

`;

const instructions =
`
here is a csv string:

"name","contracted","mon-hall1-am","mon-hall1-pm","mon-hall2","mon-hall3","tue-hall1-am","tue-hall1-pm","tue-hall2","tue-hall3","wed-hall1-am","wed-hall1-pm","wed-hall2","wed-hall3","thu-hall1-am","thu-hall1-pm","thu-hall2","thu-hall3","fri-hall1-am","fri-hall1-pm","fri-hall2","fri-hall3","sat-hall1-am","sat-hall1-pm","sat-hall2","sat-hall3","sun-hall1-am","sun-hall1-pm","sun-hall2","sun-hall3"
"alex",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"bob",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"lisa",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"henry",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"arthur",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"jeremiah",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"hiacynth",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
"brenda",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

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


`;