const fs = require('fs');
const path = require('path');

const readline = require('readline');

// console.log(new Date().toISOString().replace(/:/g, '-'));// regex to replace : -> -

// function generateFileName(){
//     const time = new Date().toISOString().replace(/:/g,'_');
//     return `file_${time}.txt`;
// }

// function writeDataToFile(data){
//     const filename = generateFileName();
//     const filepath = path.join(__dirname,filename);

//     // finally write to the file
//     fs.writeFile(filepath,data,(err)=>{
//         if(err){
//             console.log("Error while wriiting the data to the file ",err);
//         }
//         else{
//             console.log(`File ${filename} created successfully`);
//         }
//     });
    
// }

// // we r calling the function which will write 5 times 
// for (let index = 1; index < 5; index++) {
//     writeDataToFile("This data has been added to this file with index : "+index);
// }




// creating the file name as per user input and if file already exists dont allow user to create file

//  creating the readline refrence
var reader = readline.createInterface({
    input: process.stdin,// reading from stdin
    output:process.stdout// for output
});

// question prompt
reader.question("Enter a file name : ",(userInputFileName)=>{
    reader.close();
    if(fs.existsSync(userInputFileName)){
        console.error(`${userInputFileName} already exist.`);
    }else{
        try {
            fs.writeFileSync(userInputFileName,"you r Awesome");
            console.log(`${userInputFileName} created successfully`);
            // now add the file name to file_info.json
            let jsonString = JSON.stringify({"files":[`${userInputFileName}`]});
            var infoFilePath=path.resolve("./","./file_info.json")
            fs.appendFileSync(infoFilePath,jsonString);
            
        } catch (error) {
            console.log("Error while creating the file ",err);
        }
    }
});