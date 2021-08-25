import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('component', {
    description: 'Creates a React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{name}}/{{name}}.tsx',
        templateFile: './templates/component/component.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{name}}/{{name}}.styled.ts',
        templateFile: './templates/component/component.styled.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Creates a Gatsby Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
      },
      {
        type: 'confirm',
        name: 'withQuery',
        message: 'Include query?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/pages/{{name}}.tsx',
        templateFile: './templates/page/page.hbs',
      },
    ],
  });
};
