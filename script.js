//  In the just below code there has create a file , The  code is just given below------------    writeFile("fileName" , "data" , callback)

// const fs = require('fs');
// fs.writeFile("Hey.txt", "Hey how are You" , function(error){
//     if(error) return console.error(error);
//     else console.log("done");
// })

// -------------  With the help of just just given below code we can add content in thi file.. ---  appendFile("fileName" , "data" , callback)

// const fs = require('fs');
// fs.appendFile("Hey.txt", " , Fine" , function(error){
//     if(error) return console.error(error);
//     else console.log("done");
// })

// -----------  We can also Rename the file , for this the code is just given below ....        rename("firstFilename" , "seconsfilename" , callback)

// const fs = require('fs');
// fs.rename("Hey.txt" , "info.txt" , (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// });

// -------- We can also copy the file , for this the code is just given below. Here The data of info.txt file has copy in the Hey.txt file of copy folder .  copyFile("fileName" , "./folderName/NewFileName" , callback) 


// const fs = require('fs');
// fs.copyFile("info.txt" , "./copy/Hey.txt" , (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// });

// ============= We can also delete the  file for this the code is just given below ....     unlink("fileName"  , callback)

// const fs = require('fs');
// fs.unlink("info.txt" ,  (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// });

// =========== We can also delet the  folder for this the code is just given below .... rmdir("folderName"  , callback) : withe the help of this we can only remove blank folder 

// const fs = require('fs');
// fs.rmdir("./copy" ,  (err) => {
//     if(err) console.error(err);
//     else console.log("Done");         // Here the folder is not Removed because the folder is not empty ...
// });

// ===== But if the folder has come file then we can deleted the folder using rmdir by passing (recursive : true) , for this the code is given below.....


const fs = require('fs');
fs.rmdir("./copy" , {recursive : true} , (err) => {
    if(err) console.error(err);
    else console.log("Done");
});