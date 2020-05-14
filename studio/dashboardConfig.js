export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd6b53aa0e31c55a57b00a',
                  title: 'Sanity Studio',
                  name: 'Seenk-landing-test-studio',
                  apiId: '82a019ef-00e5-42c8-b537-84ac97159f45'
                },
                {
                  buildHookId: '5ebd6b53aa0e31c0c057b17a',
                  title: 'Landing pages Website',
                  name: 'Seenk-landing-test',
                  apiId: '0e861042-ec68-4aa7-89f5-7cb3b85aa982'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akim-seenk/Seenk-landing-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Seenk-landing-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
