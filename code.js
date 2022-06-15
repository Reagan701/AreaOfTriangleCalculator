let base = document.getElementById("Base");
let height = document.getElementById("Height");
let result = document.getElementById("Result");
let button = document.getElementById("Submit");

button.addEventListener('click', () =>{
    result.innerHTML = ` 0.5 * ${base.value} * ${height.value} = ${ 0.5 *base.value * height.value}`
});
