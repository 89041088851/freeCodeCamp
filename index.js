function sum(a, b) {
  return a + b;
}
sum(5, 8);
window.alert(sum);


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High'
  }

  // Замена цепей If Else переключателем

  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
    }

    // Only change code above this line
    return answer;
  }

  chainToSwitch(7);

  // Возврат логических значений из функций

  function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
  }

  isLess(10, 15);

  // Возвращайте ранний шаблон для функций

  // Setup
  function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  abTest(2, 2);

  // Подсчет Карт
  var count = 0;

  function cc(card) {
    // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
      //alert("2 3 4 5 6");
      count += 1;
    }
    else if (card == 7 || card == 8 || card == 9) {
      count += 0;
    }
    else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
    }
    if (count <= 0) {
      return String(count) + " Hold";
    }
    else {
      return String(count) + " Bet";
    }

    return "Change Me";
    // Only change code above this line
  }

  cc(2); cc(3); cc(7); cc('K'); cc('A');

  // Создание объектов JavaScript

  var myDog = {
    // Only change code below this line
    name: "John",
    legs: 4,
    tails: 1,
    friends: ["Dos", "Bob"]

    // Only change code above this line
  };

  // Доступ к свойствам объекта с помощью точечной записи

  // Setup
  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

  // Only change code below this line

  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  // Доступ к свойствам объекта с помощью скобок

  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

  var entreeValue = testObj['an entree'];
  var drinkValue = testObj['the drink'];

  // Доступ к свойствам объекта с помощью переменных

  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  var playerNumber = 16;
  var player = testObj[playerNumber];

  // Обновление Свойств Объекта

  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = 'Happy Coder';

  // Добавление новых свойств в объект JavaScript

  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = 'bow-gow';

  // Delete Properties from a JavaScript Object
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;

  // Использование объектов для поиска

  function phoneticLookup(val) {
    var result = "";

    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
  }

  phoneticLookup("charlie");

  // Манипулирование Сложными Объектами

  var myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true
    },
    // Add record here
    {
      artist: "Deep Purple",
      title: "Smoke on the water",
      release_year: 1976,
      formats: ["CD", "8T", "LP"]
    }
  ];

  // Доступ к Вложенным Объектам

  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  var gloveBoxContents = myStorage.car.inside['glove box'];

  // Доступ к Вложенным Массивам

  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];

  var secondTree = myPlants[1].list[1];

  // Коллекция Записей

  var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || [];
      records[id][prop].push(value);
    } else {
      records[id][prop] = value;
    }
    return records;
  }

  // Повторяйте с помощью JavaScript, пока циклы

  var myArray = [];
  var i = 5;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }

  // Выполните итерацию с помощью JavaScript для циклов

  var myArray = [];
  for (var i = 1; i < 6; i++) {
    myArray.push(i);
  }

  // Повторите Нечетные Числа С Помощью Цикла For

  var myArray = [];
  for (var i = 1; i < 10; i += 2) {
    myArray.push(i)
  }

  // Считайте В Обратном Порядке С Помощью Цикла For

  var myArray = [];
  for (var i = 9; i > 0; i -= 2) {
    myArray.push(i)
  }

  // Выполните итерацию по массиву с циклом For

  var myArr = [2, 3, 4, 5, 6];
  var total = 0;
  for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
  }

  // Вложенность Для Петель

  function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
  }

  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  // Выполните итерацию с помощью JavaScript Do...В То время Как Петли
  var myArray = [];
  var i = 10;
  do {
    myArray.push(i);
    i++;
  } while (i < 5)

  // Замените циклы с помощью рекурсии

  function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

  // Поиск профиля

  var contacts = [
    {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
    },
    {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];


  function lookUpProfile(name, prop) {
    const fnMatch = contacts.filter(cont => cont.firstName === name);
    return fnMatch.length ? (fnMatch[0][prop] ? fnMatch[0][prop] : "No such property") : "No such contact";
  }

  lookUpProfile("Akira", "likes");

//  Генерируйте случайные дроби с помощью JavaScript

function randomFraction() {
  return Math.random();
}

// Генерируйте случайные целые числа с помощью JavaScript

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Генерируйте случайные целые числа в пределах диапазона

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * ((myMax + 1) - myMin)) + myMin;
}

// Используйте функцию parseInt с основанием

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// Используйте Условный (троичный) оператор

