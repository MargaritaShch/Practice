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

/*7.Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона. Чтобы выполнить эту задачу, возвращаемый формат должен быть правильным.
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

/*8.Возвращает количество гласных в заданной строке.Гласными для этой Ката мы будем считать a, e, i, o, u (но не y).Входная строка будет состоять только из строчных букв и/или пробелов.*/
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

/*9.Учитывая два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b. */
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

/*10.Изограмма – это слово, в котором нет повторяющихся букв, как последовательных, так и непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Не обращайте внимания на регистр букв. */
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

/*11.Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
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

/*12.Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
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

/*13.Ваша задача — создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.*/

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

/*14.Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке равен «(», если этот символ встречается в исходной строке только один раз, или «)», если этот символ встречается в исходной строке более одного раза. нить. Игнорируйте заглавные буквы при определении того, является ли символ дубликатом.
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

/*15.Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг! В противном случае, вы можете быть уверены, что он не ваш друг.
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

/*16.Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: в этой ката y не считается гласной. */
function disemvowelTrolls(string){
 let vowels = ["a", "e", "i", "o", "u"];
 let newStr='';
 for(leti=0; i<vowels.length; i++){
  newStr = string.replace(vowels[i], "");
  
 }
 console.log(newStr);
}
console.log(disemvowelTrolls("This website is for losers LOL!"));//как перебрать гласные?