var pageCounter = 1;

var animalContainer = document.getElementById('animal-info');

var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
    	
    	var ourRequest = new XMLHttpRequest();
    	
    	    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json', true);
    	    //ourRequest.onload = function(){
    	    
    	    ourRequest.onreadystatechange=function(){
    	    if(this.readyState == 4 && this.status ==200){
    	    var ourData = JSON.parse(ourRequest.responseText);
    	    
    	    renderHTML(ourData);
    	    }
    	}
    	ourRequest.send();
    	pageCounter++;
    	if(pageCounter > 3){
    		btn.classList.add('hide-me');
    	}
    });
function renderHTML(data){
	text = " ";
	for(i=0; i<data.length; i++){
		text += '<p>'+data[i].name + ' is a '+ data[i].species + ' and like to eat'

		for(ii=0; ii<data[i].foods.likes.length; ii++){
			if(ii==0){
				text += data[i].foods.likes[ii];
			}else{
				text += ' and ' + data[i].foods.likes[ii];
			}
		}
		text += ' and dislikes to eat '
		for(ii=0; ii<data[i].foods.dislikes.length; ii++){
			if(ii==0){
				text += data[i].foods.dislikes[ii];
			}else{
				text += ' and ' + data[i].foods.dislikes[ii];
			}
		}
		text += '. </p>';
	}
animalContainer.insertAdjacentHTML('beforeend', text);
}
// classlist.add('');
// insertAdjacentHTML('beforeend', text);
// addEventListener
// onreadystatechange
