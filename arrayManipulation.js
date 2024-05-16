function processArray(arr){
    const newArray = arr.map((num) => {
      return num % 2 === 0 ?  num ** 2 :  num * 3
    })
    return newArray;
  }
  
  
  function formatArrayStrings(stringArr, importedArr) {
      const newStringArray = importedArr.map((num, index) => {
          if (num % 2 === 0) {
            return stringArr[index].toUpperCase(); 
          } else {
              return stringArr[index].toLowerCase(); 
          }
      });
      return newStringArray;
  }
  
   const toExportArray = formatArrayStrings(['Josiah', 'Jessica', 'John', 'Jeremiah', 'Jeremy'], processArray([1,2,3,4,5]));
  console.log(toExportArray);

  export default toExportArray;
  