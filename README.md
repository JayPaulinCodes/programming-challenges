# Burglary Series (05): Third Most Expensive

Branch: `js/burglarySeries05`<br>
Challenge: `Burglary Series (05): Third Most Expensive`<br>
Source: [edabit](https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg)<br>

## Description

Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

## Example

```
thirdMostExpensive({}) ➞ false

thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false

thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
```

## Notes

All prices will be of different monetary values.
