import { useSelector, useDispatch } from 'react-redux'
import { expandSideBar, selectIsExpanded } from '../../services/redux/reducers/template-reducers/index'
const Content = ({ children }) => {
    const isExpanded = useSelector(selectIsExpanded)
    const dispatch = useDispatch()
    return (
        <div id='side-bar' className={`z-10 flex items-center text-center transition-all ease-in duration-300 bg-gray-100 fixed h-full w-full overflow-scroll ${isExpanded ? 'md:ml-64' : 'md:ml-20'}`}>
            <div className='w-full h-full relative items-center flex'>
                {children}
            </div>
        </div >
    )
}

export default Content