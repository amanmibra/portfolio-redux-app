export function getProjects() {
  return [
      {
      link : 'https://www.npmjs.com/package/@heroku-cli/plugin-addons-admin',
      title : 'Heroku CLI Plugin - addons-admin',
      classname : 'addons_admin',
      description : {
          time: 'May 2018 - August 2018',
          stack : 'Typescript, oclif',
          text : 'Addons-admin is a Heroku CLI plugin to help Heroku add-on providers integrate their services with Heroku. This tool replaces Heroku\'s legacy tool known as kensa, and it integrates its same features and more for hundreds of Heroku add-on developers.'
        }
    },
    {
      link: 'https://github.com/amanmibra/kville-scheduler',
      title: 'Krzyzewskiville Scheduler',
      classname: 'kville',
      description: {
        time: 'Feburary 2018 - Ongoing',
        stack: 'React, Rails, Docker, Webpack, Postgres, Semantic-UI',
        text: 'Scheduler for Duke students that tent out for Duke vs. UNC basketball games.'
      }
    },
  ]
}
