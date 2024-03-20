import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'RVP',
      social: {
        github: 'https://github.com/rachmadvp/rachmadvp.dev',
      },
      sidebar: [
        {
          label: 'SDLC',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'What Is SDLC?', link: '/sdlc/' },
          ],
        },
        {
          label: 'Plan',
          autogenerate: { directory: 'plan' },
        },
        {
          label: 'Design',
          autogenerate: { directory: 'design' },
        },
        {
          label: 'Development',
          items: [
            { label: 'Getting Started', link: '/development/getting-started/' },
            {
              label: 'Guides',
              items: [
                {
                  label: 'Frontend',
                  items: [
                    {
                      label: 'HTML',
                      link: '/development/frontend/html/',
                    },
                    {
                      label: 'CSS',
                      link: '/development/frontend/css/',
                    },
                    {
                      label: 'JavaScript',
                      link: '/development/frontend/javascript/',
                    },
                    {
                      label: 'TypeScript',
                      link: '/development/frontend/typescript/',
                    },
                    {
                      label: 'Markdown',
                      link: '/development/frontend/markdown/',
                    },
                  ],
                },
                {
                  label: 'Backend',
                  link: '/development/backend/',
                },
                {
                  label: 'DevOps',
                  link: '/development/devops/',
                },
                {
                  label: 'Database',
                  link: '/development/database/',
                },
                {
                  label: 'Storage',
                  link: '/development/storage/',
                },
                {
                  label: 'VCS',
                  link: '/development/vcs/',
                },
                {
                  label: 'CI/CD',
                  link: '/development/ci-cd/',
                },
              ],
            },
            {
              label: 'Resources',
              items: [
                {
                  label: 'Twelve Factor App',
                  link: '/development/twelve-factor-app/',
                },
              ],
            },
          ],
        },
        {
          label: 'Integrations',
          autogenerate: { directory: 'integrations' },
        },
        {
          label: 'Testing',
          autogenerate: { directory: 'testing' },
        },
        {
          label: 'Deployment',
          autogenerate: { directory: 'deployment' },
        },
        {
          label: 'Maintenance',
          autogenerate: { directory: 'maintenance' },
        },
      ],
    }),
  ],
});
