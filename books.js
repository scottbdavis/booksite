function Book({ data }) {
	return (
		<div>
			<div id="book_link" className="card">
				<h5 className="card-header">{data.title}</h5>
				<div className="card-body">
					<h5>{data.subtitle}</h5>

					<table className="table">
						<tbody>
							<tr>
								<td className="text-success font-weight-bold">Title:</td>
								<td>{data.title}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Subtitle:</td>
								<td>{data.subtitle}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Author:</td>
								<td>{data.author}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Publisher:</td>
								<td>{data.publisher}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Description:</td>
								<td>{data.description}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div id="book2_link" className="card">
				<h5 className="card-header">{data.title}</h5>
				<div className="card-body">
					<h5>{data.subtitle}</h5>

					<table className="table">
						<tbody>
							<tr>
								<td className="text-success font-weight-bold">Title:</td>
								<td>{data.title}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Subtitle:</td>
								<td>{data.subtitle}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Author:</td>
								<td>{data.author}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Publisher:</td>
								<td>{data.publisher}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Description:</td>
								<td>{data.description}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div id="book3_link" className="card">
				<h5 className="card-header">{data.title}</h5>
				<div className="card-body">
					<h5>{data.subtitle}</h5>

					<table className="table">
						<tbody>
							<tr>
								<td className="text-success font-weight-bold">Title:</td>
								<td>{data.title}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Subtitle:</td>
								<td>{data.subtitle}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Author:</td>
								<td>{data.author}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Publisher:</td>
								<td>{data.publisher}</td>
							</tr>
							<tr>
								<td className="text-success font-weight-bold">Description:</td>
								<td>{data.description}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
