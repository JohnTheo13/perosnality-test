module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true,
  },
  "globals": {
    "expect": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
           "jsx": true
       }
   },
  "extends": "airbnb",
  "rules": {
  "object-curly-newline": ["error", { "minProperties": 3 }],
  "one-var":  ["error", { var: "never" }],
  "react/require-default-props": 0,
  "import/no-extraneous-dependencies": 0,
  "jsx-a11y/no-static-element-interactions": 0,
  "import/no-unresolved": 0,
  "import/extensions": 0,
  "react/forbid-prop-types": 0,
  "react/no-array-index-key": 0,
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  "class-methods-use-this": 0,
  "arrow-parens": ["error", "as-needed"],
  "arrow-body-style": ["error", "as-needed"],
  "implicit-arrow-linebreak": ["error", "beside"],
  "react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
  "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "id" ]
            },
            "allowChildren": false
        }]
  },
  overrides: [
    {
      files: "*.test.js",
      rules: {
        "no-unused-expressions": "off"
      }
    }
  ]
};