module.exports = {
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    testMatch: ['<rootDir>/**/**/__tests__/**/*test.js'],
    coverageDirectory: 'dist/test-coverage',
    coverageReporters: ['html', 'text'],
    collectCoverageFrom: [
        '<rootDir>/**/**/main/**/*.js',
    ],
    rootDir: __dirname
};