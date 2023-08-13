import csvtojson from 'csvtojson';

// const csv = `row-names,value1,value2,value3
// name1,1,2,3
// name2,1,2,3
// name3,1,2,3`;

// console.log('csv: ' + csv);

const convert = async(item) => {
    const jsonObject = await csvtojson().fromString(item);
    console.log('jsonObject from inside function: ');
    console.log(jsonObject);
    return jsonObject;        
};

// (async () => {
// const jsonarray = await convert(csv);

// console.log('jsonarray: ' + jsonarray);
// console.log(jsonarray);
// })();

export default convert;
