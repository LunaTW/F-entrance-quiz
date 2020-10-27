import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  // eslint-disable-next-line react/sort-comp
  addStudent = (e) => {
    if (e.keyCode === 13) {
      this.addStudentFetch(e.target.value);
    }
  };

  addStudentFetch = (name) => {
    fetch('http://localhost:8080/students', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve();
        }
        return Promise.reject();
      })
      .then(() => this.fetchStudents());
  };

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents() {
    fetch('http://127.0.0.1:8080/students')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          students: data.students,
        });
        console.log(this.state.students);
      });
  }

  render() {
    return (
      <div className="studentList">
        <div>
          {this.state.students.map(({ id, name }) => (
            <span className="student-name" key={id}>
              {id + 1}.{name}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
