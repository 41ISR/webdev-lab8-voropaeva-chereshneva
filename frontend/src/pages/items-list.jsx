import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import { useItemStore } from "../store/useItemStore"
import { useUserStore } from "../store/useUserStore"
import { api } from "../api/api"

const ItemsList = ({myOwn = false}) => {
    const { items, getItems } = useItemStore()
    // const [timerId, setTimerId] = useState(undefined)
    const {session} = useUserStore()
    const [stats, setStats] = useState()


    useEffect(() => {
        const getStats = async () => {
            const res = await api.getStats()
            setStats(res)
        }
        getItems()
        getStats()
    }, [])




    return (
        <div className="container">


            <div class="page-header">
                <h1>Все товары</h1>
            </div>
{stats && <div class="stats">
                <div class="stat-item">
                    <span class="stat-value">{stats.totalItems ? stats.totalItems: 0}</span>
                    <span class="stat-label">Товаров</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{stats.totalBids ? stats.totalBids: 0}</span>
                    <span class="stat-label">Ставок</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{stats.activeItems ? stats.activeItems: 0}</span>
                    <span class="stat-label">Активных</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{stats.averageItemPrice ? stats.averageItemPrice: 0} ₽</span>
                    <span class="stat-label">Средняя цена</span>
                </div>
            </div>}

            <div class="items-grid">
                {items && items.map((item, i) => (
                            <ItemCard key={i} {...item} />
                        ))}
            </div>
        </div>
    )
}

export default ItemsList