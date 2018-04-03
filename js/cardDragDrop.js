$(function () {




        $("#column-to-do, #column-on-going, #column-finished").sortable({
            connectWith: ".cards-list",

            cancel: '.card-draft',
            item: '.card:not(.card-draft)',

            stop: function (event, ui) {
                console.log('card drop event');

                let draggedElement = ui.item;
                console.log(draggedElement);

                let cardId = draggedElement.data('card-id');
                let newColumn = ui.item.parents().first().attr('id');


                console.log(`A card id ${cardId} was dropped inside ${newColumn}`);

                Card.updateColumn(cardId, newColumn);

            }


        }).disableSelection();



});

