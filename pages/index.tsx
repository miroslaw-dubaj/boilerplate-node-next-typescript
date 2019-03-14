import React from 'react';
import Link from 'next/link';
import '../styles.scss'

interface Props {
  err: string
}

export default class extends React.Component<Props> {
  static async getInitialProps({ query }) {
    const queryErr = query.err
    return { queryErr };
  }


  render() {
    return (
      <div className="title">
        Hello Next.js
        <p>
          Go to
          <Link href="/products">
            <a>Pages </a>
          </Link>
        </p>
        {this.props.err ? this.props.err : null}
        <p>
          Go to
          <Link href="/p/10">
            <a>Some product</a>
          </Link>
        </p>
      </div>
    );
  }
}