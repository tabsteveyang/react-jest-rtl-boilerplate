module.exports = {
    roots: [
      '<rootDir>/src'
    ],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts'
    ],
    setupFiles: [
      'react-app-polyfill/jsdom'
    ],
    setupFilesAfterEnv: [
      '<rootDir>/jest/scripts/setupTests.js'
    ],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/jest/scripts/transforms/babelTransform.js',
      '^.+\\.css$': '<rootDir>/jest/scripts/transforms/cssTransform.js',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/jest/scripts/transforms/fileTransform.js'
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$'
    ],
    modulePaths: [],
    moduleNameMapper: {
      '^@js(.*)$': '<rootDir>/src/js$1',
      '^@scss(.*)$': '<rootDir>/src/scss$1',
      '^@img(.*)$': '<rootDir>/img$1'
    },
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node'
    ],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    resetMocks: true
  }
