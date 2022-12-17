import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';
import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Akvarium', salary: 1500, increase: false, id: 1, like: false },
				{ name: 'Ivan Zabyvenko', salary: 650, increase: false, id: 2, like: false },
				{ name: 'Denis Dunduk', salary: 100, increase: false, id: 3, like: false },
			],
			term: '',
			filter: ''
		}
		this.setID = 4;
	}

	AddItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.setID++
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem],
				{ name, salary } = newItem;

			if (name !== '' &&
				salary !== '' &&
				name.length >= 3) {

				document.querySelectorAll('.new-post-label').forEach(item => {
					item.style.cssText = `
					border: none; 
					background-color: white;
					transition: 0.3s all;
					-webkit-transition: 0.3s all;
				`;
				});
				return {
					data: newArr
				}
			} else {
				document.querySelectorAll('.new-post-label').forEach(item => {
					item.style.cssText = `
					border: 2px solid red; 
					background-color: rgb(255, 143, 143);
					transition: 0.3s all;
					-webkit-transition: 0.3s all;
				`;
				});
			};
		});
	};

	deleteItem = id => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id === id);

			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			// const newArr = [...before, ...after];
			return {
				data: data.filter(item => item.id !== id)
			}
		});
	};

	onToggleProp = (id, prop) => {
		// this.setState(({ data }) => {
		// 	const index = data.findIndex(elem => elem.id === id);

		// 	const old = data[index];
		// 	const newItem = { ...old, increase: !old.increase };
		// 	const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

		// 	return {
		// 		data: newArray
		// 	}
		// });

		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			})
		}));
	};

	searchEmployees = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'like':
				return items.filter(item => item.like === true);
			case 'salaryMore':
				return items.filter(item => item.salary > 1000);
			case 'incr':
				return items.filter(item => item.increase === true);
			default:
				return items;
		}
	};

	onChangeFilter = (filter) => {
		this.setState({ filter });
	};

	onChangeSalary = (id, salary) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {

					if (salary.length === 0) {
						return { ...item, salary: 0 }
					}

					return salary.includes('$') ?
						{ ...item, salary: salary.replace('$', '') } :
						{ ...item, salary: salary };
				}

				return item;
			})
		}));
	};

	render() {
		const employees = this.state.data.length,
			{ data, term, filter } = this.state,
			employeesIncr = this.state.data.filter(item => item.increase === true).length,
			employeesLike = this.state.data.filter(item => item.like === true).length,
			empSalaryMore = this.state.data.filter(item => item.salary > 1000).length,
			visibleData = this.filterPost(this.searchEmployees(data, term), filter);

		return (
			<div className="app" >
				<AppInfo employees={employees}
					employeesIncr={employeesIncr}
					employeesLike={employeesLike}
					empSalaryMore={empSalaryMore} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter}
						onChangeFilter={this.onChangeFilter} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary} />
				<EmployeesAddForm
					onAddItem={this.AddItem} />
			</div>
		);
	}
}

export default App;