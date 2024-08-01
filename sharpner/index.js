document.getElementById('post-blog').addEventListener('click', () => {
    const imageUrl = document.getElementById('image-url').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (imageUrl && title && description) {
        const blogContainer = document.createElement('div');
        blogContainer.className = 'blog-post';
        blogContainer.innerHTML = `
            <img src="${imageUrl}" alt="Blog Image">
            <h2>${title}</h2>
            <p>${description}</p>
            <button class="edit-btn">Edit Blog</button>
            <button class="delete-btn">Delete Blog</button>
        `;

         blogContainer.querySelector('.edit-btn').addEventListener('click', () => {
            document.getElementById('image-url').value = imageUrl;
            document.getElementById('title').value = title;
            document.getElementById('description').value = description;
            blogContainer.remove();
            updateTotalBlogs();
        });

         blogContainer.querySelector('.delete-btn').addEventListener('click', () => {
            blogContainer.remove();
            updateTotalBlogs();
        });

        document.getElementById('blogs-container').appendChild(blogContainer);
        updateTotalBlogs();

         document.getElementById('image-url').value = '';
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill out all fields');
    }
});

const updateTotalBlogs = () => {
    document.getElementById('total-blogs').innerText = document.getElementById('blogs-container').children.length;
};
