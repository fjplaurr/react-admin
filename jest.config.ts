import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
};

export default config;
