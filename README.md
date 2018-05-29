# classcraft-eslint-plugin

Clascraft ESLint Plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `classcraft-eslint-plugin`:

```
$ npm install classcraft-eslint-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `classcraft-eslint-plugin` globally.

## Usage

Add `classcraft-eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "classcraft-eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "classcraft-eslint-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





