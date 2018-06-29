import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import { Row, Col, Container } from "../Grid";
import "./Inventory.css"
import Table from "../Table";
import NavBtn from "../NavButton";
<<<<<<< HEAD
import { Link } from 'react-router-dom'


const Inventory = () => (
	<React.Fragment>
		<Nav/>
		<Container fluid>
				<Row>
					<Col size="md-12">
					<Row>
					<Col size="md-4">
						<NavBtn><Link to="/inventory/current">Current</Link></NavBtn>
						</Col>
						<Col size="md-4">
						<NavBtn><Link to="/inventory/history">History</Link></NavBtn>
						</Col>
						<Col size="md-4">
						<NavBtn><Link to="/inventory/receiving">Receiving</Link></NavBtn>
						</Col>
						</Row>
					</Col>
				</Row>
			<Table/>
		</Container>
			Inventory.current
	</React.Fragment>
);
=======
import { Link } from 'react-router-dom';

class Inventory extends Component {
	state ={
		materials: [],
		sku: "",
		name: "",
		quantity: "",
	};
	componentDidMount() {
		this.loadMaterials();
	};
	loadMaterials = () => {
		API.getMaterials()
		.then(res => 
		this.setState({materials: res.data, sku: "", name: "", quantity:""})
	).catch(err => this.loadMaterials());
	};


		
	render() {
		return (
			<React.Fragment>
			<Nav />
			<NavBtn><Link to="/inventory/current">Current</Link></NavBtn>
			<NavBtn><Link to="/inventory/history">History</Link></NavBtn>
			<NavBtn><Link to="/inventory/receiving">Receiving</Link></NavBtn>

					<div class="panel panel-default">
					<div class="panel heading">Current Inventory</div>
					<div class="panel-body">
						<table class="table table-hover" id='inventoryTable'>
							<thead>
								<tr>
									<th scope="col">SKU</th>
									<th scope="col">Name</th>
									<th scope="col">Quantity</th>

								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>
					</div>
				</div>
					</React.Fragment>
				);
			};
};

>>>>>>> master

export default Inventory;