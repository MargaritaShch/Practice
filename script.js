//ARRAYS
/* 1.Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII), а затем вернуть первое значение.Возвращаемое значение должно быть строкой и содержать «***» между каждой буквой.Не следует удалять или добавлять элементы из/в массив.*/
function sortString(strings){
    //отсортировать его в алфавитном порядке
    strings.sort();
    console.log(strings); //result = ['apple', 'banana', 'cherry']
    //затем вернуть первое значение.Возвращаемое значение должно быть строкой и содержать «***» между каждой буквой
    let firstString = strings[0];
    console.log(firstString); //result = 'apple',
    let string='';
    for (let i = 0; i < firstString.length; i++) {
        //накапливаtv символы и разделители в переменной string
        //если i не первый элемент 'a', то перед ней на выставляется '***'
        if (i !== 0) {
        string += "***";
        }
        string += firstString[i];
    }
    console.log(string); 
  
};
let string1 = ["banana", "apple", "cherry"];
sortString(string1);//RESULT = a***p***p***l***e

/*2.Завершите метод/функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы, только если исходное слово было написано с заглавной буквы (так называемый верхний регистр Camel, также часто называемый регистром Pascal). Следующие слова всегда должны быть с заглавной буквы. Пример:
 - "the-stealth-warrior" gets converted to "theStealthWarrior"
 -"The_Stealth-Warrior" gets converted to "TheStealthWarrior"*/

function convertStringToCamelCase(string){
    //оставить 1ую маленькую букву без изменений
    for(let k=0; k<string.length; k++){
        if(k == 0){
            string[k].toLowerCase();
        }
    }
    //убираем символы - _ и соединяем строку
    let removeSumbol = ['-', '_'];
    for(let i =0; i<removeSumbol.length; i++){
        string = string.split(removeSumbol[i]).join('')  
    }
    console.log(string);    
}//result = получилось соединить и оставить первую букву маленькой, как сделать слова с Большой буквы?
    
let string2 = "The_Stealth-Warrior";
convertStringToCamelCase(string2);
let string22 = "the-stealth-warrior";
convertStringToCamelCase(string22);

/*3.В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число. */
function highAndLow(string){
    //split - разбиnm входную строку на массив строк
    //map -  каждая строка преобразуется в число
    let nums = string.split(" ").map(Number);
    //оператора распространения (...) - передаnm все элементы массива
    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);
    //сначала вывод большего значения потом меньшего
    let newString = `${maxNum} ${minNum}`;
    console.log(newString);
};
highAndLow("1 2 3 4 5");  // return "5 1" - DONE
highAndLow("1 2 -3 4 5"); // return "5 -3" - DONE
highAndLow("1 9 3 4 -5"); // return "9 -5" - DONE

/*4.Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число обозначает позицию, которую слово должно занимать в результате.
Примечание. Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
Если входная строка пуста, верните пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
Пример: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"*/

function sortGivenString (string){
    //разбить строку
    let sentence = string.split(' ');
    let arr =[]
    //перебор числед в словах по условиям задачи
    for(i=1; i<=9; i++){
      //найти слово содержащее число
      //find для поиска слова в массиве
      //includes  -  проверяет, содержит ли текущее слово  число i
      let nums = sentence.find((string) => string.includes(i));
      //если найдено число добавляем в массив arr
      if (nums) {
        arr.push(nums);
      }
      //объединить в строку
      console.log(arr.join(" "));
    }   

}
sortGivenString("is2 Thi1s T4est 3a");//RESULT = Thi1s is2 3a T4est - DONE

/*5.По городу движется автобус, который на каждой остановке забирает и высаживает несколько человек.Вам предоставляется список (или массив) пар целых чисел. Элементы каждой пары представляют собой количество людей, входящих в автобус (первый элемент) и количество людей, выходящих из автобуса (второй элемент) на остановке.Ваша задача — вернуть количество людей, которые все еще находятся в автобусе после последней остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус может быть не пустым, и в автобусе все еще могут быть люди, они, вероятно, там спят :DИмейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Поэтому возвращаемое целое число не может быть отрицательным.
Второе значение в первой паре массива равно 0, поскольку на первой остановке автобус пуст. */
let people = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
];
function stopBus(people){
    let lostPeople = 0;
    //сумма входящих пассажиров
    let sumF =0;
    //сумма выходящих пассажиров
    let sumS = 0;
    for(let i =0; i<people.length; i++){
        for(let k=0; k<people[i].length; k++){
          //считаем по нулевому вложенному индексу
          if (people[i][k] === people[i][0]) {
            sumF += people[i][k];
          }
          //считаем по первому вложенному индексу
          if (people[i][k] === people[i][1]) {
            sumS += people[i][k];
          }
        }
    }
     lostPeople = sumF - sumS;
     return lostPeople;
}
console.log(stopBus(people));//RESULT = 17 - DONE

/*6.Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой). \
Пример: 
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/
function solution(string1, string2){
    let result;
    //массив из последних букв в строках
    let lasLetter1 = string1.split(' ').map(letter => letter[letter.length - 1]);
    let lasLetter2 = string2.split(" ").map((letter) => letter[letter.length - 1]);
    //преобразовать с троку и сравнить
    result = lasLetter1.toString() === lasLetter2.toString();
    return result;
}
console.log(solution("abc", "bc")); //RESULT = true - DONE;
console.log(solution("abc", "d"));//RESULT = false - DONE

/*8.Учитывая два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b. */
function sumNums(a,b){
    if(a===b){
        return a;
    } else{
        let sum = a + b;
        return sum;
    }  
}
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) - НЕ ПОНЯТНО КАК ЭТО ПОЛУЧИТЬ 
console.log(sumNums(1, 0));//RESULT = 1 - DONE
console.log(sumNums(1, 2));//RESULT = 3 - DONE
console.log(sumNums(0, 1));//RESULT = 1 - DONE
console.log(sumNums(1, 1));//RESULT = 1 - DONE
console.log(sumNums(-1, 0));//RESULT = -1 - DONE
console.log(sumNums(-1, 2));//RESULT = 1 - DONE

/*9.Изограмма – это слово, в котором нет повторяющихся букв, как последовательных, так и непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Не обращайте внимания на регистр букв. */
function isogram(isIsogram){
  //для отслеживания символов, которые уже встречались в строке.Объект result в данной функции когда встречается  новый символ в строке, добавляем его в объект result в качестве ключа, устанавливая его значение в true. Если встречается тот же символ впоследствии, то проверяем объект result и видим, что ключ (символ) уже существует в нем.
  let result = {};
  //игнорирование регистра по условиям(перевод всех букв в нижний регистр)
  let newIsIsogram = isIsogram.toLowerCase();
  for (let i = 0; i < newIsIsogram.length; i++) {
    //если есть то false
    if (result[newIsIsogram[i]]) {
      return false;
    } else {
      result[newIsIsogram[i]] = true;
    }
  }
  return true;
}     

console.log(isogram("cavo"));//true -DONE
console.log(isogram("dermatoglyphics"));//true -DONE
console.log(isogram("moose"));//false -DONE

/*10.Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
(В этом случае все треугольники должны иметь поверхность больше 0, чтобы их можно было принять). */
function getTriangle(a,b,c){
    if(a !==0 && b !==0 && c !==0){
        return true;
    } else{
        return false;
    }
}
console.log(getTriangle(1, 3, 5));//true -DONE
console.log(getTriangle(1, 0, 5));//false -DONE

/*11.Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
Например: [0, 0, 0, 1] рассматривается как 0001, который является двоичным представлением 1.
Примеры:Тестирование: [0, 0, 0, 1] ==> 1 */

function getBinary(arr){
    let newString = arr.join('')
    console.log(newString);
    const result = parseInt(newString, 2);
    return result;
} 
console.log(getBinary([0, 0, 0, 1]));//RESULT = 1 - DONE
console.log(getBinary([0, 0, 1, 0]));//RESULT = 2 - DONE
console.log(getBinary([0, 1, 0, 1]));//RESULT = 5 - DONE
console.log(getBinary([1, 0, 0, 1]));//RESULT = 9 - DONE
console.log(getBinary([0, 0, 1, 0]));//RESULT = 2 - DONE
console.log(getBinary([0, 1, 1, 0]));//RESULT = 6 - DONE
console.log(getBinary([1, 1, 1, 1]));//RESULT = 15 - DONE
console.log(getBinary([1, 0, 1, 1]));//RESULT = 11 - DONE

/*12.Ваша задача — создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.*/

function getDescendingOrder(num){
    let str = num.toString();
    let newArr = str.split("").map(Number);
    let sort = newArr.sort();
    let num1 = sort.reverse()
    let str1 = num1.join('')

    return Number(str1);  
}//как оптимизировать функцию
console.log(getDescendingOrder(42145));//RESULT = 54421 - DONE
console.log(getDescendingOrder(145263));//RESULT = 654321 - DONE
console.log(getDescendingOrder(123456789));//RESULT = 987654321 - DONE


/*13.Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг! В противном случае, вы можете быть уверены, что он не ваш друг.
Пример:
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] */
function findFriend(arr){
    let newArr = []
    // console.log(newStr)
    for(let i=0; i<arr.length;i++){
        if(arr[i].length ==4){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(findFriend(["Ryan", "Kieran", "Mark"]));//RESULT = ['Ryan', 'Mark'] - DONE
console.log(findFriend(["Ryan", "Kieran", "Jason", "Yous"]));//RESULT = ['Ryan', 'Yous'] - DONE

/*14.Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: в этой ката y не считается гласной. */
function disemvowelTrolls(string){
 let vowels = ["a", "e", "i", "o", "u"];
 let newStr='';
 for(let i =0; i<vowels.length; i++){
  newStr = string.replace(vowels[i], "");
  
 }
 console.log(newStr);
}
console.log(disemvowelTrolls("This website is for losers LOL!"));//как перебрать гласные?

//ПО ПЛАНУ:
/*15.Вы получаете массив чисел, возвращаете сумму всех положительных чисел. */
function getSumOfPositive(arr){
    let sum = 0;
    for(let i =0; i<arr.length;i++){
      if(arr[i]===0){
        return 0;
      }
      if(arr[i]>0){
        sum +=arr[i]
      }  
  }
  return sum;
}
  
console.log(getSumOfPositive([1, -4, 7]));//RESULT = 8 - DONE
console.log(getSumOfPositive([0, 0, 0, 0]));//RESULT = 0 - DONE;

 /*16.Просто, учитывая строку слов, верните длину самого короткого слова (слов).Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.*/
function getShortWord(string){
 let arr = string.split(' ')
 //сравниваем все с первым словом
 let shortestWord = arr[0];
  for(let i = 1; i<arr.length; i++){
    if(arr[i].length < shortestWord.length)
     shortestWord = arr[i];
  }
  return shortestWord;
}
console.log(getShortWord("String will never be empty"));//RESULT = 'be' - DONE

/*17.В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.*/
function filterList(arr){
  let newArr =[]
  for(let i = 0; i<arr.length; i++)
    if( arr[i]!==arr[i].toString()){
     newArr.push(arr[i]);
    }
    return newArr;
}
console.log(filterList([1, 2, "a", "b"]));//RESULT =  [1, 2] - DONE
console.log(filterList([1, "a", "b", 0, 15]));//RESULT = [1, 0, 15]- DONE
console.log(filterList([1, 2, "aasf", "1", "123", 123]));//RESULT = [1, 2, 123] - DONE

/*18.Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как целое число. Целое число будет целым числом от 1 до 50.*/
let out = document.querySelector('.out')
function getBuildSquad(num){
 for (i = 1; i <= num; i++) {
        out.innerHTML +="<br>";
        for(k=1;k<=num;k++)
        out.innerHTML += "+";
    }
    return out;
 }

console.log(getBuildSquad(5));// - DONE
console.log(getBuildSquad(10));// - DONE
/*19.Возвращает количество гласных в заданной строке.Гласными для этой Ката мы будем считать a, e, i, o, u (но не y).Входная строка будет состоять только из строчных букв и/или пробелов.*/
function vowelCount(string){
  let newString = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      //символ - гласная, увеличивать счетчик
      newString++;
    }
  }
  //общее количество гласных
  return newString;
}
let string11 ='hello world'
console.log(vowelCount(string11));//RESULT = 3 - DONE

/*20.Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.Он должен удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.*/
function getArrayDiff(arr1, arr2){
  let newArr = arr1.filter((elem)=> !arr2.includes(elem));
  return newArr;
  
}
console.log(getArrayDiff([1, 2], [1]));//RESULT = [2] - DONE
console.log(getArrayDiff([1, 2, 2, 2, 3], [2]));//RESULT = [1,3] - DONE

/*21.Напишите функцию, которая принимает в качестве аргумента одну строку (слово). Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке. */
function findTheCapitals(string){
  let arr = string.split('')
  let newArr = []
  for(let i = 0; i< arr.length; i++ ){
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push(i);
    }
  }
  return newArr
}
console.log(findTheCapitals("CodEWaRs"));//RESULT = [0, 3, 4, 6] - DONE

/*22.Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes
Array size is at least 1.*/
function rowWeights(arr){
  let sum1 = 0;
  let sum2=0;
  for(let  i = 0; i< arr.length; i++){
    if(i % 2 == 0){
      sum1+=arr[i];
    } else{
      sum2+=arr[i]
    }
  }
  return [sum1,sum2];
}

console.log(rowWeights([50, 60, 70, 80]));//RESULT =  [120, 140]-DONE
console.log(rowWeights([13, 27, 49]));//RESULT =  [62, 27] -

/*23.You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num){
  let a = 0
  let b =0;
  let c =0
  let str = num.toString()
  let newStr =str.split('')
  if(newStr[0]<100){
    a = newStr[0]*10;
    b = newStr.length
    result = `${a}+${b}`;
  } 
  // else if (newStr[0] < 1000) {
  //   a = newStr[0]*1000
  //   b=newStr[2]*100;
  //   c =newStr.length
  //   result = `${a}+${b}+${c}`
  // }
    return result;
}

console.log(expandedForm(12));//RESULT = 10+2 - DONE
console.log(expandedForm(42));//RESULT = 40 + 2' - DONE
console.log(expandedForm(70304))//RESULT = ???(70+5)

/*24.Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :] */

function countSmileys(arr){
 let count=0;
 for(let i = 0; i< arr.length; i++){
  let smileFace = arr[i];
  if(
    (smileFace.length===2 && 
      ((smileFace[0]===';'|| smileFace[0]===':') && (smileFace[1]==='D'|| smileFace[1]===')')))
    || 
    (smileFace.length===3 && 
      ((smileFace[0]===';'|| smileFace[0]===':') && (smileFace[1]==='-'|| smileFace[1]==='~') && (smileFace[2]==='D'|| smileFace[2]===')')) 
  )){
      count++
    }
  }
  return count;
}
console.log(countSmileys([":)", ";(", ";}", ":-D"]));// RESULT = 2 - DONE
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))//RESULT = 3 - DONE

/*25.Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:n = 5
[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
] */


  function sugarBox(num){
    if(num<2 || num>30){
      return null
    }

    let box =[]

    for(let i = 0; i<num; i++){
      let row = ''
      for(let k=0; k<num; k++){
        if(k==0 || k ==num-1 || i==0 || i ==num-1){
          row +='-'
        } else{
          row += " ";
        }
      }
      box.push(row)
  }
  return box
}
const box = sugarBox(7);
console.log(box);

/*26.Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона. Чтобы выполнить эту задачу, возвращаемый формат должен быть правильным.
Не забудьте пробел после закрывающих скобок */

function createPhoneNumber(arr){
  //вырезать с 1 по 3 эл-т(включительно)
  let area = arr.slice(0, 3).join("");
  //вырезать с 4 по 6 эл-т(включительно)
  let first = arr.slice(3, 6).join("");
  //вырезать с 7 по 10 эл-т(включительно)
  let second = arr.slice(6, 10).join("");

  let number = `(${area}) ${first}-${second}`;
  return number;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//RESULT = (123) 456-7890 - DONE
console.log(createPhoneNumber([9, 9, 5, 5, 7, 8, 2, 6, 9, 0]));//RESULT =(995) 578-2690 - DONE

/*27. Для каждой цифры в числе n вычисляется сумма этой цифры, возведенной в степень (p + i), где i - позиция цифры в числе (начиная с 0). Затем суммируются все эти результаты. Если эта сумма равна n * k, где k - целое число, то k является искомым значением и должно быть возвращено. Если такого k не существует, возвращается -1.
Например, для числа n = 695 и p = 2:
a = 6, b = 9, c = 5
сумма = 6^2 + 9^3 + 5^4 = 1390
проверяем, есть ли такое k, что 1390 = 695 * k, и находим k.
Задача состоит в том, чтобы найти такое k для заданных n и p или вернуть -1, если такого k не существует. */
function digPow(num, pow){
  let str=num.toString();
  let sum =0;

  for(let i=0; i<str.length;i++){
    sum += Math.pow(parseInt(str[i]),pow+i)
  }

  let k = sum/num
  return Number.isInteger(k) ? k : -1
  

}

console.log(digPow(89, 1));//result =1 -DONE
console.log(digPow(92, 1));//result = -1 - DONE;
console.log(digPow(695, 2));//result =2 -DONE

//28.Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

function min(arr, str){
  let minValue =0
  let minIndex =0
  if(str === 'value'){
    for(let i=0;i<arr.length;i++){
      minValue = Math.min(arr[i])
      return minValue
    }
  
    if (str === "index") {
      minIndex = arr.indexOf(minValue)
      
    }
  }
  return minValue;
}

console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));

/*29.Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.
Example:
Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
Addendum:
Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
The resultant arrays should be in the order they were originally in and should not have its values changed.
No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.*/

function homogenousArrays(arr){
  let newArr =[]
  for(let i=0; i<arr.length; i++){
    let checking = true;
    let type = typeof arr[i][0]

    for(let k=1; k<arr[i].length; k++){
      if(typeof arr[i][k] !== type){
        checking = false
        break
      }
    }
    if(arr[i].length>0 && checking){
       newArr.push(arr[i]);
    }
  }  
  return newArr
}

console.log(homogenousArrays([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]));


//OBJECTS
/*30.При работе со значениями цвета иногда может быть полезно извлечь отдельные значения красного, зеленого и синего (RGB) компонентов цвета. Реализуйте функцию, отвечающую этим требованиям:
Принимает в качестве параметра шестнадцатеричную цветовую строку без учета регистра (например, «#FF9933» или «#ff9933»).
Возвращает Map<String, int> со структурой {r: 255, g: 153, b: 51}, где r, g и b находятся в диапазоне от 0 до 255.
Примечание. Ваша реализация не обязательно должна поддерживать сокращенную форму шестнадцатеричной записи (т. е. «#FFF»).
Пример
"#FF9933" --> {r: 255, g: 153, b: 51} */
function fullCodeColore(str){
  //заменить решентку на пустую строку
  //'^' в регулярном выражении это начало строки
  str = str.replace(/^#/, "");

  //формат цвета: #RRGGBB
  let r = parseInt(str.substring(0, 2), 16);
  let g = parseInt(str.substring(2, 4), 16);
  let b = parseInt(str.substring(4, 6), 16);

  return { r, g, b };
}
let color = "FF9933";
let rgb = fullCodeColore(color)
console.log(`r:${rgb.r}, g:${rgb.g}, b:${rgb.b} `);//RESULT = r:255, g:153, b:51 - DONE

/*31.Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */
function complementaryDna(str){
  let arr = str.split('')
  let newArr =[]

  for(let i =0; i<arr.length; i++){
    if(arr[i] === 'A'){
       newArr.push('T')
    } else if(arr[i] === 'T'){
       newArr.push("A");
    } else if(arr[i] === 'C'){
       newArr.push("G");
    } else if(arr[i] === 'G'){
       newArr.push("C");
    }
      
  }
  return newArr.join('')
 }

console.log(complementaryDna('ATTGC'));//Result = TAACG - DONE
console.log(complementaryDna('GTAT'));//Result = CATA - DONE

/*32. Вы работаете на футбольном стадионе низшей лиги, и вам поручили автоматизировать табло.
Судья выкрикнет счет, у вас уже установлен модуль распознавания голоса, который преобразует голос судьи в строку, но голосовой счет нужно преобразовать в пару для табло!
например «Счет четыре ноль» должен вернуться [4,0]
Счет любой команды находится в диапазоне от 0 до 9, и судья не будет каждый раз произносить одну и ту же строку, например:
"new score: two three"
  
"two two"
  
"Arsenal just conceded another goal, two nil" */

function convertScore(str){
  let score ={
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4, 
    five: 5,
    six: 6, 
    seven: 7,
    eight: 8,
    nine: 9
  }
  let arr = str.split(' ')
  console.log(arr)
  //вывод двух последних элементов массива
  let newArr= arr.slice(-2)
  let newScore =[]
  for(let word of newArr){
    //eсли слово есть в объекте score, добавляем его в новый массив
    if (score[word] !== undefined) {
      newScore.push(score[word]);
    }
  }
  return newScore
}

console.log(convertScore("new score: two three"));//Result =[2, 3] - DONE
console.log(convertScore("two two"));//Result =[2, 2] - DONE

/*33. You have a group chat application, but who is online!?
You want to show your users which of their friends are online and available to chat!
Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
The input data has the following structure: 
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}*/

function onlineStatus(users){
  let result ={
    online: [],
    offline: [],
    away: []
  }

  for(user of users){
    if(user.status ==='online' && user.lastActivity >=10){
      result.online.push(user.username)
    } else if(user.status ==='online' && user.lastActivity >=10){
      result.away.push(user.username)
    } else{
      result.offline.push(user.username)
    }
  }
  return result
}

let newUser = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

console.log(onlineStatus(newUser))//RESULT = { online:['David', 'Bob], offline: ['Lusy'], away:[] } -DONE

/*34.Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке равен «(», если этот символ встречается в исходной строке только один раз, или «)», если этот символ встречается в исходной строке более одного раза. нить. Игнорируйте заглавные буквы при определении того, является ли символ дубликатом.
Пример:
 "din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */
function getDuplicateEncoder(string){
  //игнорирование регистра по условиям(перевод всех букв в нижний регистр)
  let lowerCaseString = string.toLowerCase();
  let out = "";
  //для отслеживания символов, которые уже встречались в строке.Объект seen в данной функции когда встречается  новый символ в строке, добавляем его в объект seen в качестве ключа, устанавливая его значение в true. Если встречается тот же символ впоследствии, то проверяем объект seen и видим, что ключ (символ) уже существует в нем.
  let seen = {};
  for (let i = 0; i < lowerCaseString.length; i++) {
    let curChar = lowerCaseString[i];
    //если нет повторяющихся
    if (seen[curChar]) {
      out += ")";
    } 
    //есть повторяющиеся
    else {
      out += "(";
      seen[curChar] = true;
    }
  }
  return out;
}
console.log(getDuplicateEncoder("din"));//RESULT = ((( - DONE
console.log(getDuplicateEncoder("recede"));//RESULT = ((()() -???

/*35.Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5 */

function doesArithmetic(arr){
  result = 0
  if (arr.includes("add")) {
    result = arr[0] + arr[1];
  } else if (arr.includes("subtract")) {
    result = arr[0] - arr[1];
  } else if (arr.includes("multiply")) {
    result = arr[0] * arr[1];
  } else if (arr.includes("divide")) {
    result = arr[0] / arr[1];
  }

  return result
}

console.log(doesArithmetic([5, 2, "add"]));//Result = 7 -DONE
console.log(doesArithmetic([5, 2, "subtract"]));//Result = 3-DONE
console.log(doesArithmetic([5, 2, "multiply"]));//Result = 10-DONE
console.log(doesArithmetic([5, 2, "divide"]));//Result = 2.5-DONE

/*36.Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object. */
function pluck(arr, str){
  result=[]
  for( let res of arr){
    if(Object.keys(res)===str){
      result.push(Object.values(res))
    }
  }
  return result
}

console.log(pluck([{a:1}, {a:2}], 'a'))