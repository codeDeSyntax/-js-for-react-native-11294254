# js-for-react-native-11294254

<p>
In the arrayManipulation.file , a function processArray is created.It takes a array as an argument. This array is mapped through to square all the even numbers and triple all the odd numbers using the tenary operators. THe resulting array is stored in a variable 
</p>

<p>Another function formatArrayStrings which takes two  arrays as arguments is created one of which is the returned array from the processArray function

The other one (stringArr) holds some strings of names.
The processArray function array returned is mapped through considering each value in it and their corresponding index. 

since we want to transform the strings to either uppercase or lowercase corresponding even or odd numbers in the returned arrya from processArray, we check if the eachnumber modulo 2 is equal to 0(that makes it even and therefore we grab the string value at that index and convert to uppercase) or not(that means number is odd and therefore we grab the string at the index and convert to  lower case). The final array is stored in newStringArrray and returned



</p>

<p>In the userinfo.js file, the newStringArray is imported.
1. A function userProfile is created. it takes two arrays as arguments(originalNames and the imported array)
2. A variable id is initialized to 0 and another variabel is initialized to an empty array.
3. originalNames is looped through using the forEach considering each value and its index,
4. We push an object to the initialized  array.The object holds originalName , modifiedName and an auto increment id using ++id.This updates the array with the various objects according to the number of items looped through. THe final array is returned.
5. The function is called with the appropriate arrays.
</p>