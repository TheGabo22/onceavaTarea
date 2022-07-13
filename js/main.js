let styleSheet = document.querySelector("#styleSheet")
console.log(styleSheet.attributes[2].nodeValue);
console.log(styleSheet.href);

const oneCss = `css/estilos.css`
const retroCSS = `css/estilos-retro.css`
const futuroCss = `css/estilos-futuro.css`

const styleBtn = document.querySelector('#styleBtn')

styleBtn.addEventListener("click", () => {

    if(styleSheet.attributes[2].nodeValue === oneCss) {
        styleSheet.attributes[2].nodeValue = retroCSS
    } else if(styleSheet.attributes[2].nodeValue === retroCSS) {
            styleSheet.attributes[2].nodeValue = futuroCss;
        } else {
            styleSheet.attributes[2].nodeValue = oneCss;
        }
});



