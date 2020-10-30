// Create a new list item when clicking on the "Post" button
function newElement() {
    // var li = document.createElement("li");
    // var inputValue = document.getElementById("myInputText").value;
    // var inputValue = document.getElementById("myInputDes").value;
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
    // if (inputValue=== '') {
    //     alert("You must write something!");
    // } else {
    //     document.getElementById("myUL").appendChild(li);
    // }
    // document.getElementById("myInput").value = "";

    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.appendChild(txt);
    // li.appendChild(span);

    var liv = document.createElement("li");
    var imageTag = document.createElement("img"); // create image
    var p = document.createElement("p");
    var v = document.createElement("br");
    var p2 = document.createElement("p");
    
    var title = document.getElementById('myInputText').value;
    var tiText = document.createTextNode(title);
    p.appendChild(tiText);
    liv.appendChild(p);
    liv.appendChild(v);

    var des = document.getElementById('myInputDes').value;
    var tides = document.createTextNode(des);
    p2.appendChild(tides);
    liv.appendChild(p2);

    // get the value from file input for the image
    var fileInputValue = document.getElementById('myInput').value;
    imageTag.src=fileInputValue;
    imageTag.id="picture";
    imageTag.width="200px";
    //imageTag.height="150px";
    var foo = document.getElementById("myUL");
    foo.appendChild(imageTag);
    
    
    
    
    
    //document.getElementById("myUL").appendChild(imageTag.setAttribute("src",pic));
    //document.body.appendChild(ImageToBeDisplay);
    //liv.appendChild(ImageToBeDisplay);
    //document.body.appendChild();

    
    //var tipic = document.createTextNode(pic);
    // p.appendChild(tipic);
    // liv.appendChild(p);
    //document.getElementById("myUL").appendChild(liv).appendChild(imageTag);
    document.getElementById("myUL").appendChild(liv);
    // var post = document.getElementById("myUL").appendChild(liv);
    // if (post === "") {
    //     alert("You must write something!");
    //     } else {
    //         document.getElementById("myUL").appendChild(liv);
    //     }
    //document.getElementById("myUL").appendChild(liv);



}
