import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'balloon-css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.css';

library.add(fas, fab);

type MyAppProps = { Component: any, pageProps: any }

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
