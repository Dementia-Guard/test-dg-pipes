const conf = {
    testEnvironment: 'jsdom',
    testMatch: ["**/tests/jest/**/*.test.[jt]s?(x)"], // Run only Jest tests
    testPathIgnorePatterns: ["/node_modules/", "/tests/playwright/"], // Ignore Playwright tests
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
      '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageThreshold: {
      global: {
        lines: 80,   // Minimum percentage of line coverage required
        branches: 80, // Minimum percentage of branch coverage required
        functions: 80,
        statements: 80,
      },
    },
  };

  export default conf