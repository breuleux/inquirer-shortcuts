
inquirer-promise
================

Promise wrapper around `inquirer`.

## prompt

```javascript
inquirer = require("inquirer-promise");

inquirer.prompt([{type: "input",
                  name: "animal",
                  message: "Favorite animal?",
                  default: "wapiti"}])
  .then(results => console.log(results.animal));
```

## question

Ask one question.

```javascript
inquirer.question({type: "input",
                   message: "Favorite animal?",
                   default: "wapiti"})
  .then(animal => console.log(animal));
```

## input

```javascript
inquirer.input("Favorite animal?", {default: "wapiti"})
  .then(animal => console.log(animal));
```

## confirm

```javascript
inquirer.confirm("Is the wapiti your favorite animal?")
  .then(answer => console.log(answer));
```

## list

```javascript
inquirer.list("Favorite animal?", ["cat", "dog", "wapiti"])
  .then(animal => console.log(animal));
```

## rawlist

```javascript
inquirer.rawlist("Favorite animal?", ["cat", "dog", "wapiti"])
  .then(animal => console.log(animal));
```

## password

```javascript
inquirer.rawlist("Enter password.")
  .then(password => console.log("Don't print passwords!"));
```


