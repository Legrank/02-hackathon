module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "standard", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "never",
            },
        ],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
            },
        ],
    },
};
