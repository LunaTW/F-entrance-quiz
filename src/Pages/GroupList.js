import React, { Component } from 'react';
import StudentGroupRow from '../Components/StudentGroupRow/StudentGroupRow';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: ['Luna', 'someone'],
      groups: [
        ['student1'],
        ['student2'],
        ['student3'],
        ['student4'],
        ['student5'],
        ['student6'],
        ['student7'],
        ['student8'],
      ],
    };
  }

  render() {
    const { students, groups } = this.state;

    return (
      <div className="groups">
        <session className="groups-header">
          <h3 className="groups-header-title">分组列表</h3>
          <button type="button">分组成员</button>
        </session>
        <session>
          {groups.map((groupStudent, index) => (
            <StudentGroupRow groupStudent={groupStudent} groupIndex={index} key={index} />
          ))}
        </session>
        <session>
          <h3>学员列表</h3>
          {students.map((studentName, index) => (
            <div className="student-name" key={index}>
              {' '}
              {index + 1}.{studentName}{' '}
            </div>
          ))}
        </session>
      </div>
    );
  }
}

export default GroupList;
