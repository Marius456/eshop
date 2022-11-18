import storeItems from "../data/items.json"
import categorizedItems from "../data/category_item.json"
import { getCategoryByName } from "./CategoryService"

export function getItem(id) {
    return storeItems.find(item => item.id === id)
}

export function getItems() {
    return storeItems
}

export function getItemsByCategory(categoryName) {
    const category = getCategoryByName(categoryName)
    const links = categorizedItems.filter(link => link.categoryId === category.id)
    return storeItems.filter(item => links.find(link => item.id === link.itemId))
}