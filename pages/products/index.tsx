import React from 'react';
import '../../styles.scss'

interface Props {
  queryId: string
}

export default class extends React.Component<Props> {
  static async getInitialProps({ query }) {
    const queryId = query.id
    return {queryId}
  }

  render() {
    console.log('route', this.props.queryId);
    return (
      <div className="title">
        <p>Product is good</p>
        <p>product id: {this.props.queryId}</p>
      </div>
    );
  }
}