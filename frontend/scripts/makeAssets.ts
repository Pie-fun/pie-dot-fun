import { readdir, readFile, writeFile } from 'fs/promises'
import { cleanUpDirectory, makeDirectoryIfNotExists, prettify } from './utils'
import { randomUUID } from 'crypto'

const rootDirPath = '.'
const iconImagesDirPath = `${rootDirPath}/assets/icons`
const iconComponentPath = `${rootDirPath}/components/Icon`
const iconsComponentPath = `${rootDirPath}/components/Icon/Icons`
const lottiesPath = `${rootDirPath}/assets/lotties`
const iconStoryPath = `${iconComponentPath}/Icon.stories.tsx`

let imgIndexString = ''
let iconIndexString = ''
let lottieFileCount = 0
let componentFileCount = 0

function convert({
  str,
  convertType,
}: {
  str: string
  convertType?: 'pascal'
}): string {
  const regexp =
    convertType === 'pascal' ? /(^|_)([a-zA-Z]|\d)/g : /(_)([a-zA-Z]|\d)/g

  return str.replace(regexp, (_, __, char) => char.toUpperCase())
}

function createComponentFileText({
  componentName,
  content,
}: {
  componentName: string
  content: string
}) {
  return `
import { SVGProps } from 'react';

export default function ${componentName}({ ...props }: Readonly<SVGProps<SVGSVGElement>>) {
  return (
      ${content}
  );
};
`.trim()
}

const isUUID = (value: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(value)

async function convertFiles() {
  const files = await readdir(iconImagesDirPath)

  for (const file of files) {
    const fileName = file.split('/').pop()

    if (!fileName) continue

    const fileExtension = fileName.split('.').pop()
    const fileExtensionRegex = new RegExp(`^${fileExtension}$`, 'i')

    if (!fileExtensionRegex.test('svg')) continue

    const fileContent = await readFile(`${iconImagesDirPath}/${file}`, 'utf-8')
    const uuid = randomUUID()

    const content = fileContent
      .replaceAll(/clip-path="[^"]+"/g, '')
      .replaceAll(/url\(#([^)]+)\)/g, (match, id) =>
        isUUID(id) ? match : `url(#${uuid})`,
      )
      .replaceAll(/id="([^"]+)"/g, (match, id) =>
        isUUID(id) ? match : `id="${uuid}"`,
      )
      .replaceAll(/style="[^"]+"/g, '')
      .replaceAll('clip-rule', 'clipRule')
      .replaceAll('fill-rule', 'fillRule')
      .replaceAll('stop-color', 'stopColor')
      .replace('">', '"data-icon { ...props }>')

    const fileNameSnake = fileName.replace(/\.[^/.]+$/, '')
    const fileNamePascal = convert({
      str: fileNameSnake,
      convertType: 'pascal',
    })
    const componentFileText = createComponentFileText({
      componentName: fileNamePascal,
      content,
    })

    await writeFile(
      `${iconsComponentPath}/${fileNamePascal}.tsx`,
      componentFileText,
    )

    iconIndexString += `export { default as ${fileNamePascal} } from './${fileNamePascal}';\n`
    componentFileCount++
  }

  await writeFile(`${iconsComponentPath}/index.ts`, iconIndexString)

  const lottieFiles = await readdir(lottiesPath)

  for (const file of lottieFiles) {
    const fileName = file.split('/').pop()

    if (!fileName || fileName === 'index.ts') continue
    const fileNameCamel = convert({ str: fileName.replace(/\.[^/.]+$/, '') })

    imgIndexString += `export { default as ${fileNameCamel} } from './${fileName}';\n`
    lottieFileCount++
  }

  await writeFile(`${lottiesPath}/index.ts`, imgIndexString)
}

async function addIconStories() {
  const iconFiles = await readdir(iconImagesDirPath)

  const writeIconImports = async () => {
    const fileContent = await readFile(iconStoryPath, 'utf-8')
    const startImportMarker = '// icon import start'
    const endImportMarker = '// icon import end'
    const startImportIndex = fileContent.indexOf(startImportMarker)
    const endImportIndex = fileContent.indexOf(endImportMarker)

    const importIconsString = iconFiles
      .map((file) => {
        const fileName = file.split('/').pop()

        if (!fileName) return

        const fileNameSnake = fileName.replace(/\.[^/.]+$/, '')
        const fileNamePascal = convert({
          str: fileNameSnake,
          convertType: 'pascal',
        })

        return `import ${fileNamePascal} from '@/components/Icon/Icons/${fileNamePascal}'`
      })
      .join(';')

    const beforeContent = fileContent.substring(
      0,
      startImportIndex + startImportMarker.length,
    )
    const afterContent = fileContent.substring(endImportIndex)
    const modifiedFileContent = `${beforeContent}\n${importIconsString}\n${afterContent}`

    await writeFile(iconStoryPath, modifiedFileContent, 'utf8')
  }

  const writeIcons = async () => {
    const fileContent = await readFile(iconStoryPath, 'utf-8')
    const startIconsMarker = '// icons start'
    const endIconsMarker = '// icons end'
    const startIconsIndex = fileContent.indexOf(startIconsMarker)
    const endIconsIndex = fileContent.indexOf(endIconsMarker)

    const icons = iconFiles
      .map((file) => {
        const fileName = file.split('/').pop()

        if (!fileName) return

        const fileNameSnake = fileName.replace(/\.[^/.]+$/, '')
        const fileNamePascal = convert({
          str: fileNameSnake,
          convertType: 'pascal',
        })

        return `{
        name: '${fileNamePascal}',
        icon: <${fileNamePascal} />,
      }`
      })
      .join(',')

    const beforeContent = fileContent.substring(
      0,
      startIconsIndex + startIconsMarker.length,
    )
    const afterContent = fileContent.substring(endIconsIndex)
    const modifiedFileContent = `${beforeContent}\n${icons}\n${afterContent}`

    await writeFile(iconStoryPath, modifiedFileContent, 'utf8')
  }

  await writeIconImports()
  await writeIcons()
}

async function checkDirs() {
  await makeDirectoryIfNotExists({
    path: iconImagesDirPath,
    options: { recursive: true },
  })
  await makeDirectoryIfNotExists({
    path: lottiesPath,
    options: { recursive: true },
  })
  await makeDirectoryIfNotExists({
    path: iconComponentPath,
    options: { recursive: true },
  })
  await cleanUpDirectory({
    path: iconsComponentPath,
    options: { recursive: true, force: true },
  })
  await makeDirectoryIfNotExists({
    path: iconsComponentPath,
    options: { recursive: true },
  })
}

async function makeAssets() {
  try {
    await checkDirs()
    await convertFiles()
    await addIconStories()
    await prettify({
      path: `${iconComponentPath}/* ${lottiesPath}/index.ts`,
    })

    console.info(` 
\u001B[1m\u001B[32m[ADDED]\u001B[39m\u001B[22m Assets are added successfully!
  - icons : ${componentFileCount}
  - lotties: ${lottieFileCount}
    `)
  } catch (error) {
    console.error(error)
  }
}

makeAssets()
