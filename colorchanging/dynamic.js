const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);//we are multiplying with these no. i.e 167.. because we wnat hexa number in the from of color
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor =  randomCode;
   document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode)//copy to clipboard directly
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//initial call
getColor();