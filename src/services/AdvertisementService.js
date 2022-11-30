import storeAdvertisements from "../data/advertisements.json"

export function getAdvertisement(id) {
    return storeAdvertisements.find(advertisement => advertisement.id === id)
}

export function getAdvertisements() {
    return storeAdvertisements
}