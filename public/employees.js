// let ryan = 'Ryan King'
// let sally = 'Sally Smith'
// let john = 'John Doe'
// let amol = 'Amol Shookup'
// let robin = 'Robin Banks'
// let justin = 'Justin Tyme'
// let chris = 'Chris Columbus'
// let amanda = 'Amanda Bynes'

// const element = (

//         <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
//             <li>{ryan}</li>
//             <li>{sally}</li>
//             <li>{john}</li>
//             <li>{amol}</li>
//             <li>{robin}</li>
//             <li>{justin}</li>
//             <li>{chris}</li>
//             <li>{amanda}</li>
//         </ul>

//     )

// ReactDOM.render(element, document.getElementById('content'))

// // Sample function component
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// ReactDOM.render(<Welcome name = 'Ryan King' />, document.getElementById('content'))

// Sample class component

const initialEmployees = [{
    id: 1,
    name: 'Ryan King',
    ext: '1124',
    email: 'ryan13king@gmail.com',
    title: 'Escrow Officer',
    dateHired: new Date('2018-08-15'),
    isEmployed: true
  }, {
    id: 2,
    name: 'Sally',
    ext: '1125',
    email: 'sally@gmail.com',
    title: 'Director of Sales',
    dateHired: new Date('2015-01-03'),
    isEmployed: true
  }];
  
  // const sampleEmployee = {
  //     name: 'Holly Unlikely',
  //     ext: 1126,
  //     email: 'holly@vectacorp.com',
  //     title: 'Director of Marketing',
  //     dateHired: new Date('2019-03-04'),
  //     isEmployed: true,
  // }
  // class BorderWrap extends React.Component {
  //     render() {
  //         const borderStyle = {border: "3px solid silver",
  //         padding: 6}
  //         return(
  //             <div style={borderStyle}>
  //                 {this.props.children}
  //             </div>
  //         )
  
  //     }
  // }
  
  class EmployeeFilter extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the Employee Filter.");
    }
  }
  function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      key: employee.id,
      employee: employee
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date Hired"), /*#__PURE__*/React.createElement("th", null, "Currently Employed?"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
  }
  function EmployeeRow(props) {
    const employee = props.employee;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.id), /*#__PURE__*/React.createElement("td", null, employee.name), /*#__PURE__*/React.createElement("td", null, employee.ext), /*#__PURE__*/React.createElement("td", null, employee.email), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'));
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
      return /*#__PURE__*/React.createElement("form", {
        name: "employeeAdd",
        onSubmit: this.handleSubmit
      }, "Name: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name"
      }), /*#__PURE__*/React.createElement("br", null), "Extension: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "ext"
      }), /*#__PURE__*/React.createElement("br", null), "Email: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "email"
      }), /*#__PURE__*/React.createElement("br", null), "Title: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add"));
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
        employees: this.state.employees
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, {
        createEmployee: this.createEmployee
      }));
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));