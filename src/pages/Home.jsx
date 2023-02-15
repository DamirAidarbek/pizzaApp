import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'
import Categories from '../components/Categories'

function Home() {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const activeCategory = useSelector(state => state.filter.activeCategory)
    const activeSort = useSelector(state => state.filter.activeSort)
    const sortOrder = useSelector(state => state.filter.sortOrder)

    useEffect(() => {
        const category = activeCategory > 0 ? `category=${activeCategory}` : ''
        const order = sortOrder === true ? 'order=asc' : 'order=desc'
        const sort = `sortBy=${activeSort.sortProperty}&${order} `

        setIsLoading(true)
        fetch(
            `https://63c69815dcdc478e15c4d195.mockapi.io/items?${category}&${sort}`
        )
            .then(res => res.json())
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
    }, [activeCategory, activeSort, sortOrder])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => (
                          <Skeleton key={index} />
                      ))
                    : pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    )
}

export default Home
