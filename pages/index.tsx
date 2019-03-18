import * as React from 'react';

interface Props {
    query: string
}

export default class extends React.Component<Props> {
    static async getInitialProps({ query }) {
        return { query };
    }

    render() {
        return (
            <div>
                Hello Next.js {this.props.query}
            </div>
        )
    }
}