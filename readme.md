# Using

Darkness Tools is a Node.JS module, that provides convenient functions, that make coding easier
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
### random()
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
## updateClasses()
Function that adds new method to global classes

Available `String`, `Array`, `Object`, `Number` and `Date` methods
```js
// Give all prototypes of available classes in which u want to add new methods

tools.updateClasses(Date.prototype, Number.prototype, Array.prototype) // updates Date, Number and Array classes
```
# Methods of updated classes
## String
### replaceAll()
Returns a new string with all matches of a pattern or substring replaced by a replacement
```js
'Round apples and juicy Apples'.replaceAll(/apples/gi, 'oranges') // Round oranges and juicy oranges

'Round apples and juicy apples'.replaceAll('apples', 'oranges') // Round oranges and juicy oranges
```
### deleteAll()
Returns a new string with deleted all matches of a pattern or substring
```js
'Darkness tools is not the best'.deleteAll('not') // Darkness tools is the best
```
### setData()
Returns a new string with replaced `%key%` with specified value 
```js
const user = {
    name: 'John',
    age: 20
}
'My name is %name%, I am %age% y.o.'.setData(user) // My name is John, I am 20 y.o
```

## License
[MIT](https://choosealicense.com/licenses/mit/)