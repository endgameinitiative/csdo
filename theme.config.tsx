import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>CSDO Endgame</span>,
  project: {
    link: 'https://github.com/endgameinitiative/csdo/',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/csdo/',
  footer: {
    text: 'CSDO Endgame',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CSDO Endgame'
    }
  }
}

export default config
