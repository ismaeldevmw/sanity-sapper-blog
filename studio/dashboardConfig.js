export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fbf367c33d944d3a08b5475',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-xqf7xva1',
                  apiId: '6e06e9f0-b897-426b-9712-63084b446883'
                },
                {
                  buildHookId: '5fbf367cd86d67e89b860695',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pv214wc8',
                  apiId: '4fe34e98-5783-4529-9fd2-125f201cf193'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ismaeldevmw/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pv214wc8.netlify.app', category: 'apps'}
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
