// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/prismThemes/dark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spore Docs',
  projectName: 'spore-docs',
  organizationName: 'nervosnetwork',

  baseUrl: '/',
  favicon: 'img/favicon.svg',
  url: 'https://docs.spore.pro',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl({versionDocsDirPath, docPath}) {
            return `https://github.com/sporeprotocol/spore-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-MHR5JHHT',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          src: 'img/title-light.svg',
          srcDark: 'img/title-dark.svg',
          alt: 'SPORE PROTOCOL',
        },
        items: [
          {
            type: 'search',
            position: 'right',
            className: 'navbar-search-button',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Spore SDK',
                href: 'https://github.com/sporeprotocol/spore-sdk',
              },
              {
                label: 'Spore Contracts',
                href: 'https://github.com/sporeprotocol/spore-contract',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/9eufnpZZ8P',
              },
              {
                label: 'Email',
                href: 'mailto:contact@spore.pro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sporeprotocol/spore-docs',
              },
              {
                label: 'Nervos',
                href: 'https://www.nervos.org',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} spore.pro`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "OMU3UFN93M",
        apiKey: "722d27b25476a3bce143c17903284c15",
        indexName: "spore",
      },
    }),

};

module.exports = config;
