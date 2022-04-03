$('document').ready(function() {
    console.log('app started');
    
    $('.card').mouseenter(function(e) {
        let selectCard = e.target;
        let nextCard = e.target.nextElementSibling;
        // console.log(otherCard);
        $(selectCard).addClass('animation-select-card')
        $(nextCard).addClass('animation-other-card');
    })
    $('.card').mouseleave(function(e) {
        let selectCard = e.target;
        let nextCard = e.target.nextElementSibling;
        // console.log(otherCard);
        $(selectCard).removeClass('animation-select-card')
        $(nextCard).removeClass('animation-other-card');
        
    })

    let imgobj=[
        {
            src:"img/user-1.jpg",
            alt:"user-1-img",
            id:'1'
        },
        {
            src:"img/user-2.jpg",
            alt:"user-2-img",
            id:'2'
        },
        {
            src:"img/user-3.jpg",
            alt:"user-3-img",
            id:'3'
        },
        {
            src:"img/user-4.jpg",
            alt:"user-4-img",
            id:'4'
        },
        {
            src:"img/user-5.jpg",
            alt:"user-5-img",
            id:'5'
        },
        {
            src:"img/user-6.jpg",
            alt:"user-6-img",
            id:'6'
        },
        {
            src:"img/user-7.jpg",
            alt:"user-7-img",
            id:'7'
        },
        {
            src:"img/user-8.jpg",
            alt:"user-8-img",
            id:'8'
        },
        {
            src:"img/user-9.jpg",
            alt:"user-9-img",
            id:'9'
        },
        {
            src:"img/user-10.jpg",
            alt:"user-10-img",
            id:'10'
        },


]
    const userDataUrl = 'https://jsonplaceholder.typicode.com/users';

    $('.card').click(function(e) {
        let selectedCard = e.target.id;
         console.log(selectedCard);
        $("html").animate({ scrollTop: 0 }, 1500);
        $('.main-container').addClass('show-details');
        $('.cont-container').addClass('show-details');
        $.get(userDataUrl, function(data) {
            console.log(data)
            if (data.status == 404) alert('error');
            if (data.length===0) {
                alert('empty api')
            }
           data.map((user)=>{
               let id=user.id;
               if (selectedCard===id.toString()) {
                   imgobj.map((img)=>{
                       if (selectedCard===img.id) {
                        $('.user-img').attr({
                            'src': img.src,
                              'alt': img.alt
                        })   
                       }
                   })
                    $('.username').text(user.username);
                    $('.name').text(user.name);
                    $('.email').text(user.email);
                    $('.phone').text(user.phone);
                    $('.web').text(user.website);
                    $('.city').text(user.address.city);
               }
           })

        });


    })

});