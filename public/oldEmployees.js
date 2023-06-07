class EmployeeFilter extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for the Employee Filter.");
  }
}
function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => React.createElement(EmployeeRow, {
    key: employee.id,
    employee: employee
  }));
  return React.createElement("table", {
    className: "bordered-table"
  }, 
  React.createElement("thead", null, 
    React.createElement("tr", null, 
      React.createElement("th", null, "ID"),
      React.createElement("th", null, "Name"),
      React.createElement("th", null, "Extension"),
      React.createElement("th", null, "Email"),
      React.createElement("th", null, "Title"),
      React.createElement("th", null, "Date Hired"),
      React.createElement("th", null, "Currently Employed?"))),
      React.createElement("tbody", null, employeeRows));
}
function EmployeeRow(props) {
  const employee = props.employee;
  return  React.createElement("tr", null, 
          React.createElement("td", null, employee.id),
          React.createElement("td", null, employee.name),
          React.createElement("td", null, employee.ext),
          React.createElement("td", null, employee.email),
          React.createElement("td", null, employee.title),
          React.createElement("td", null, employee.dateHired.toDateString()),
          React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'));
}
class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeAdd;
    const employee = {
      name: form.name.value,
      ext: form.ext.value,
      email: form.email.value,
      title: form.title.value,
      dateHired: new Date(),
      isEmployed: true
    };
    this.props.createEmployee(employee);
    form.name.value = '';
    form.ext.value = '';
    form.email.value = '';
    form.title.value = '';
  }
  render() {
    return React.createElement("form", {
      name: "employeeAdd",
      onSubmit: this.handleSubmit
    }, "Name: ", React.createElement("input", {
      type: "text",
      name: "name"
    }), React.createElement("br", null), "Extension: ", React.createElement("input", {
      type: "text",
      name: "ext"
    }), React.createElement("br", null), "Email: ", React.createElement("input", {
      type: "text",
      name: "email"
    }), React.createElement("br", null), "Title: ", React.createElement("input", {
      type: "text",
      name: "title"
    }), React.createElement("br", null), React.createElement("button", null, "Add"));
  }
}
class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    this.createEmployee = this.createEmployee.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(() => {
      this.setState({
        employees: initialEmployees
      });
    }, 500);
  }
  createEmployee(employee) {
    employee.id = this.state.employees.length + 1;
    const newEmployeeList = this.state.employees.slice();
    newEmployeeList.push(employee);
    this.setState({
      employees: newEmployeeList
    });
  }
  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Employee Management Application"), React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, {
      createEmployee: this.createEmployee
    }));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));