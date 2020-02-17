export default {
    addList(cards) {
        return {
            type: "card:init",
            cards
        }
    },

    resetList(cards = []) {
        return {
            type: "card:init",
            cards
        }
    },

    add(card) {
        return {
            type: "card:add",
            card
        }
    },

    hide(id, isHidden) {
        return {
            type: "card:hidden",
            id,
            isHidden
        }
    },

    active(id, isActive) {
        return {
            type: "card:active",
            id,
            isActive
        }
    }
}