// // script.js
// document.getElementById('photo').addEventListener('change', function(event) {
//     const photo = event.target.files[0];
//     const preview = document.getElementById('photo-preview');

//     if (photo) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             preview.src = e.target.result;
//             preview.style.display = 'block';
//         };
//         reader.readAsDataURL(photo);
//     } else {
//         preview.src = '';
//         preview.style.display = 'none';
//     }
// });

// document.getElementById('personal-info-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting normally

//     const photo = document.getElementById('photo').files[0];
//     const firstName = document.getElementById('first-name').value;
//     const middleName = document.getElementById('middle-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const dob = document.getElementById('dob').value;

//     // Validate required fields
//     if (!photo || !firstName || !lastName || !dob) {
//         alert('Please fill out all required fields.');
//         return;
//     }

//     // Display form data in an alert
//     alert(`Photo: ${photo.name}\nFirst Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\nDate of Birth: ${dob}`);

//     // You can also process the form data here (e.g., send it to a server)
// });



// script.js

// Function to display the image from local storage
// import swal from 'sweetalert';

function displayStoredImage() {
    const storedImage = localStorage.getItem('photo-preview');
    if (storedImage) {
        const preview = document.getElementById('photo-preview');
        preview.src = storedImage;
        preview.style.display = 'block';
    }
}

// Event listener for file input change
document.getElementById('photo').addEventListener('change', function(event) {
    const photo = event.target.files[0];
    const preview = document.getElementById('photo-preview');

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            localStorage.setItem('photo-preview', e.target.result); // Store image data in local storage
        };
        reader.readAsDataURL(photo);
    } else {
        preview.src = '';
        preview.style.display = 'none';
        localStorage.removeItem('photo-preview'); // Remove image data from local storage
    }
});

// Display stored image on page load
displayStoredImage();

// Event listener for form submission
document.getElementById('personal-info-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const photo = document.getElementById('photo').files[0];
    const firstName = document.getElementById('first-name').value;
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const select_role = document.getElementById('select-role').value;
    const user_name = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;
  

    // Validate required fields
    if (!photo || !firstName || !lastName || !dob || !select_role || !user_name || !password) {
        // alert('Please fill out all required fields.');
        swal({
            title: "Error!",
            text: "Please fill up all field",
            icon: "warning",
          });
        return;
    }
    // if(password !== confirmpassword){
    //     alert('password not march')
    //     return;
    // }

    // Display form data in an alert
    // alert(`Photo: ${photo.name}\nFirst Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nPassword: ${password}`);

    // You can also process the form data here (e.g., send it to a server)
});