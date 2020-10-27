import React, { Component } from 'react';

class StudentGroupRow extends Component {
  render() {
    const { groupStudent, groupIndex } = this.props;
    return (
      <div className="student-group-row">
        <div className="group-name"> {groupIndex + 1}组</div>
        <div className="student-names">
          {groupStudent.map((studentName, index) => (
            <div className="student-name" key={index}>
              {index + 1}.{studentName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentGroupRow;
