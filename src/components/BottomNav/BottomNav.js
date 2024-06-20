import { AppsOutlined, FileCopyOutlined, FindReplace, PersonOutline } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

import '../../styles/BottomNav.css'

const BottomNav = props => {
    

    const {pathname} = useLocation()

    return (
        <div className='bottom-nav'>
            <NavLink to={'/'} exact className="bn-tab" activeClassName="linkActive" >
                <AppsOutlined className="bottomNavIcon"/>
                <span className="bottomTabText">
                    Home
                </span>
            </NavLink>

            <NavLink to={'/test'} exact className="bn-tab" isActive={()=>['/testSteps', '/test'].includes(pathname)}  activeClassName="linkActive">
                <FindReplace className="bottomNavIcon"/>
                <span className="bottomTabText">
                   Test 
                </span>
            </NavLink>

            <NavLink to={'/reports'} className="bn-tab" activeClassName="linkActive">
                <FileCopyOutlined className="bottomNavIcon"/>
                <span className="bottomTabText">
                  Report  
                </span>
            </NavLink>

            <NavLink to={'/profile'} className="bn-tab" activeClassName="linkActive">
                <PersonOutline className="bottomNavIcon"/>
                <span className="bottomTabText">
                   Profile 
                </span>
            </NavLink>
        </div>
    )
}

export default BottomNav