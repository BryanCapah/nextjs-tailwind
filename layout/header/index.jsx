import { useSelector } from "react-redux"
import { selectIsExpanded } from "../../services/redux/reducers/template-reducers"

const Header = () => {
    const isExpanded = useSelector(selectIsExpanded)

    return (
        <div className={`px-3 flex items-center transition-all ease-in duration-300 h-20 bg-green-400 z-20 ${isExpanded ? 'md:ml-64' : 'md:ml-20'}`}>
            <span>Header</span>
        </div>
    )
}

export default Header