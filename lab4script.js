
document.getElementById('alertForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      alert(`Hi ${name}!`);
    }
  });

  let isBlue = true;
  document.getElementById('colorBtn').addEventListener('click', function() {
    if (isBlue) {
      document.body.style.backgroundColor = '#FF0000'; 
    } else {
      document.body.style.backgroundColor = '#90caf9';
    }
    isBlue = !isBlue;
  });
  
  document.getElementById('textForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
      alert('Text contains special characters!');
    } else {
      alert('Text is valid!');
    }
  });
  
  document.getElementById('addTextBtn').addEventListener('click', function() {
    const heading = document.getElementById('main-heading');
    if (!heading.textContent.includes('Add Text')) {
      heading.textContent += ' Add Text';
    }
  });
  