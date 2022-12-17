import './app-filter.scss';

const AppFilter = (props) => {
	const btnsData = [
		{ name: 'all', label: 'Все сотрудники', colored: false },
		{ name: 'like', label: 'На повышение в должности', colored: false },
		{ name: 'salaryMore', label: 'З/П больше 1000$', colored: false },
		{ name: 'incr', label: 'Получат премию', colored: true }
	];

	const buttons = btnsData.map(({ name, label, /*colored*/ }) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		// const color = colored ? { color: 'red' } : null;

		return (
			<button
				onClick={() => props.onChangeFilter(name)}
				className={`btn ${clazz}`}
				type="button"
				key={name}
				/*style={color}*/>
				{label}
			</button>
		);
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
};

export default AppFilter;