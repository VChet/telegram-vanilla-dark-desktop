<p align="center">
  <img alt="Telegram Vanilla Dark" src="./meta/logo.png" width="580"><br/>
  <a href="https://github.com/VChet/telegram-vanilla-dark-desktop/tags">
    <img src="https://img.shields.io/github/tag/VChet/telegram-vanilla-dark-desktop.svg?label=version" alt="Version">
  </a>
  <a href="https://github.com/VChet/telegram-vanilla-dark-desktop/actions/workflows/test.yml">
    <img src="https://github.com/VChet/telegram-vanilla-dark-desktop/actions/workflows/test.yml/badge.svg" alt="eslint">
  </a>
  <a href="https://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
  </a>
</p>

## Preview

<div align="center">
  <a href="./meta/aqua.png">
    <img src="./meta/aqua.png" alt="aqua theme" width="48%">
  </a>
  <a href="./meta/cream.png">
    <img src="./meta/cream.png" alt="cream theme" width="48%">
  </a>
  <a href="./meta/green.png">
    <img src="./meta/green.png" alt="green theme" width="48%">
  </a>
  <a href="./meta/red.png">
    <img src="./meta/red.png" alt="red theme" width="48%">
  </a>
  <a href="https://t.me/addtheme/vanilla_dark_aqua">
    <img src="https://img.shields.io/badge/install-aqua_theme-77BABC.svg" alt="install aqua theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_cream">
    <img src="https://img.shields.io/badge/install-cream_theme-B9B384.svg" alt="install cream theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_green">
    <img src="https://img.shields.io/badge/install-green_theme-63B97F.svg" alt="install green theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_red">
    <img src="https://img.shields.io/badge/install-red_theme-FF7B5D.svg" alt="install red theme">
  </a>
</div>

## Development

1. [Fork](https://github.com/VChet/telegram-vanilla-dark-desktop/fork) and download this repository
1. Install [Node.js](https://nodejs.org/)
1. Install dependencies `npm install`
1. Change colors in [one of the themes or add your own](/src/themes.ts)
1. Change or add theme constants in [mappings](/src/mappings.ts)
1. Generate theme with `npm run generate <theme-name>`
1. Check generated theme in Telegram.

   ```txt
   Settings > Chat Settings > Create new theme > IMPORT EXISTING THEME > <palette-file>
   ```

1. Commit and push your changes
1. Make a pull request
