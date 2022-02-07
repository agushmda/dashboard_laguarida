import React from 'react';
import image from '../../assets/images/logo-footer-bco.png';
import {Link} from 'react-router-dom';

function Sidebar(){

	let style = {
		paddingTop: '25px'
	}

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style={style}>

			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={image} alt="La guarida" />
				</div>
			</a>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0" />

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - La Guarida</span>
                </Link>
			</li>

			
			{/* <hr className="sidebar-divider" />

			
			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
                </Link>
			</li>

			
			<li className="nav-item">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
                </Link>
			</li>

			
			<li className="nav-item">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
                </Link>
			</li>

			
			<hr className="sidebar-divider d-none d-md-block" />
		*/}
		</ul> 

		{/*<!-- End of Sidebar -->*/}
        </React.Fragment>
    )
}
export default Sidebar;