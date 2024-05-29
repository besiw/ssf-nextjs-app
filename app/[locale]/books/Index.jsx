import React from 'react';
import Bottoncolum from '../books/widgets/Bottoncolum';
import Navcolum from '../books/widgets/Navcolum';
import Bookbody from '../books/widgets/Bookbody';
import SidebarBut from '../books/widgets/SidebarBut';
import Bookcontent from '../books/widgets/Bookcontent';
import Sidebar from '../books/widgets/Sidebar/Sidebar';

function Index() {
	return (
		<div className="flex">
			<Bottoncolum />
			<Navcolum />
			<div className="flex-1 h-screen max-h-screen ">
				<SidebarBut />
				{/* <Bookbody/> */}
				<Sidebar />
			</div>

			{/* <Bookcontent/> */}
		</div>
	);
}

export default Index;
