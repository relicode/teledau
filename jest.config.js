module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@functions/(.*)': '<rootDir>/src/functions/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
