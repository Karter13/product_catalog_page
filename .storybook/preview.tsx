import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    a11y: {
      test: 'todo'
    },
  },
};

export default preview;
