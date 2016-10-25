import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import ProjectListView from '../../components/ListView/ProjectListView';
import StagesView from '../../components/StagesView/StagesView';
import CreateProjectForm from '../../components/Forms/CreateProjectForm';
import labsApi from '../../data/index';
import selectors from '../../data/selectors';
import constants from '../../core/constants';
import c from '../common.css'

class TopologyPage extends React.Component {

  state = { 
    projects: [], 
    stages: [], 
    homeView: true, 
    createProjectView: false,
    createStageView: false,
    topologyName: '',
    topology: {},
    newProject: {},
    newStage: {}
  };

  componentDidMount() {
    document.title = constants.app_title;
  }

  componentWillMount() {
    this.getTopology();
  }

  getTopology(){
    let topologyApi = new labsApi.TopologyApi();
    topologyApi.topologiesIdGet(this.props.route.params.id, (error, topology, res) => {
      selectors.isBuildable([topology]);
      this.setState({topology: topology});
      this.setState({projects: topology.project_templates});
      this.setState({stages: topology.promotion_process});
      this.setState({topologyName: topology.name});
    });
  }

  handleCreateProject = (event) => {
    this.setState({homeView: false, createProjectView: true});
    event.preventDefault();
  };

  handleSubmitProject = (event) => {
    this.getTopology(); //refresh
    this.setState({homeView: true, createProjectView: false});
  };

  handleCancelProject = (event) => {
    event.preventDefault();
    this.setState({homeView: true, createProjectView: false});
  };

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav= { true }>
        {(() => {
          if(this.state.homeView){
            let content = [];
            //Home View Content
            content.push(
              <div className="page-header">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Back to Topologies</Link>
                  </li>
                  <li className="active"> <strong>Topology:</strong>
                    &nbsp; { this.state.topologyName }
                  </li>
                </ol>
              </div>);

            content.push(
              <h3> Build Stages
                <div className={c.float_right}>
                  <button type="submit" className="btn btn-danger" onClick={this.handleCreate} disabled={!this.state.projects.length}>Build</button>
                </div>
              </h3>
            );

            if(this.state.stages.length){
              content.push(<StagesView stages={ this.state.stages } />);
            } else if(!this.state.projects.length) {
              content.push(<h4>No topology to build.</h4>);
              content.push(<p>A topology can't be built into a stage until it contains at least one project. Create a project first.</p>)
            } else {
              content.push(<h4>Ready to build topology.</h4>);
              content.push(<p>Hit the build button when ready to build your application topology.</p>)
            }

            content.push(<hr/>);
            content.push(
              <h3> Projects
                <div className={c.float_right}>
                  <button type="submit" className="btn btn-primary" onClick={this.handleCreateProject}>Create</button>
                </div>
              </h3>);
            if(this.state.projects.length){
              content.push(<ProjectListView projects={ this.state.projects }/>);
            } else{
              content.push(<h4>No projects exist.</h4>);
              content.push(<p>Hit the create button to add projects to your application topology.</p>)
            }
            return content;
          } else if (this.state.createProjectView){
            //Create Project View Content
            return <CreateProjectForm handleSubmit={this.handleSubmitProject.bind(this)}
                                      handleCancel={this.handleCancelProject.bind(this)}
                                      topology={this.state.topology}
                                      value={this.state.newProject}/>;
          }
        })()}
      </Layout>
    );
  }
}

export default TopologyPage;
