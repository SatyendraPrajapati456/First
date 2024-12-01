
function encryptFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const arrayBuffer = event.target.result;
        const encryptedBuffer = new Uint8Array(arrayBuffer).map(byte => byte ^ 0xAA); // Simple XOR encryption
        const blob = new Blob([encryptedBuffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadEncrypted');
        downloadLink.href = url;
        downloadLink.download = `encrypted_${file.name}`;
        downloadLink.classList.remove('hidden');
    };
    reader.readAsArrayBuffer(file);
}

function decryptFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const arrayBuffer = event.target.result;
        const decryptedBuffer = new Uint8Array(arrayBuffer).map(byte => byte ^ 0xAA); // Simple XOR decryption
        const blob = new Blob([decryptedBuffer], { type: file.type });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadDecrypted');
        downloadLink.href = url;
        downloadLink.download = `decrypted_${file.name}`;
        downloadLink.classList.remove('hidden');
    };
    reader.readAsArrayBuffer(file);
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
