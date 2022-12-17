import './employees-list-item.scss';

const EmployeesListItem = (props) => {
	const { name, salary, increase, like, onDelete, onToggleProp, onChangeSalary } = props;

	let classList = "list-group-item d-flex justify-content-between";

	if (increase) {
		classList += ' increase';
	}

	if (like) {
		classList += ' like';
	}

	return (
		<li className={classList}>
			<button onClick={onToggleProp}
				className="list-group-item-like"
				data-toggle='like'>{name}</button>
			<input type="text"
				className="list-group-item-input"
				defaultValue={salary + '$'}
				onChange={onChangeSalary} />
			<div className="d-flex justify-content-center align-items-center">
				<button type="button"
					className="btn-cookie btn-sm list-group-item-btns"
					onClick={onToggleProp}
					data-toggle='increase'>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm list-group-item-btns"
					onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li >
	);
};

export default EmployeesListItem;