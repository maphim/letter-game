export default {
    add(game) {
        return {
            type: "matchs:add",
            game
        }
    },

    reset() {
        return {
            type: "matchs:reset"
        }
    }
}