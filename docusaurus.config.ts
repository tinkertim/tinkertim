import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ASD, ADHD & Brain Trauma Coaching',
  tagline: 'I help Autistic adults better enjoy jobs, recover from trauma and advocate for their needs.',
  favicon: 'img/favicon.ico',
  url: 'https://tinkertim.github.io/',
  baseUrl: '/tinkertim/',
  trailingSlash: true,
  organizationName: 'tinkertim', 
  projectName: 'tinkertim',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Autism-Affirming Coaching By Tim Post',
      logo: {
        alt: 'Autism Pride Infinity Logo',
        src: 'img/logo-infinity.png',
      },
      items: [
        {to: '/services', label: 'Coaching Services', position: 'right'},
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/about', label: 'Tim\'s Bio', position: 'right'},
        {to: '/book', label: 'Upcoming Book', position: 'right'},
        {to: '/outreach', label: 'Outreach', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
