const timeInMs = {
    millisecond: 1,
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24
}
class superDate {
    timeToDate(date) {
        const fromDate = this
        let timeInMsDelta = new Date(+date - +fromDate),
            result = {}
        result.days = Math.floor(timeInMsDelta / timeInMs.day)
        timeInMsDelta -= result.days * timeInMs.day
        result.hours = Math.floor(timeInMsDelta / timeInMs.hour)
        timeInMsDelta -= result.hours * timeInMs.hour
        result.minutes = Math.floor(timeInMsDelta / timeInMs.minute)
        timeInMsDelta -= result.minutes * timeInMs.minute
        result.seconds = Math.floor(timeInMsDelta / timeInMs.second)
        timeDelta -= result.seconds * time.second
        result.milliseconds = timeDelta
        return result
    }
}
class superObject {
    toString() {
        return JSON.stringify(this, null, '\t\t')
    }
    copyJSONObject(obj) {
        return JSON.parse(JSON.stringify(obj))
    }
}
class superNumber {
    in_range(min, max) {
        return this >= min && this <= max
    }
}
class superArray {
    randomElement() {
        return this[random(0, this.length - 1)]
    }
    lastElement() {
        return this[this.length - 1]
    }
    deleteElement(elementToDelete) {
        const array = this
        return array.splice(array.indexOf(elementToDelete), 1)
    }
    sum() {
        return this.reduce((element, sum) => element + sum)
    }
}
class superString {
    replaceAll(substring, value) {
        return this.split(substring).join(value)
    }
    deleteAll(substring) {
        return this.replaceAll(substring, '')
    }
    toBoolean() {
        return (this !== 'false' && this !== '' && this !== 'null' && this !== 'undefined' && this !== '0')
    }
    setData(dataSet) {
        let string = this
        for (const keyword in dataSet) {
            string = string.replaceAll(`%${keyword}%`, dataSet[keyword])
        }
        return string
    }
    firstToUpperCase() {
        return `${this[0].toUpperCase()}${this.substr(1)}`
    }
}
export default {
    random: (min, max) => {
        if (typeof max === 'number') {
            if (max === Infinity) {
                max = Number.MAX_VALUE
            }
            return Math.floor(min + Math.random() * (max + 1 - min))
        } else if (Array.isArray(min)) {
            return min[this.random(0, min.length - 1)]
        } else if (typeof min === 'object') {
            return Object.keys(min)[this.random(0, min.length - 1)]
        } else if (Number.isInteger(min)) {
            return Math.floor(Math.random() * (min + 1))
        }
    },
    randomBoolean: () => this.random(1),
    updateClasses: (...prototypes) => {
        for (const prototype of prototypes) {
            const className = (prototype.constructor || {}).name
            if (typeof className === 'string') {
                if (eval(`typeof super${className}`) !== 'undefined') {
                    const methods = Object.getOwnPropertyNames(eval(`new super${className}()`).__proto__),
                        exportingProto = eval(`super${className}.prototype`)
                    for (const method of methods) {
                        if (!prototype.hasOwnProperty(method)) {
                            prototype[method] = exportingProto[method]
                        }
                    }
                }
            }
        }
    },
    timeInMs: timeInMs
}