// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spore Docs',
  projectName: 'spore-docs',
  organizationName: 'nervosnetwork',

  baseUrl: '/',
  favicon: 'img/logo.svg',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
        title: 'SPORE PROTOCOL',
        logo: {
          src: 'img/logo.svg',
          alt: 'SPORE PROTOCOL',
        },
        items: [],
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
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
