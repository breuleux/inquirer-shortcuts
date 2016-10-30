
inquirer-shortcuts
==================

Wraps the [`inquirer`](https://github.com/SBoudrias/Inquirer.js/)
package and adds shortcuts for all question types. This is handy if
you only have one prompt or if you use async/await.


## prompt

This method remains unchanged from the `inquirer` package.

```javascript
inquirer = require("inquirer-shortcuts");

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

## expand

```javascript
inquirer.expand("Favorite animal?",
                [{key: "c", name: "cat"}
                 {key: "d", name: "dog"}
                 {key: "w", name: "wapiti"}])
  .then(animal => console.log(animal));
```

## checkbox

```javascript
inquirer.checkbox("Favorite animals?", ["cat", "dog", "wapiti"])
  .then(animals => console.log(animals));
```

## password

```javascript
inquirer.password("Enter password.")
  .then(password => console.log("Don't print passwords!"));
```


