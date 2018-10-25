import gaze from 'gaze'
import webpackSpritesmith from 'webpack-spritesmith'
import { spriteConfig, makeSpriteMap } from './spriteCommon'

const makePngSprite = (folder) => {
  return new webpackSpritesmith({
    src: {
      cwd: `${spriteConfig.image_source}/png/${folder}`,
      glob: '*.png'
    },
    target: {
      image: `${spriteConfig.image_dest}/png/${folder}.png`,
      css: [
        [
          `${spriteConfig.scss_dest}/png/_${folder}.scss`,
          {
            spritesheetName: folder,
            format: 'handlebars'
          }
        ]
      ]
    },
    spritesmithOptions: {
      padding: 2
    },
    customTemplates: {
      'handlebars': 'scripts/handlebars/sprite_png_template.hbs'
    },
    apiOptions: {
      handlebarsHelpers: { // 전역
        ratio: spriteConfig.ratio
      }
    }
  })
}

const spritePng = () => {
  if (!spriteConfig.pngFolders) return

  makeSpriteMap('png')
  return spriteConfig.pngFolders.map((folder) => makePngSprite(folder))
}

gaze(`${spriteConfig.image_source}/png/**/*.png`, (err, watcher) => {
  watcher.on('all', () => spritePng())
})

export default spritePng()
