$(function () {




    /* ------------------------------------------------------------|
    | CREATING NEW CARD - FUNCTIONS
    *-------------------------------------------------------------*/


    function createCardDraft(targetWhere) {

        targetWhere.append(`
              <div class="card card-draft">
                <div class="card-body">
                <h5 class="card-title">
                
                <input type="text" value="" name="card-title" class="input-card" id="card-title" placeholder="Set Card Title">
</h5>
                <h6 class="card-subtitle mb-2 text-muted"> <input type="text" value="" name="card-priority" class="input-card" id="card-priority" placeholder="Priority"></h6>
                <p class="card-text">
                <input type="text" value="" name="card-content" class="input-card" id="card-content" placeholder="Content">
                </p>
                
                <a href="#" id="save-card">Save Card</a>
       
                </div>
                </div>
        `);

        $("input[name='card-title']").focus();





    }


    function createCardDefinitive(targetWhere, newCard) {

        console.log('creating definitive card...');

        let cardTitle = newCard.title;
        let cardPriority = newCard.priority;
        let cardContent = newCard.content;

        targetWhere.append(`
              <div class="card card-definitive" data-card-id="${newCard.id}">
                <div class="card-body">
                <h5 class="card-title">${cardTitle}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${cardPriority}</h6>
                <p class="card-text">
              ${cardContent}
                </p>
                       
                </div>
                </div>
        `);





    }

    /* ------------------------------------------------------------|
    | CREATE A NEW CARD - EVENTS
    *-------------------------------------------------------------*/


    //Saving a New card

    $('.create-card').on('click', function () {

        //Default values
        let cardTitle = "New card title";
        let cardPriority = "New card priority";
        let cardContent = "New card content";


        /* VISUAL DATA REPRESENTATION (DRAFT) =========================================== */



        createCardDraft($(this).prev().children().first());

        //avoid multistacking event binding
        $("#save-card").unbind('click');

        $('#save-card').on('click', function () {

            console.log('saving card...');

            //get card input values
            let cardTitle = $("input[name='card-title']").val();
            let cardPriority = $("input[name='card-priority']").val();
            let cardContent = $("input[name='card-content']").val();
            let cardColumn = $(this).parent().parent().parent().attr('id');



            //create data representation
            let newCard = new Card(cardTitle, cardPriority, cardContent, cardColumn);

            console.log(Card.getCards());

            //create definitive card
            console.log($(this).parent().parent().parent());

            createCardDefinitive($(this).parent().parent().parent(),newCard);


            //delete card draft (only for visual representation)
            $(this).parent().parent().remove();






        });


    });


});
