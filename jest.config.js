const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
