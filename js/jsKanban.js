$(function () {




    /* ------------------------------------------------------------|
    | CREATING NEW CARD - FUNCTIONS
    *-------------------------------------------------------------*/


    function createCardDraft(targetWhere, cardTitle, cardPriority, cardContent) {

        targetWhere.append(`
              <div class="card card-draft">
                <div class="card-body">
                <h5 class="card-title">
                
                <input type="text" value="${cardTitle}" name="card-title" class="input-card" id="card-title">
</h5>
                <h6 class="card-subtitle mb-2 text-muted"> <input type="text" value="${cardPriority}" name="card-priority" class="input-card" id="card-priority"></h6>
                <p class="card-text">
                <input type="text" value="${cardContent}" name="card-content" class="input-card" id="card-content">
                </p>
                
                <a href="#" id="save-card">Save Card</a>
       
                </div>
                </div>
        `);



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




        // $(".card-definitive").draggable({
        //     handle: ".card-definitive"
        // });
        //
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



        createCardDraft($(this).prev().children().first(), cardTitle, cardPriority, cardContent);

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
