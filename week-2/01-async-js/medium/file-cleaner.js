const fs = require('fs')

fs.readFile('1-file-cleaner.md','utf-8',(err,data)=>{
    if(err){
        console.log("you have an error",err);
        return
        
    }
    let cleanedData = data.replace(/\s+/g, " ").trim()

    fs.writeFile('1-file-cleaner.md',cleanedData,'utf-8',(err)=>{
        if (err) {
            console.error('Error writing file:', err);
            return;
          }
          console.log("File cleaned successfully!")
    })

})

