const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName , fileContent, (err)=>{
		if(err){
			console.log(err);
		}
		console.log("File Created");
	});

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name

	 fs.readFile(fileName, {encoding:'utf-8'}, (err, data)=>{
		if(err){
            console.log(err);
		}else{
			console.log(data);
		}
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.appendFile(fileName, fileContent, (err)=>{
		console.log(fileContent);
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

	fs.unlink(fileName, (err)=>{
		console.log(err);
	})

}
myFileWriter("file.txt","Hello ");
myFileUpdater("file.txt","My Name is ABC");
myFileReader("file.txt");
// myFileDeleter("file.txt");



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }