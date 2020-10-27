import React, { Component } from 'react';

class GroupList extends Component {
  render() {
    return (
      <div className="groups">
        <session className="groups-header">To do: 这里是分组的头（分组+button）</session>
        <session>To do：这里拥有一些分组信息（六个组）</session>
        <session>To do：这里是学员信息汇总</session>
      </div>
    );
  }
}

export default GroupList;
