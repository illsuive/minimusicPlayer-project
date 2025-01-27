const arrSongs = [
    { id : 1 , Name : 'Finger' , src : "resource/zayn-song.mp3", type : "POP" , imgSrc : "resource/finger.png" , title : "zayn-malik-finger(Audio)" , Artist : "Zayn malik"} ,
    { id : 2 , Name : 'Anaconda' , src : "resource/niki-song.ogg" , type : "POP"  , imgSrc : "resource/anaconda-songs.jpg" , title : "niki-minaj-andaconda(Audio)", Artist : "Nicki Minaj"},
    { id : 3 , Name : 'Arms around you' , src : "resource/xxxtena-song.ogg" , type : "HIP-HOP"  , imgSrc : "resource/arms-around.png" , title : "xxxtentation-arms aro(Audio)", Artist : "xxxtentacion "},
    { id : 4 ,Name : 'Girls like you' , src : "resource/marron-song.ogg" , type : "HIP-HOP"  , imgSrc : "resource/girls-like.jpg", title : "marron-5-girls(Audio)" , Artist : "Maroon 5"},
    { id : 5 ,Name : 'Better now' , src : "resource/post-song.mp3" , type : "ROCK"  , imgSrc : "resource/betterNow-song.jpg" ,title : "post-malon-better(Audio)" , Artist : "post malon"},
    { id : 6 ,Name : 'NO brainer' , src : "resource/justin-song.mp3" , type : "ROCK"  , imgSrc : "resource/no-brainer.png" , title : "justin-khalid-noBrainer(Audio)" , Artist : "justin bieber"}  
]

const arrOption = ['All' , 'HIP-HOP' , 'ROCK' , 'POP']

 /*****************************************  switch mode ******************************************************/

    let nightMOde = document.getElementById("darkMode")
    nightMOde.addEventListener("click" , ()=>{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        nightMOde.innerText = "light Mode"
    })
    nightMOde.addEventListener("dblclick" , ()=>{
        document.body.style.backgroundColor = "white"
        nightMOde.innerText = "Dark Mode"
    })


 /*****************************************dropdown******************************************************/


    let dropID = document.getElementById('songs')
    arrOption.forEach((e)=>{
        let option = document.createElement('option')
        option.innerText = e
        dropID.append(option)  
    })


/**************************************songlist*********************************************************/

    const ulId = document.getElementById('myList')
    arrSongs.forEach((e) =>{
        const li = document.createElement('li')
         li.innerText = e.Name
         li.className = e.type
         li.id = e.id
         ulId.append(li)    
    })


/**************************************drop down funality*********************************************************/    
let selectAllhiphop = document.querySelectorAll(".HIP-HOP")
let selectAllpop = document.querySelectorAll(".POP")  
let selectAllrock = document.querySelectorAll(".ROCK")
dropID.addEventListener("change", () =>{
    if(dropID.value === "HIP-HOP"){

        selectAllpop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllpop.forEach((e) =>{
            e.style.display = "none"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "none"
        })
        
        
    }else if(dropID.value === "ROCK"){

        selectAllpop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "block"
        })
        
        selectAllpop.forEach((e) =>{
            e.style.display = "none"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "none"
        })
       
    }else if(dropID.value === "POP"){
        selectAllpop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "none"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "none"
        })
        
    }else{
        selectAllpop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllhiphop.forEach((e) =>{
            e.style.display = "block"
        })

        selectAllrock.forEach((e) =>{
            e.style.display = "block"
        })
        console.log("all");
    }
})


/*************************************filter part complete***************************/
  
/*******************************li funcality ************************/
    let songPart = document.getElementById("aritestSong")
    let artistName = document.getElementById("aritest")
    let titledata = document.getElementById("titleData")
    let changeImg = document.getElementById("musicImg")
    arrSongs.forEach((e) =>{
        let songData = document.getElementById(e.id)
         songData.addEventListener("click" , ()=>{ 
            arrSongs.forEach((e)=>{
                if(songData.innerText === e.Name){
                    changeImg.src = e.imgSrc  
                    titledata.innerText = e.title
                    artistName.innerText = e.Artist
                    songPart.src = e.src
                }
            }) 
         })
    })
    

        /*****************************************screen part done************************************** */


            function nextPlay(i){
            changeImg.src = arrSongs[i].imgSrc  
            titledata.innerText = arrSongs[i].title
            titledata.className = "add"
            artistName.innerText = arrSongs[i].Artist
            songPart.src = arrSongs[i].src 

        }

            /********************************************next and previous play********************************************************/

            let i = 0
            let nextSong = document.getElementById("nextButton")
            nextSong.addEventListener("click" , ()=>{   
                    i = i + 1
                    if((i > 0) && (i < arrSongs.length)){
                        nextPlay(i) 
                    }
            }) 
        
        /*************************************************************************************************************/

             let prevPlay = document.getElementById("prvButton")
            prevPlay.addEventListener("click" , ()=>{
                    i = i - 1
                    if((i < arrSongs.length) && (i > 0)){
                        nextPlay(i) 
                    }
                        
            })


     /********************************************next and previous play********************************************************/

/************************************************************************************************************/


            let ulofAllplaylist = document.getElementById("allplaylist")
            let playlistinp = document.getElementById("text")
            
            function createPlaylist(){
                let inpdata = document.getElementById("text").value
                if(inpdata.trim()){  
                    let liplaylist = document.createElement("li")
                    liplaylist.className = "playlist"
                    liplaylist.innerText = playlistinp.value 
                    ulofAllplaylist.append(liplaylist)   
                }
                  playlistinp.value = ""
            }
          
/************************************************************************************************************/

            let addsongli = document.getElementById("titleData")
            let allcurrentplay = document.getElementById("CurrentPlaylist")
            function addsong(){
                let liTwo = document.createElement("li")
                liTwo.className = "playlist"
                liTwo.innerText = addsongli.innerText
                allcurrentplay.append(liTwo)
            }
            
