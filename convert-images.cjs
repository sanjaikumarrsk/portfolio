const sharp = require('D:/portfolio/.image-tools/node_modules/sharp')

const files = [
  ['public/assets/profile-blended.png', 85],
  ['public/assets/projects/friday-.png', 84],
  ['public/assets/projects/intralink.png', 84],
  ['public/assets/projects/signnova.png', 84],
  ['public/assets/projects/smart-alert.png', 84],
  ['public/assets/projects/lunar-image-registration.png', 84],
  ['public/assets/projects/smart-washer-system-.png', 84],
  ['public/assets/mkce-logo.png', 90],
  ['public/assets/mount-giris-logo.jpg', 88],
  ['public/assets/organizations/be10x.png', 90],
  ['public/assets/organizations/ibm.png', 90],
  ['public/assets/organizations/google-student-ambassador.jpg', 90],
  ['public/assets/organizations/hackerrank.png', 90],
  ['public/assets/organizations/microsoft.png', 90],
  ['public/assets/organizations/syntax2code.jpg', 90],
]

Promise.all(files.map(async ([input, quality]) => {
  const output = input.replace(/\.(png|jpe?g)$/i, '.webp')
  await sharp(input).webp({ quality, effort: 6, alphaQuality: 100 }).toFile(output)
  console.log(output)
})).catch((error) => {
  console.error(error)
  process.exit(1)
})
