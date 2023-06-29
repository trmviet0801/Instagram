import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const Root = () => {
    return (<>
        <SideBar />
        <Outlet />
    </>);
}

export default Root;