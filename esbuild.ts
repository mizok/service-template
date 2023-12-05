// esbuild.config.ts
import { BuildOptions, build } from 'esbuild'
import copyfiles from 'copyfiles'
import { rimraf } from 'rimraf'

const config: BuildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/main.js',
  tsconfig: './tsconfig.json',
}

build(config)
  .then(() => {
    return Promise.all([rimraf('./dist/package.json'), rimraf('./dist/static')])
  })
  .then(() => {
    copyfiles(['static/*', 'dist'], { all: false }, () => {
      console.log('static files copied successfully!')
    })
  })
