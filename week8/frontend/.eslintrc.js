module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "array-bracket-spacing": [ "error", "always" ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": [ "error", "always" ],
        "constructor-super": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "no-bitwise": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": [ "error", { "max": 1 } ],
        "no-multi-spaces": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-redeclare": "error",
        "no-shadow": "error",
        "no-undef-init": "error",
        "no-unreachable": "error",
        "no-unsafe-negation": "error",
        "no-use-before-define": [ "error", "nofunc" ],
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": [ "error", "always" ],
        "one-var": "off",
        "prefer-const": "error",
        "space-before-blocks": [ "error", "always" ],
        "space-infix-ops": [ "error", { "int32Hint": false } ],
        "quotes": ["error", "double"]
    }
};