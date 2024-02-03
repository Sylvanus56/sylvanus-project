function validateForm() {
    var fname = document.forms["admissionForm"]["fname"].value;
    var lname = document.forms["admissionForm"]["lname"].value;
    var dob = document.forms["admissionForm"]["dob"].value;
    var grade = document.forms["admissionForm"]["grade"].value;
    var email = document.forms["admissionForm"]["email"].value;
    var phone = document.forms["admissionForm"]["phone"].value;
  
    if (fname == "") {
      alert("Please enter your first name");
      return false;
    }
    if (lname == "") {
      alert("Please enter your last name");
      return false;
    }
    if (dob == "") {
      alert("Please enter your date of birth");
      return false;
    }
    if (grade == "") {
      alert("Please select your grade");
      return false;
    }
    if (email == "") {
      alert("Please enter your email address");
      return false;
    }
    if (phone == "") {
      alert("Please enter your phone number");
      return false;
    }
  }
  