var isStatus = document.querySelector("h5")
var btn = document.querySelector("#add")

// var removeF=document.querySelector("#remove")

var check =0;


btn.addEventListener("click", function(){
    if(check==0){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    btn.innerHTML="Remove Friend"
    check=1;
    }
    else{
        isStatus.innerHTML="Not Friends"
        isStatus.style.color="#FF3D72"
        btn.innerHTML="Add Friend"

        check=0;
    }
})

// removeF.addEventListener("click", function(){
//     isStatus.innerHTML="Stranger"
//     isStatus.style.color="red"
// })
