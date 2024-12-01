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
    const decryptedContent = atob(fileContent);        //64 bit encryption based on base64 
    const blob = new Blob([decryptedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'decrypted.txt';
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download Decrypted File';
}
