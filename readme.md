# Using

Darkness Tools is a Node.JS module, that provides convenient functions, that make coding easier.

P.S. There will be no conflicts with native methods in new methods of global classes - if one of them already exists, it will not be replaced by a new one
# Installation

```bash
npm i darkness-tools 
```
or using `yarn`:

```bash
yarn add darkness-tools 
```

# Usage

```node
import tools from 'darkness-tools'
```

# Methods
### random(min, max)
Returns random entities
```js
tools.random(10) // random integer between 0 and 10
tools.random(10, 100) // random integer between 10 and 100

tools.randomBoolean() // randomly true or false

tools.random([...]) // random element from array

tools.random({...}) // random key from object
```
### timeInMs
Returns object with time frames in milliseconds

Available `millisecond`, `second`, `minute`, `hour` and `day`
```js
tools.timeInMs.hour // 3600000

tools.timeInMs.day // 86400000
```
## updateClasses(...prototypes)
Function that adds new method to global classes

Available `String`, `Array`, `Object`, `Number` and `Date` methods
```js
// Give all prototypes of available classes in which u want to add new methods

tools.updateClasses(Date.prototype, Number.prototype, Array.prototype) // updates Date, Number and Array classes
```
# Methods of updated classes
## String
### replaceAll(substring, replacer)
Returns a new string with all matches of a pattern or substring replaced by a replacement
```js
'Round apples and juicy Apples'.replaceAll(/apples/gi, 'oranges') // Round oranges and juicy oranges

'Round apples and juicy apples'.replaceAll('apples', 'oranges') // Round oranges and juicy oranges
```
### deleteAll(substring)
Returns a new string with deleted all matches of a pattern or substring
```js
'Darkness tools is not the best'.deleteAll('not') // Darkness tools is the best
```
### setData(data)
Returns a new string with replaced `%key%` with specified value 
```js
const user = {
    name: 'John',
    age: 20
}
'My name is %name%, I am %age% y.o.'.setData(user) // My name is John, I am 20 y.o
```
### firstToUpperCase()
Returns a new string with first symbol at upper case 
```js
'darkness'.firstToUpperCase() // Darkness
```
### toBoolean()
Converts string to `boolean`
```js
'darkness'.firstToUpperCase() // Darkness
```
## Array
### randomElement()
Returns random element from array
```js
[1, 2, 3].randomElement() // Randomly 1, 2 or 3

const names = ['Jonh', 'Helen', 'Fluffy']
name.randomElement() // Random name from names
```
### lastElement()
Returns last element from array
```js
[1, 2, 3].lastElement() // 3

const names = ['Jonh', 'Helen', 'Fluffy']
names.lastElement() // Fluffy
```
### removeElement(element)
Removes specified element from array
Note, that this will not work with arrays and objects
```js
[5, 4, 3, 2, 1].removeElement(2) // [5, 4, 3, 1]

const names = ['Jonh', 'Helen', 'Fluffy']
names.removeElement('Helen') // ['John', 'Fluffy']
```
### sum()
Returns sum of all elements of array
```js
[5, 4, 3, 2, 1].sum() // 15

[18, 2, 5, '$'].sum() // 25$
```
## Number
### in_range(a, b)
Returns `true` or `false` corresponding to the existence of a number in the interval `[a;b]`
```js
const number = 115

number.in_range(0, 100) // false
number.in_range(0, 200) // true
number.in_range(100, 115) // true
```
## Object
### toShowString()
Converts object to string, placing tabs
```js
const user = {
    name: 'Fluffy',
    age: 20,
    friends: ['John', 'Helen']
}
//native method:
JSON.stringify(user)  // "{"name":"Fluffy","age":20,"friends":["John","Helen"]}"

//new method
user.toShowString() // result will be:
"{
    "name": "Fluffy",
    "age": 20,
    "friends": [
        'John',
        'Helen'
    ]
}"
```
### createCopy()
Returns a copy of object. Also, all values of keys of object will be also copies, not a links to it
Note, that all class instances will be converted to simple Objects
```js
const user1 = {
    name: 'Fluffy',
    age: 20,
    friends: ['John', 'Helen']
}

const user2 = user1
user1.age++
user2.age // 21 intead of 20

// copying  with new method
const user2 = user1.createCopy()
user1.age++
user1.age // 21
user2.age // 20
```
## Date
### leftTimeTo(date)
Returns object with time to specified date in days, hours, minutes, seconds and milliseconds
```js
const date = new Date('December 02, 2020 12:36:11:16'),
    nextDate = new Date('December 31, 2020 24:00:00:00')
    
date.leftTimeTo(nextDate) // { days: 29, hours: 11, minutes: 23, seconds: 48, milliseconds: 984 }
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
