import storeCategories from "../data/categories.json"

export function getCategoryByName(categoryName) {
    return storeCategories.find(item => item.name === categoryName)
}

export function getCategories() {
    return storeCategories
}
