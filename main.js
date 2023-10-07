function startClassification( ){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tNwM4qCR6/model.json'.modelReady)
    
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }
    
    function gotResults(error,results ){
        if (error){
            console.error(error);
        }else{
            console.log(results);
            rojo=Math.floor(Math.random()*255)+1;
            verde=Math.floor(Math.random()*255)+1;
            azul=Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").innerHTML="escucho:"+results[0].label;
            document.getElementById("result_confidence").innerHTML="precision:"+(results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color="rgb("+rojo+","+verde+","+azul+")";
            img1=document.getElementById("imagen1");
            img2=document.getElementById("imagen2");
            img3=document.getElementById("imagen3");
            img4=document.getElementById("imagen4");
    
    
    
            if (results[0].label=="aplauso"){
            img1.src='naruto.gif';   
            img2.src='kakashi.png';
            img3.src='sakura.jpeg';
            img4.src='sasuke.jpeg';
            }else if(results[0].label=="golpear la mesa"){
                img1.src='naruto.png';
                img2.src='kakashi.gif';
                img3.src='sakura.jpeg';
            img4.src='sasuke.jpeg';
            }else if(results[0].label=="silvido"){
                img1.src='naruto.png';
                img2.src='kakashi.png';
                img3.src='sakura.gif';
            img4.src='sasuke.jpeg';
            }else if(results[0].label=="tocar la puerta"){
                img1.src='naruto.png';
                img2.src='kakashi.png';
                img3.src='sakura.jpeg';
            img4.src='sasuke.gif';
            }
            
        }
    }
    