const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

const config = {
  title: "Selcukes",
  tagline: "One stop automation solution for Web, Desktop, Mobile and API",
  url: "https://selcukes.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "selcukes",
  projectName: "selcukes.github.io",
  stylesheets: [],
  trailingSlash: false,
  presets: [
    [
      "classic",
      ({
        docs: {
          editUrl: "https://github.com/selcukes/selcukes.github.io/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/selcukes/selcukes.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [],

  themeConfig:
    ({
      colorMode: {
        defaultMode: "dark",
      },
	   announcementBar: {
       id: 'star-the-repo',
       content:
         '⭐ Don\'t forget to Star the repo on 👉 <a target="_blank" rel="noopener noreferrer" href="https://github.com/selcukes/selcukes-java">GitHub</a> ⭐',
         backgroundColor: '#ffb600',
         textColor: '#000000',
         isCloseable: true,
      },
      navbar: {
        title: 'Selcukes',
        logo: {
          alt: 'Selcukes',
          src: 'img/logo.svg',
        },
        items: [
          { to: "/docs", label: "Docs", position: "left" },         
          { to: "/blog", label: "Blog", position: "right" },
       
		  {
            href: 'https://github.com/selcukes',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          }
        ],
      },
      algolia: {
        appId: "24JIZLY7SV",
        apiKey: "e50516a0453321f2fead770bbabe4f2e",
        indexName: "website",
        contextualSearch: false,
        searchPagePath: false,
      },
	 footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs',
              },
              {
                label: 'TechyWorks',
                to: 'https://techyworks.blogspot.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://in.linkedin.com/in/rameshbabuprudhvi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/amrameshbabu',
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
                href: 'https://github.com/selcukes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ramesh Babu Prudhvi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'json','yaml','bash', 'powershell'],
      },
    }),
};

module.exports = config;
