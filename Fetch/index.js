// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data and display it
async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch data
fetchData();
