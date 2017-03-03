var currentElement = null;

function validTextColor(stringToTest) {
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") {return false; }
  var image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") {   return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

$("#create").click(function (){
  var color = $("#colorText").val();
  if(!validTextColor(color)) {
    alert("Enter correct color!")
    return;
  } 
  var newElement = document.createElement("li");
  newElement.textContent = $("#text").val();
  $(newElement).css("color", color);
  $(newElement).css("list-style-type",($("#marker").val()));
  $(newElement).click(selectElement);
  $("#list").append(newElement);
 });  

function selectElement() {
  $(currentElement).removeClass('selected')
  $(this).addClass('selected')
  currentElement = this
}

$("#delete").click(function(){
  if(currentElement === null){
    alert("The element is not selected! Please, select element!");
  }
  $(currentElement).removeClass('selected');
  $(currentElement).remove();
  currentElement = null;
});

$("#change").click(function(){ 
 if(currentElement === null){    
  alert("The element is not selected! Please, select element!");
    return;
  }
 $(currentElement).text( $("#text").val())
  var color = $("#colorText").val()
  if(!validTextColor(color)) {
  alert("Enter correct color!")
  return;
  }
  $(currentElement).css("color", color);
  $(currentElement).removeClass('selected');
  $(currentElement).css("list-style-type",($("#marker").val()));
  currentElement = null;
})