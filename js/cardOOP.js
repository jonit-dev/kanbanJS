/* ------------------------------------------------------------|
  | CARDS  DATA STRUCTURE
  *-------------------------------------------------------------*/

let cards = [
    // {id: 0, title: '', priority: '', content: ''}
];


class Card {
    constructor(title, priority, content, column) {
        this.title = title;
        this.priority = priority;
        this.content = content;
        this.id = cards.length;
        this.column = column;

        //add card to data structure
        cards.push(
            {id: this.id, title: this.title, priority: this.priority, content: this.content, column: this.column}
        );

    }

    static updateColumn(id, newColumn) {

        cards.map((card) => {

            if(card.id === id) {

                card.column = newColumn;

            }
        });

        console.log('Cards list updated...');
        console.log(cards);



    }






   static getCards() {
        return cards;
    }

}