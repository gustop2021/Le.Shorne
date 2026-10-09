function mostrarcerebro()
{document.getElementById ('cerebro').style.display = 'flex';

}
function escondercerebro() 
{document.getElementById ('cerebro').style.display = 'none';

}
function clicarcerebro()
{document.getElementById ('container-artista').style.display = 'none';
document.getElementById ('container-bio').style.display = 'flex'; 
} 

function mostrarolho()
{document.getElementById ('olho').style.display = 'flex'; 
}
function esconderolho() 
{document.getElementById ('olho').style.display = 'none'; 
}
function clicarolho() 
 {document.getElementById ('container-artista').style.display = 'none';
document.getElementById ('container-bio').style.display = 'flex'; 
} 

function clicarmao() 
{document.getElementById ('container-artista').style.display = 'none';
document.getElementById ('container-galeria').style.display = 'flex'; 
document.getElementById ('miniGaleria1').style.display = 'flex';
event.preventDefault(); 
} 
function clicargaleria1() 
{
    document.getElementById('miniGaleria1').style.display = 'none';
    document.getElementById('entradaGaleria1').style.display = 'flex';
    imageMapResize();
}

function clicarInicio()
{
    document.getElementById('container-artista').style.display = 'flex';
    document.getElementById('container-galeria').style.display = 'none'; 
    document.body.style.backgroundImage = "url(assets/imagens/gife fundo.gif)";
    document.getElementById('entradaGaleria1').style.display = 'none';
    document.getElementById('container-bio').style.display = 'none'; 
}

function mostrarsetafrente()
{document.getElementById ('setareto').style.display = 'flex'; 
}

function escondersetafrente() 
{document.getElementById ('setareto').style.display = 'none'; 
}