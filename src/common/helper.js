export default {

    /**
     * Làm đẹp định dạng thời gian
     * @param {Number} number 
     */
    formatTime(number) {
        let len = number.toString().length;
        if (len === 1)
            return `0${number}`;
        else
            return number;
    },

    /**
     * Đưa vào danh sách các thẻ, số lượt tháo. 
     * Tráo ngẫu nhiên danh sách các thẻ
     * @param {Array} cards 
     * @param {numShuffleber} numShuffleber
     */

    shuffle(cards, numShuffle) {
        let length = cards.length,
            i = 0;

        if (numShuffle > length) {
            numShuffle = length;
        }

        do {
            i++;
            let position = Math.floor(Math.random() * length);
            let randValue = cards[position];
            if (randValue) {
                cards.splice(position, 1);
                cards.unshift(randValue);
            }
        } while (i < numShuffle); return cards;
    },

    /**
     * Tính toán số thẻ, tạo giá trị thẻ
     * @param {Number} numCard Số thẻ / 1 row
     */
    renderCards(numCard) {
        let cardValues = [];

        // Step 1: Tinh toan so luong the, so luong cap the co gia tri giong nhau
        const numCardInGrid = Math.pow(numCard, 2);
        const numCoupleCard = numCardInGrid / 2;

        // Step 2: Tao ra gia tri the khong trung nhau
        do {

            let value = Math.random()
                .toString(36)
                .substr(3, 1);
            value = value.toUpperCase();

            if (!cardValues.includes(value)) {
                cardValues.push(value);
            }

        } while (cardValues.length < numCoupleCard);

        // Step 3: Trao gia tri the 
        cardValues = this.shuffle([...cardValues, ...cardValues], 10);

        // Step 3: Tao danh sach the: mac dinh hien thi va nam sap
        return cardValues.map((value, i) => ({
            id: i,
            value: value,
            isActive: false,
            isHidden: false
        }));
    }

}