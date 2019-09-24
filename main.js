//http://www.omdbapi.com/?s=pirates&apikey=461b1f6a
let button = document.getElementById('buttonOne')
button.addEventListener('click', function(event){
    event.preventDefault()
    let inputfield=document.getElementById('inputOne')
    let input= inputfield.value
    console.log("click")

fetch(`http://www.omdbapi.com/?s=${input}&apikey=461b1f6a`)
        .then(res => {
            return res.json()
            
        })
        
        .then(res=>{
            //console.log(res)
        for (let i=0; i< res.Search.length; i++){
            let div=document.createElement('div')
            document.body.appendChild(div)
            div.innerText=res.Search[i].Title

            let divTwo=document.createElement('div')
            document.body.appendChild(divTwo)
            divTwo.innerText=res.Search[i].Year

            let divThree=document.createElement('div')
            document.body.appendChild(divThree)
            divThree.innerText=res.Search[i].Type

            


        }
    })

        // .catch((err) => {
        //     console.log('Error: '+ err);
        // })

})