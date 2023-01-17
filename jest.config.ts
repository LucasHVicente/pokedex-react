const config = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)",
  ],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-tests.ts"],
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  verbose: true,
};

export default config;
