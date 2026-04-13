if (localStorage.getItem('font')==null){

    localStorage.setItem('font','3')
}
function checkforfont(){

    if (localStorage.getItem('font')==1){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='space mono'
        });



    }else if(localStorage.getItem('font')==2){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='parkinsans'
        });

    }
    else if(localStorage.getItem('font')==4){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='lobster'
        });

    }
    else if(localStorage.getItem('font')==5){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='roboto mono'
        });

    }
    else{
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='jetbrains mono'
        });

    }
}
checkforfont()
function createRoom(){
    localStorage.setItem('roomid',crypto.randomUUID())
    swal('Enter your name:', {
        content: 'input',
        button: 'Lets Go',
    })
        .then((value) => {

            if (!value || value.trim() === '') return;
            localStorage.setItem('roomidname',value)
            document.querySelector('a').click()




            }

        )
}
function joinRoom(){
    swal('Enter Room ID:', {
        content: 'input',
        button: 'Next',
    })
        .then((value) => {
            if (!value || value.trim() === '') return;
            localStorage.setItem('roomid',value)
            swal('Enter your name:', {
                content: 'input',
                button: 'Lets Go',
            })
                .then((value) => {

                        if (!value || value.trim() === ''){
                            return
                        }
                        localStorage.setItem('roomidname',value)
                        document.querySelector('a').click()




                    }

                )



            }



        )

}
