export default {
    setBestTime(level, time) {
        return {
            type: "point:set_best_time",
            level,
            time
        }
    },

    increaseWin() {
        return {
            type: "point:increase_win"
        }
    },

    increaseLoss() {
        return {
            type: "point:increase_loss"
        }
    }
}