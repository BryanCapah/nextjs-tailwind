import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux'
import { expandSideBar, selectIsExpanded } from '../../services/redux/reducers/template-reducers';

const SideBar = () => {
    const isExpanded = useSelector(selectIsExpanded)
    const dispatch = useDispatch()
    return (
        <div id='side-bar' className={` z-50 transition-all ease-in duration-300 overflow-hidden bg-white fixed h-full w-full  ${isExpanded ? 'md:w-64' : 'md:w-20'}`} >
            <div className='flex justify-between h-20 items-center p-5 bg-blue-500 w-full'>
                <span className='text-white font-extrabold cursor-pointer' onClick={() => dispatch(expandSideBar())}>Logo</span>
            </div>

            <div className='transition-all duration-300 ease-in w-full bg-blue-500 h-full flex py-5 flex-col'>
                <NavItem name='Dashboard' path='/dashboard' icon='ri-inbox-archive-line' />
                <NavItem name='Login' path='/login' icon='ri-login-circle-line' />
                <NavItem name='Shop' path='/shop' icon='ri-inbox-archive-line' />
                <NavItem name='Stock Take' path='/stock-take' icon='ri-archive-drawer-fill' />
                <NavItem name='StockTransfer' path='/stock-transfer' icon='ri-file-transfer-line' />
            </div>
        </div >
    )
}

export default SideBar
const NavItem = ({ name, path, icon }) => {
    const isExpanded = useSelector(selectIsExpanded)
    const route = useRouter()
    return (
        <div className='flex w-full items-center transition-all duration-300 ease-in text-white hover:text-blue-500 bg-blue-500 hover:bg-white p-5 pb-5 px-7 cursor-pointer' onClick={_ => route.push(path)}>
            <i className={`${icon} ri-lg mr-3`} />
            <span className={`animate-fade whitespace-nowrap ${isExpanded ? '' : 'hidden'}`}>{name}</span>
        </div>
    )
}
