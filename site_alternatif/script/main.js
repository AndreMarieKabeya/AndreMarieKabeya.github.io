//This function is called when any of the tab is clicke
//It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Code for the accordion found on w3schools
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);

  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";

  // obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, s1.value);

  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>

  for (i = 0; i < optionArray.length; i++) {

    var productName = optionArray[i];
    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName;
    s2.appendChild(checkbox);

    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement('label')
    label.htmlFor = productName;
    label.appendChild(document.createTextNode(productName));
    s2.appendChild(label);

    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement("br"));
  }
}

document.getElementById("defaultOpen").click();

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById('displayCart');
  c.innerHTML = "";

  // build list of selected item
  var para = document.createElement("P");
  para.innerHTML = "Vous avez choisi : ";
  para.appendChild(document.createElement("br"));
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      para.appendChild(document.createTextNode(ele[i].value));
      para.appendChild(document.createElement("br"));
      chosenProducts.push(ele[i].value);
    }
  }

  // add paragraph and total price
  c.appendChild(para);
  c.appendChild(document.createTextNode("Le prix total est " + getTotalPrice(chosenProducts) + " $"));

}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showAndHideForm(){
  var variable = document.getElementById('form');
    if (variable.style.display == 'none') {
        variable.style.display = 'block';
    } else {
        variable.style.display = 'none';
    }
}
