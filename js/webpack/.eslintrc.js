module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVsersion: 6,
        sourceType: "module",
    },
    rules: {
        "no-var": 2
    }
}