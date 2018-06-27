import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

const Jobs = () => (
	<React.Fragment>
		<Nav/>
		<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
		<NavBtn><Link to="/jobs/create">History</Link></NavBtn>
			Jobs
	</React.Fragment>
);

export default Jobs;