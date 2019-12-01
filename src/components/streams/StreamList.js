import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }
    render () {
        return <div>StreamsList</div>
    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams)}
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);