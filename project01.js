let fileContent = null;

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        fileContent = e.target.result;
    };
    reader.readAsText(file);
});

function encryptFile() {
    if (!fileContent) {
        alert('Please select a file first.');
        return;
    }
    const encryptedContent = btoa(fileContent);
    const blob = new Blob([encryptedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'encrypted.txt';
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download Encrypted File';
}

function decryptFile() {
    if (!fileContent) {
        alert('Please select a file first.');
        return;
    }
    const decryptedContent = atob(fileContent);
    const blob = new Blob([decryptedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'decrypted.txt';
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download Decrypted File';
}
        // function uploadFile(fileName, content) {
        //     const formData = new FormData();
        //     formData.append('fileName', fileName);
        //     formData.append('content', content);

        //     fetch('/upload', {
        //         method: 'POST',
        //         body: formData
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         alert('File uploaded successfully');
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        // }

        // function downloadFile(fileName, content) {
        //     const blob = new Blob([content], { type: 'text/plain' });
        //     const url = URL.createObjectURL(blob);
        //     const a = document.createElement('a');
        //     a.href = url;
        //     a.download = fileName;
        //     document.body.appendChild(a);
        //     a.click();
        //     document.body.removeChild(a);
        // }
