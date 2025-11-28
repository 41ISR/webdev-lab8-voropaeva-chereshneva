import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import { useItemStore } from "../store/useItemStore"
import { useUserStore } from "../store/useUserStore"

const ItemsList = ({myOwn = false}) => {
    const { items, getItems } = useItemStore()
    // const [timerId, setTimerId] = useState(undefined)
    const {session} = useUserStore()


    useEffect(() => {
        getItems()
        // setTimerId(setInterval(() => {
        //     getItems()
        // }, 5000))

        // return () => {clearInterval(timerId)}
    }, [])


    return (
        <div className="container">


            <div class="page-header">
                <h1>Все товары</h1>
            </div>

            <div class="stats">
                <div class="stat-item">
                    <span class="stat-value">15</span>
                    <span class="stat-label">Товаров</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">42</span>
                    <span class="stat-label">Ставок</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">12</span>
                    <span class="stat-label">Активных</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">25 000 ₽</span>
                    <span class="stat-label">Средняя цена</span>
                </div>
            </div>

            <div class="items-grid">
                {items && items.map((item, i) => (
                            <ItemCard key={i} {...item} />
                        ))}
            </div>
        </div>
    )
}

export default ItemsList