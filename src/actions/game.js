import { levelGame } from '../common/entity';

export default {

    init(levelName) {
        let level = levelGame[levelName];
        return {
            type: "game:init",
            ...{
                time: Date.now(),
                ...level
            }
        }
    },

    reset() {
        return {
            type: "game:init",
            ...{
                level: null,
                duration: 0,
                numInRow: 0,
                status: 0
            }
        }
    },

    updateDuration(duration) {
        return {
            type: "game:update_duration",
            duration
        }
    },

    updateStatus(status) {
        return {
            type: "game:update_status",
            status
        }
    },

    addCardToTemp(card) {
        return {
            type: "game:add_card_to_temp",
            card
        }
    },

    resetTempCard(card = []) {
        return {
            type: "game:reset_card_in_temp",
            card
        }
    }
}