import React, { Component } from 'react';
import StudentList from '../Components/StudentList/StudentList';
import StudnetGroupRow from '../Components/StudentGroupRow/StudentGroupRow';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        ['trainee1'],
        ['trainee2'],
        ['trainee3'],
        ['trainee4'],
        ['trainee5'],
        ['trainee6'],
        ['trainee7'],
        ['trainee8'],
      ],
    };
  }

  render() {
    const { groups } = this.state;

    return (
      <div className="groups">
        <session className="groups-header">
          <h3 className="groups-header-title">分组列表</h3>
          <button type="button">分组成员</button>
        </session>
        <session>
          {groups.map((groupStudent, index) => (
            <StudnetGroupRow groupStudent={groupStudent} groupIndex={index} key={index} />
          ))}
        </session>
        <session>
          <h3>学员列表</h3>
          <StudentList />
        </session>
      </div>
    );
  }
}

export default GroupList;
