import toExportArray from "./arrayManipulation.js";
function userProfiles(originalNames, modifiedNames) {
    let id = 0;
    let finalArray = [];
    
    originalNames.forEach((origName, index) => {
        const modifiedName = modifiedNames[index];  
        finalArray.push({
            originalName: origName,
            modifiedName: modifiedName,
            id: ++id
        });
    });
       
    return finalArray;
}

const lastArray = userProfiles(['Josiah', 'Jessica', 'John', 'Jeremiah', 'Jeremy'], toExportArray);
console.log(lastArray)