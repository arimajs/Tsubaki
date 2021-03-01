module.exports = {
  title: 'Arima Documentation',
  tagline: 'Documentation for Arima: the Discord Music Quiz Bot',
  url: 'https://tsubaki.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arimajs',
  projectName: 'Tsubaki',
  themeConfig: {
    navbar: {
      title: 'Arima',
      logo: {
        alt: 'Arima Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/start',
          activeBasePath: 'guide',
          label: 'Guide',
          position: 'right',
        },
        {
          to: 'docs/changelog',
          label: 'Changelog',
          position: 'right',
        },
        {
          to: 'docs/inspiration',
          label: 'Inspiration',
          position: 'right',
        },
        {
          href:
            'https://discord.com/api/oauth2/authorize?client_id=809547125397782528&permissions=3492928&scope=bot',
          label: 'Invite',
          position: 'right',
        },
        {
          href: 'https://discord.gg/qMsVeFpxWX',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://github.com/arimajs/Arima',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Arima Invite',
              href:
                'https://discord.com/api/oauth2/authorize?client_id=809547125397782528&permissions=3492928&scope=bot',
            },
            {
              label: 'Discord Support',
              href: 'https://discord.gg/qMsVeFpxWX',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Patreon',
              to: 'https://patreon.com/ArimaBot',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arimajs',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/arimajs/Tsubaki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
