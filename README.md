### Testing Vue3 and Ionic 5+ SSR (very crude)

Run the server:
`webpack --config webpack.config.js && node dist/index.js`

Compile the client:
`webpack --config webpack.client.config.js`

The current state is that it works fine if you render on server and hydrate on client just the Vue app and hydrate Ionic components after client mount (hydration).

It would be preferable to render the Vue app and the Ionic components on the server, but that's not quite possible due to the fact that there's no shadow DOM on the server, thus all Ionic components end up as DOM nodes.

Another issue is that some Ionic components such as ion-header generate DOM nodes based on attributes instead of using the shadow DOM, this throws Vue hydration off as the DOM tree becomes out of sync, thus Ionic hydration has to be done after the client app was mounted (hydrated).
