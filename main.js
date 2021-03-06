document.getElementById("hidden").innerHTML = "Thankyou for your review";
function cpy() {
    var valid = 1;
    var fname = document.getElementById("first_name");
    var mname = document.getElementById("middle_name");
    var lname = document.getElementById("last_name");
    var option = document.getElementsByName("gender");
    var review = document.getElementById("sugession");
    // var required= document.getElementByIdClass("required");
    // Cannot getElementByClass is not a function

    if (fname.value == "") {
        document.getElementById("fnamev").innerHTML = "Fill the first name!";
        valid = 0;
    }
    if (lname.value == "") {
        document.getElementById("lnamev").innerHTML = "Fill the Last name!";
        valid = 0;
    }
    if (!(option[0].checked || option[1].checked || option[2].checked)) {
        document.getElementById("genderv").innerHTML = "Select Gender!";
        valid = 0;
    }
    if (review.value == "") {
        document.getElementById("suz").innerHTML = "Enter your review!";
        valid = 0;
    }

    if (valid == 1) {
        var title;
        if (option[0].checked) {
            title = "Master ";
        } else if (option[1].checked) {
            title = "Miss/Mrs. ";
        } else {
            title = "Mx. ";
        }
        var str = `<div>
                    <p>- ${title}${fname.value} ${mname.value} ${lname.value}</p>
                    <p>${review.value}</p>  
                   </div>`;
        console.log(str);
        var div = document.createElement("div");
        div.innerHTML = str;
        document.getElementById("hidden").appendChild(div);
    }
}
