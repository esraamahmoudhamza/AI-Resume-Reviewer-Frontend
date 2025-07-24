const fileInput = document.getElementById('fileInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.querySelector('.progress-container');
const fileNameDisplay = document.getElementById('fileNameDisplay');

fileInput.addEventListener('change', function () {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Selected File: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = '';
  }
});

analyzeBtn.addEventListener('click', function () {
  if (fileInput.files.length > 0) {
    progressContainer.style.display = 'block';
    let progress = 0;
    const fakeUpload = setInterval(() => {
      progress += 10;
      progressBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(fakeUpload);
        setTimeout(() => {
          window.location.href = 'analyze.html';
        }, 500);
      }
    }, 100);
  } else {
    alert('Please upload a CV file first.');
  }
});
