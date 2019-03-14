import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log("ctx", ctx.query);

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {

    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
