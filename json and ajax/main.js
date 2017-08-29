var pageCounter = 1;
var displayContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        var ourRequest = new XMLHttpRequest();
            ourRequest.open("GET", "jsonPractice.json", true);
            ourRequest.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200)
                    var ourData = JSON.parse(ourRequest.responseText);
                    renderHTML(ourData);
            }
            ourRequest.send();
            pageCounter++;
            if(pageCounter>1){
                btn.classList.add('hide-me');
            }
    })
function renderHTML(data){
    var text = "";
    for(i=0; i<data.length; i++){
        text += '<br/><br/><b>Member\'s Name is:</b> <i>' + data[i].member + '<br/></i><b>Member ID is: </b><i> '
        + data[i].memberID + "</i><br/>"
        + "<b>Likes color: </b>";
           for(ii=0; ii<data[i].colors.likes.length; ii++){
             if(ii==0){
                  text +="<i>" + data[i].colors.likes[ii]+ "</i> " 
            }else{
                 text += "<i> and " + data[i].colors.likes[ii]+ "</i> "
                 }
            }
         text += "<br/><b>Dislikes color: </b>";
           for(ii=0; ii<data[i].colors.dislikes.length; ii++){
            if(ii==0){
                text += "<i>"+ data[i].colors.dislikes[ii] +"</i>";
            }else{
                text += "<i> and "+ data[i].colors.dislikes[ii] +"</i>";
            }
           } 
    }
    displayContainer.insertAdjacentHTML("beforeend", text);
}