
        let actionType = '';
        function handleFile(action) {
            actionType = action;
            document.getElementById('fileInput').click();
        }

        function processFile(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const fileContent = e.target.result;
                    if (actionType === 'encrypt') {
                        // Encrypt the file content
                        const encryptedContent = btoa(fileContent); // Simple base64 encoding for demonstration
                        uploadFile(file.name, encryptedContent);
                    } else if (actionType === 'decrypt') {
                        // Decrypt the file content
                        const decryptedContent = atob(fileContent); // Simple base64 decoding for demonstration
                        downloadFile(file.name, decryptedContent);
                    }
                };
                reader.readAsText(file);
            }
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