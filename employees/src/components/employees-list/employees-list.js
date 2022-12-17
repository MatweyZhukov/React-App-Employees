import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)} />
		);
	}
	)

	if (data.length < 1) {
		return (
			<div className='app-empty-list'>
				<h1 className='app-text-empty'>Oops, it looks like your list is empty!</h1>
			</div>
		);
	}

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export default EmployeesList;