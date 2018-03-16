// set it so when start button it pressed , button disappears and html is overwritten to turn into the trivia quiz.
// use radio buttons so that they won't be able to select multiple answers
//have certain values set to false so that program tallies up the number of true for the correct answers subtract the true answers from 
//the total number of answers to get the number of missed answers
//i

beginButton.onclick= function(){
     document.getElementById("theBoi").innerHTML= 
    "<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-secondary active">
      <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option2" autocomplete="off"> Radio
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option3" autocomplete="off"> Radio
    </label>
    </div>" ;
    
    
    
    setTimeout()  {
       
    
}, 300); 


    }