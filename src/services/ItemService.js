import storeItems from "../data/items.json"

export function getItem(id){
    return storeItems.find(item => item.id === id)
}

export function getItems(){
    return storeItems
}
