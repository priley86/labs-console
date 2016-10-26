import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './style.css';

class TableSelectionView extends React.Component {
  
  handleSort = (event, col) => {
    //should we load datatables and do sorting/filtering/paging, or just pre-sort using js?
  };

  handleRowClick = (event, item) => {
    this.props.handleRowClick(event, item);
  };

  selections(){
    return this.state.users;
  }

  handleChange = (e, i, prop) => {
    this.state.users[i][prop] = e.target.value;
  };

  handleCheckChanged = (e, i, prop) => {
    let user = Object.assign({},this.state.users[i]);
    user.promotion = !user.promotion;
    this.state.users[i] = user;
    this.setState({users: this.state.users});
  };

  componentWillMount(){
    let data = Object.assign([], this.props.data);
    data.forEach(function(d){
      d.promotion = d.promotion || false;
    });
    this.setState({users: data});
  }

  render() {
    if(this.props.data.length && this.props.columns.length) {
      return (
        <div className="table-responsive">
          <table className={cx(s.table_view_bg, 'table table-striped table-bordered table-hover')}>
            <thead>
            <tr>
              {this.props.columns.map((column,i) =>
                <th key={i} onClick={(e) => this.handleSort(e, column)}>{ column.displayName }</th>
              )}
            </tr>
            </thead>
            <tbody>
            {this.state.users.map((item,i) =>
              <tr key={i}>
                {this.props.columns.map((col,j) => {
                  if(col.field === 'role'){
                    return <td key={j}>
                      <select value={item.role} className="selectpicker form-control"
                              onChange={(e) => { this.handleChange(e,i,'role')}}>
                        <option></option>
                        <option>Admin</option>
                        <option>User</option>
                        <option>Viewer</option>
                      </select>
                    </td>
                  } else if (col.field === 'promotion'){
                    return <td key={j}>
                      <input type="checkbox"
                             checked={item.promotion}
                             onChange={(e) => { this.handleCheckChanged(e,i,'promotion')}}/>
                    </td>
                  } else {
                    return <td key={j} onClick={(e) => this.handleRowClick(e, item)} >{item[col.field]}</td>
                  }
                })}
              </tr>
            )}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      //Todo: show loading
      return (
        <div></div>
      );
    }
  }
}

export default TableSelectionView;