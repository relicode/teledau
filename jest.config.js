module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/__tests__/mocks/'],
  moduleNameMapper: {
    '^@functions/(.*)': '<rootDir>/src/functions/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
