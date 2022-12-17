// import './employees-add-form.css';
import './employees-add-form.scss'
import { Component } from 'react';

class EmployeesAddForm extends Component {
	state = {
		name: '',
		salary: ''
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSumbmitAdd = (e) => {
		e.preventDefault();

		this.props.onAddItem(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		});
	};

	static onLog = () => {
		console.log('string');
	};

	static logged = 'true';

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form" >
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSumbmitAdd}>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name='name'
						value={name}
						onChange={this.onValueChange} />
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name='salary'
						value={salary}
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div >
		);
	}
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged)

export default EmployeesAddForm;