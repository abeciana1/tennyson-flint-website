import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "node_modules/(?!(react-markdown|remark-.*|rehype-.*)/)" // Allow Jest to transform ES modules
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "react-markdown": "<rootDir>/__mocks__/react-markdown.js",
  }
}

export default createJestConfig(config)