//choice(items): returns a randomly selected item from array of items
function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];

}
//remove(items, item): removes the first matching item from items, 
//if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
    const index = items.indexOf(item)
    let found = undefined
    if (index !== -1)
        found = items.splice(index, 1)
    return found
}

export { choice, remove }