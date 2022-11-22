import storeOrders from "../data/orders.json"
import orderItems from "../data/order_item.json"
import storeItems from "../data/items.json"

export function getOrderItems(orderId) {
    const links = orderItems.filter(link => link.orderId === orderId)
    return storeItems.filter(item => links.find(link => item.id === link.itemId))
}

export function getOrdersByUser(userId) {
    return storeOrders.filter(order => order.userId === userId)
}