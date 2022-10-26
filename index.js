// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.


// let array =[5 , 25 , 89 , 120 , 36];

/// ბოლოში დავამატე ელემენტები
// let newArray = array.push('python' , 'javascript');

// თავში დავამატე ელემენტები
// let newArray1 = array.unshift('html' , 'css');

//  წაიშლება javascript
// let deleteNumbersEnd = array.pop();

// წაიშლება html
// let deleteNumbersStart = array.shift();

//  რამდენი ელემენტი გვაქვს პირველი მეთოდის შემდეგ
// console.log(newArray);
//  რამდენი ელემენტი გვაქვს მეორე მეთოდის შემდეგ
// console.log(newArray1);
//  დავბეჭდეთ ყველა ელემენტი, რომელიც მასივშია ყველა მეთოდის შესრულების შემდეგ
// console.log(array);





// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let arrayWords = ['orange' , 'banana' , 'pear'];

// // რამდენი ელემენტი გვაქვს
// console.log(arrayWords.length);
// // დავამატე ბოლოში 2 ელემენტი
// let newArray = arrayWords.push('apple' , 'pineapple');
// // დავამატე თავში 1 ელემენტი
// let newArray2 = arrayWords.unshift('watermelon');
// // რამდენი ელემენტი გვაქვს
// console.log(arrayWords.length);
// // 3 ელემენტად დავამატე მანგო
// arrayWords.splice(2 , 0 , 'mango');
// // წავშალე პირველი და ბოლო ელემენტი
// let someArray = arrayWords.pop();
// let someArray1 = arrayWords.shift();

// // რა ელემენტები დარჩა
// console.log(arrayWords);
// // რამდენი ელემნტი დარჩა
// console.log(arrayWords.length);


// 3. მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArrya = array.map(function(item){
//     return item / 3;
// });

// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newArray = array.filter( x = Number);
// console.log(newArray);



// 5.მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newLanguages = languages.filter((x) => x.length>3);
// console.log(newLanguages);

// 6. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];
// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// let item = [12, 'google', 32, null, 'yahoo', 25];

// let newItem = item.map(function(x){
//     if (typeof x == "number") {
//         return Math.pow(x,2);
//     }else if(typeof x == "string") {
//         return x.toUpperCase();
//     }else{
//         return x
//     }
// }
// )
// console.log(newItem);


// 7. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newWords = words.filter((x)=> x.includes('M') || x.includes('m'))
// console.log(newWords);


// 8. მოცემულია სამი მასივი:
// Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let new1 = arr1.concat(arr2).concat(arr3);
// console.log(new1);



// 9.მოცემულია მასივი:

// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

// let arr = [1, 2, 3, 4, 5];
// let y = 0;
// arr.forEach(function(x){
//     y =y + x;
// })

// console.log(y);


// 10.მოცემულია მასივი:
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let newNumbers = numbers.filter((x) => x>0)

// console.log(newNumbers);


// 11.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით

// let arr = [-1, -2, -3, 4];

// arr.some((x)=> x>0)

// console.log('true');

// 12.მოცემულია მასივი let array =[23,45,32,5,87,7,3,98]

// Sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადონის მიხედვით და ამოიღეთ მინიმალური რიცხვი;

// let array1 =[23,45,32,5,87,7,3,98];

// array1.sort(function(a,b){
//     return b - a;
// })
// let highest = array1[0];

// console.log(array1);

// console.log(highest);




// 13. მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array =[1, 2, 3, 4, 5];

// array.splice(2 , 0 , 'a','b','c')
// console.log(array);