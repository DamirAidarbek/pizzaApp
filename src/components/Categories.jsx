import { useSelector, useDispatch } from 'react-redux'

import { setActiveCategory } from '../redux/slices/filterSlice'

const Categories = () => {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    const activeCategory = useSelector(state => state.filter.activeCategory)

    const dispatch = useDispatch()

    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li
                        key={i}
                        onClick={() => dispatch(setActiveCategory(i))}
                        className={activeCategory === i ? 'active' : ''}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
