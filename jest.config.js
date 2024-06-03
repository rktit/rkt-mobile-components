module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    './node_modules',
    './example',
    './lib/',
    '<rootDir>/__tests__/test-utils.tsx',
  ],
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!src/**/*.d.[jt]s?(x)',
    '!src/theme/**',
    '!src/index.ts',
    '!src/types/index.ts',
    '!src/assets/icons/CustomIcon.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/__tests__/setup-tests.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native-picker|react-native-linear-gradient|@react-navigation|redux-persist)',
  ],
};
