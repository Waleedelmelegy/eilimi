import React from 'react'

import Document, { Html, Main, NextScript, Head } from 'next/document'
import i18nextConfig from '../next-i18next.config'

class MyDocument extends Document {
  render () {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale

    return (
      <Html lang={currentLocale} dir={currentLocale === 'en' ? 'ltr' : 'rtl'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
