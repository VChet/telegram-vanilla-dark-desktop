# Telegram Vanilla Dark Desktop

[![releases][releases-img]][releases-url]
[![build-status][build-img]][build-url]
![prs-welcome][prs-welcome-img]

## Preview

<div align="center">
  <a href="./meta/aqua.png">
    <img src="./meta/aqua.png" alt="aqua theme" width="48%">
  </a>
  <a href="./meta/cream.png">
    <img src="./meta/cream.png" alt="cream theme" width="48%">
  </a>
  <a href="./meta/mint.png">
    <img src="./meta/mint.png" alt="mint theme" width="48%">
  </a>
  <a href="./meta/rose.png">
    <img src="./meta/rose.png" alt="rose theme" width="48%">
  </a>
  <a href="https://t.me/addtheme/vanilla_dark_aqua">
    <img src="https://img.shields.io/badge/install-aqua_theme-77BABC?style=flat-square" alt="install aqua theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_cream">
    <img src="https://img.shields.io/badge/install-cream_theme-B9B384?style=flat-square" alt="install cream theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_mint">
    <img src="https://img.shields.io/badge/install-mint_theme-63B97F?style=flat-square" alt="install mint theme">
  </a>
  <a width="23%" href="https://t.me/addtheme/vanilla_dark_rose">
    <img src="https://img.shields.io/badge/install-rose_theme-FF7B5D?style=flat-square" alt="install rose theme">
  </a>
</div>

## Development

1. [Fork][fork-url] and download this repository
1. Install [Node.js](https://nodejs.org/)
1. Install [pnpm](https://pnpm.io/)
1. Install dependencies `pnpm install`
1. Change colors in [one of the themes or add your own](/src/themes.ts)
1. Change or add theme constants in [mappings](/src/mappings.ts)
1. Generate theme with `npm run generate <theme-name>`
1. Check generated theme in Telegram
`Settings > Chat Settings > Create new theme > IMPORT EXISTING THEME > <palette-file>`
1. Commit and push your changes
1. Make a pull request

<!-- Badges -->
[releases-url]: https://github.com/VChet/telegram-vanilla-dark-desktop/releases
[releases-img]: https://img.shields.io/github/tag/VChet/telegram-vanilla-dark-desktop?label=version&style=flat-square
[build-url]: https://github.com/VChet/telegram-vanilla-dark-desktop/actions/workflows/build.yaml
[build-img]: https://img.shields.io/github/actions/workflow/status/VChet/telegram-vanilla-dark-desktop/.github/workflows/build.yaml?style=flat-square
[prs-welcome-img]: https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square
<!-- Links -->
[fork-url]: https://github.com/VChet/telegram-vanilla-dark-desktop/fork
