

```javascript

// 1. Create a function that takes a string and returns a string with the first letter of each word capitalized.

function capitalize(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}