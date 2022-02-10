import { html } from 'lit';
import './components/shopping-list.js';

export const myTemplate = (initialData) => {
  return html`
    <html>
      <head>
        <title>Lit</title>
        <script type="importmap">
          {
            "imports": {
              "@lit/reactive-element": "/node_modules/@lit/reactive-element/reactive-element.js",
              "lit-html": "/node_modules/lit-html/lit-html.js",
              "lit-html/": "/node_modules/lit-html/",
              "lit-element/": "/node_modules/lit-element/",
              "lit": "/node_modules/lit/"
            }
          }
        </script>
      </head>
      <body>
        <h1>Shopping list</h1>

        <shopping-list
          items=${JSON.stringify(initialData.listItems)}
        ></shopping-list>

        <script type="module">
          import '/node_modules/lit/experimental-hydrate-support.js';

          import {
            hasNativeDeclarativeShadowRoots,
            hydrateShadowRoots,
          } from '/node_modules/@webcomponents/template-shadowroot/template-shadowroot.js';

          if (!hasNativeDeclarativeShadowRoots) {
            hydrateShadowRoots(document.body);
          }
          import('./components/shopping-list.js');
        </script>
      </body>
    </html>
  `;
};
