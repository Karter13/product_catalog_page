import type { Preview } from '@storybook/nextjs-vite';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import "../app/globals.css";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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

    decorators: [
      (Story) => (
        <RouterContext.Provider
          value={{
        push: (url: string) => console.log('Mock push to', url),
        replace: () => {},
        refresh: () => {},
        prefetch: () => Promise.resolve(),
        back: () => {},
        forward: () => {},
        beforePopState: () => {},
        events: { on: () => {}, off: () => {}, emit: () => {} },
        pathname: '/',
        query: {},
        asPath: '/',
      }}
  >
  <Story />
  </RouterContext.Provider>
),
],

};

export default preview;
