export default {
  widgets: [
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
                  buildHookId: '5ecb4743f5ea88c1fad6111b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nburew5z',
                  apiId: '00aa21c5-7015-4f20-97ba-4497307f0fb9'
                },
                {
                  buildHookId: '5ecb4743c94566d0c85a1cfe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iyg1u2xm',
                  apiId: '3b0bf359-d2eb-474e-9172-513ad66c051e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tyler-walker-wiz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iyg1u2xm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
