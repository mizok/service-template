import { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  // 定義你的 Commitlint 規則
  rules: {
    typeEnum: [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
    ],
    scopeEmpty: [
      2,
      'always',
      [
        'breaking-change',
        'feat',
        'fix',
        'refactor',
        'chore',
        'docs',
        'style',
        'test',
        'perf',
      ],
    ],
    scopeEnum: [
      2,
      'always',
      ['core', 'ui', 'config', 'build', 'docs', 'chore', 'test'],
    ],
    subjectMaxLength: [2, 'always', 100],
    headerMaxLength: [2, 'always', 100],
  },
  parserPreset: {
    // 自定義 commit 訊息解析器（如果需要的話）
    parserOpts: {
      issuePrefixes: ['#'], // 定義 issue 號碼的前綴符號
    },
  },
}

export default config
