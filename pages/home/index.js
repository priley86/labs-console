import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import TopologyListView from '../../components/ListView/TopologyListView';
import CreateTopologyView from '../../components/CommonViews/CreateTopologyView';
import history from '../../core/history';
import constants from '../../core/constants';
import labsApi from '../../data/index';
import selectors from '../../data/selectors';
import c from '../common.css'

class HomePage extends React.Component {

  state = { topologies: [], createTopologyView: false};

  componentDidMount() {
    document.title = constants.app_title;
  }

  componentWillMount() {
    this.getTopologies();
  }

  getTopologies(){
    //todo: show spinners here
    let topologyApi = new labsApi.TopologyApi();

    topologyApi.topologiesGet((error, topologies, res) => {
      selectors.isBuildable(topologies);
      this.setState({topologies: topologies});
    });
  }

  handleCreate = (event) => {
    event.preventDefault();
    this.setState({createTopologyView: true});
  };

  handleSubmit = (event) => {
    this.setState({createTopologyView: false});

    //refresh topology list
    this.getTopologies();
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({createTopologyView: false});
  };

  handleTopologyClick = (event, topologyId) => {
    event.preventDefault();
    history.push('/topology/' + topologyId);
  };

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav={ true }>
        {(() => {
          if(this.state.createTopologyView){
            return <CreateTopologyView handleSubmit={this.handleSubmit.bind(this)}
                                       handleCancel={this.handleCancel.bind(this)}
                                       value={{}}/>;
          } else {
            let content = [];
            content.push(<div className="page-header" key="-1">
                <h2> Application Topologies
                  <div className={c.float_right}>
                    <button type="submit" className="btn btn-primary"
                            onClick={this.handleCreate}>Create</button>
                  </div>
                </h2>
              </div>
            );

            if (this.state.topologies.length) {
              content.push(<TopologyListView topologies={ this.state.topologies }
                                             handleTopologyClick={this.handleTopologyClick.bind(this)}
                                             key="-2"/>);
            } else {
              content.push(<h4 key="-3">No topologies exist.</h4>);
              content.push(<p key="-4">Hit the create button to construct a new application topology.</p>);
            }
            return content;
          }
        })()}
      </Layout>
    );
  }
}

export default HomePage;
