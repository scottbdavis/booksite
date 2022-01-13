function App() {
	const [data, setData] = React.useState(null);
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		let counter = 0;
		async function getData() {
			const response = await fetch("./books.json");
			const json = await response.json();
			setData(json);
			setLoaded(true);
		}
		getData();
		counter++;
		console.log(counter);
	}, []);
	console.log("loaded:", loaded, "data:", data);

	return (
		<>
			<div className="container" id="book_${counter}">
				<h1>React Components</h1>
				{loaded && data.books.map((book, i) => <Book data={book} key={i} />)}
			</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
