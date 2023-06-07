/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/employees.js":
/*!*****************************!*\
  !*** ./public/employees.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nclass EmployeeFilter extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the Employee Filter.\");\n  }\n}\nfunction EmployeeTable(props) {\n  const employeeRows = props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {\n    key: employee._id,\n    employee: employee,\n    deleteEmployee: props.deleteEmployee\n  }));\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Extension\"), /*#__PURE__*/React.createElement(\"th\", null, \"Email\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"), /*#__PURE__*/React.createElement(\"th\", null, \"Date Hired\"), /*#__PURE__*/React.createElement(\"th\", null, \"Currently Employed?\"), /*#__PURE__*/React.createElement(\"th\", null))), /*#__PURE__*/React.createElement(\"tbody\", null, employeeRows));\n}\nfunction EmployeeRow(props) {\n  function onDeleteClick() {\n    props.deleteEmployee(props.employee._id);\n  }\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, props.employee.name), /*#__PURE__*/React.createElement(\"td\", null, props.employee.extension), /*#__PURE__*/React.createElement(\"td\", null, props.employee.email), /*#__PURE__*/React.createElement(\"td\", null, props.employee.title), /*#__PURE__*/React.createElement(\"td\", null, props.employee.dateHired.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: onDeleteClick\n  }, \"DELETE\")));\n}\nclass EmployeeAdd extends React.Component {\n  constructor() {\n    super();\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n  handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.employeeAdd;\n    const employee = {\n      name: form.name.value,\n      extension: form.ext.value,\n      email: form.email.value,\n      title: form.title.value\n    };\n    this.props.createEmployee(employee);\n    form.name.value = '';\n    form.ext.value = '';\n    form.email.value = '';\n    form.title.value = '';\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(\"form\", {\n      name: \"employeeAdd\",\n      onSubmit: this.handleSubmit\n    }, \"Name: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"name\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Extension: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"ext\",\n      maxLength: 4\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Email: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"email\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Title: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"title\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"button\", null, \"Add\"));\n  }\n}\nclass EmployeeList extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      employees: []\n    };\n    this.createEmployee = this.createEmployee.bind(this);\n    this.deleteEmployee = this.deleteEmployee.bind(this);\n  }\n  componentDidMount() {\n    this.loadData();\n  }\n  loadData() {\n    fetch('/api/employees').then(response => response.json()).then(data => {\n      console.log('Total count of employees:', data.count);\n      data.employees.forEach(employee => {\n        employee.dateHired = new Date(employee.dateHired);\n      });\n      this.setState({\n        employees: data.employees\n      });\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n  createEmployee(employee) {\n    fetch('/api/employees', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(employee)\n    }).then(response => response.json()).then(newEmployee => {\n      newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);\n      const newEmployees = this.state.employees.concat(newEmployee.employee);\n      this.setState({\n        employees: newEmployees\n      });\n      console.log('Total count of employees', newEmployee.length);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n  deleteEmployee(id) {\n    fetch(`/api/employees/${id}`, {\n      method: 'DELETE'\n    }).then(response => {\n      if (!response.ok) {\n        console.log('Failed to delete employee.');\n      } else {\n        this.loadData();\n      }\n    });\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Employee Management Application\"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(EmployeeTable, {\n      employees: this.state.employees,\n      deleteEmployee: this.deleteEmployee\n    }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(EmployeeAdd, {\n      createEmployee: this.createEmployee\n    }));\n  }\n}\nReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));\n\n//# sourceURL=webpack://comp-693-m1-exercise/./public/employees.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/employees.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;