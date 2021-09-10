var preset = require("jest-preset-angular/jest-preset");

module.exports = {
  ...preset,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./src/setup-jest.js"],
  testMatch: ["**/*.spec.ts"],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsconfig: "./tsconfig.test.json",
      isolatedModules: true,
    },
  },
};