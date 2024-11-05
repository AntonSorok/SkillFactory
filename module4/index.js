let changeBackground = () =>  {
let color = document.body.style.backgroundColor
if (color === "palegreen") {
    color = 'coral'
} else { 
    color ='palegreen'
}
document.body.style.backgroundColor = color
} 