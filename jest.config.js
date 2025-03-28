module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
  testMatch: ["**/__tests__/**/*.test.js", "**/*.test.js"],
  collectCoverage: true,
  coverageReporters: ["text"],
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/tests/", "!/node_modules/**"]
}
