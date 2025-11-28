import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"
import { useItemStore } from "../store/useItemStore"
import { useNavigate } from "react-router-dom"

const ItemCard = ({ status, title, description,price,bidCount,username,highestBid,imageUrl }) => {
    const { session } = useUserStore()
    const { getItems } = useItemStore()
    const {navigate} = useNavigate()

    
    // const handleDelete = async () => {
    //     await api.deleteMessage(id)
    //     await getMessages()
    // }

    // const handleReport = async () => {
    //     await api.reportMessage(id)
    //     await getMessages()
    // }

    // const handleLike = async () => {
    //     await api.likeMessage(id)
    //     await getMessages()
    // }

    // const isLiked = likedBy.some((likedUserId) => likedUserId === session?.user.id)
   
    
    // const isOwn = session?.user.id === userId 
    
    
    const handleDetails = () => {
        navigate(`/item-detail/:id`)
    
        // const {id} = useParams()
    }
    return (
        <div className="item-card" onClick={handleDetails}>
            <img src={imageUrl} class="item-image"/>
            <div class="item-content" >
            <span class="status-badge status-active">{status}</span>
                <h3 class="item-title">{title}</h3>
                <p class="item-description">{description}</p>
                <div class="item-footer">
                    <div>
                        <div class="item-price">{price}</div>
                        <div class="bid-info">
                            {highestBid}
                            <span class="bid-count">{bidCount}</span>
                        </div>
                    </div>
                    <div class="item-meta">
                        <span class="item-seller">Продавец: {username}</span>
                    </div>
                </div>
            </div>
            </div>
       
    )
}

export default ItemCard