// vite.config.ts
import { UserConfig } from 'vite'

const config: UserConfig = {
  build: {
    outDir: 'dist', // 打包後的文件輸出目錄
    target: 'node16.17', // Node.js 的目標版本
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: 'src/main.ts', // 指定入口文件，這裡的路徑根據你的專案實際情況設置
      },
      output: {
        entryFileNames: '[name].js', // 指定輸出文件名為固定的 [name].js
      },
    },
  },
}

export default config
