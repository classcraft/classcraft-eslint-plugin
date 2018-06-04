# eslint-plugin-classcraft

Clascraft ESLint Plugin

## When you add a rule
- Make sure to use the following options in the rule definition
```
{
    meta: {
        docs: {
            ...
            category: "classcraft",
            recommended: true,
            ...
        },
        ...
    },
}
```
- Bump the MINOR version in `package.json`

## When you modify an existing rule
- Bump the PATCH version in `package.json`

## When you bump the version in `package.json`
- Create a release matching the new version number in the repository
- Update the hash part of the package URI in the `package.json` of Game to match the new version number
- Run `meteor npm install` for Game
