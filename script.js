// For About us Page Feedback form
function validateForm()
{
    var firstName = document.forms["messageForm"]["fname"].value;
    var lastName = document.forms["messageForm"]["lname"].value;
    var messageDetails = document.forms["messageForm"]["message"].value;

    //Alert(messageDetails);
    if (firstName == "" || lastName == "" || messageDetails == "")
    {
        alert("Empty fields are present! Please enter the values...");
    }

    else
    {
        alert("Thank you for your feedback!")
    }
}

// For Product Page
function addtocart(){
    alert("Added to cart successfully")
        }

function review_msg(){
    alert("Thank you for rating our watch.")
    }