import './app-info.scss';

const AppInfo = ({ employees, employeesIncr, employeesLike, empSalaryMore }) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании SpaseX</h1>
			<h2>Общее число сотрудников: {employees}</h2>
			<h2>Премию получат: {employeesIncr}</h2>
			<h2>На повышение идут: {employeesLike}</h2>
			<h2>З/П больше 1000$: {empSalaryMore}</h2>
		</div>
	);
};

export default AppInfo;