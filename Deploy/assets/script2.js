document.addEventListener('DOMContentLoaded', function() {
    const likeBtn1 = document.getElementById('likeBtn1');
    const heartIcon1 = document.getElementById('heartIcon1');
    const likeCount1 = document.getElementById('likeCount1');
    let liked1 = false;
    let likes1 = 0;

    likeBtn1.addEventListener('click', function() {
        liked1 = !liked1;
        if (liked1) {
            likes1++;
            likeBtn1.classList.add('liked');
        } else {
            likes1--;
            likeBtn1.classList.remove('liked');
        }
        likeCount1.textContent = likes1;
    });

    const viewCommentsBtn1 = document.getElementById('viewCommentsBtn1');
    const commentsSection1 = document.getElementById('commentsSection1');

    viewCommentsBtn1.addEventListener('click', function() {
        if (commentsSection1.style.display === 'none' || commentsSection1.style.display === '') {
            commentsSection1.style.display = 'block';
            viewCommentsBtn1.textContent = 'Hide Comments';
        } else {
            commentsSection1.style.display = 'none';
            viewCommentsBtn1.textContent = 'View Comments';
        }
    });

    const likeBtn2 = document.getElementById('likeBtn2');
    const heartIcon2 = document.getElementById('heartIcon2');
    const likeCount2 = document.getElementById('likeCount2');
    let liked2 = false;
    let likes2 = 0;

    likeBtn2.addEventListener('click', function() {
        liked2 = !liked2;
        if (liked2) {
            likes2++;
            likeBtn2.classList.add('liked');
        } else {
            likes2--;
            likeBtn2.classList.remove('liked');
        }
        likeCount2.textContent = likes2;
    });

    const viewCommentsBtn2 = document.getElementById('viewCommentsBtn2');
    const commentsSection2 = document.getElementById('commentsSection2');

    viewCommentsBtn2.addEventListener('click', function() {
        if (commentsSection2.style.display === 'none' || commentsSection2.style.display === '') {
            commentsSection2.style.display = 'block';
            viewCommentsBtn2.textContent = 'Hide Comments';
        } else {
            commentsSection2.style.display = 'none';
            viewCommentsBtn2.textContent = 'View Comments';
        }
    });

    const toggleBlurBtn = document.getElementById('toggleBlurBtn');
    const explicitImage = document.getElementById('explicitImage');

    toggleBlurBtn.addEventListener('click', function() {
        explicitImage.style.filter = explicitImage.style.filter === 'blur(0px)' ? 'blur(20px)' : 'blur(0px)';
    });

    // Comment like and reply interactions
    document.querySelectorAll('.comment-like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('comment-liked');
        });
    });

    document.querySelectorAll('.comment-reply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const replyField = document.createElement('div');
            replyField.classList.add('comment-field');
            replyField.innerHTML = '<input type="text" placeholder="Write a reply..."><button><i class="fa fa-paper-plane"></i></button>';
            btn.parentElement.parentElement.appendChild(replyField);
        });
    });

    // Double-tap to like functionality
    document.querySelectorAll('.double-tap-to-like').forEach(image => {
        let lastTap = 0;
        image.addEventListener('touchend', function(event) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                // Like the image
                if (image.id === 'explicitImage') {
                    liked2 = !liked2;
                    if (liked2) {
                        likes2++;
                        likeBtn2.classList.add('liked');
                    } else {
                        likes2--;
                        likeBtn2.classList.remove('liked');
                    }
                    likeCount2.textContent = likes2;
                } else {
                    liked1 = !liked1;
                    if (liked1) {
                        likes1++;
                        likeBtn1.classList.add('liked');
                    } else {
                        likes1--;
                        likeBtn1.classList.remove('liked');
                    }
                    likeCount1.textContent = likes1;
                }
            }
            lastTap = currentTime;
        });
    });
});