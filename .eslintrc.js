module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                tabWidth: 4,
                singleQuote: true,
                jsxSingleQuote: true,
                jsxBracketSameLine: false,
                printWidth: 110,
            },
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        curly: ['error', 'multi'],
    },
};
