// 1- Install these packages in your dev dependencies using this command:

npm i -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react prettier


// 2- Create ".eslintrc.json" file in the root directory with these configration: 

{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    // "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "off",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-undef": "warn",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "req|res|next|val" }]
  }
}