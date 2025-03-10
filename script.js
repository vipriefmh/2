 document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        let now = new Date();
        let year = now.getFullYear();
        let birthday = new Date(year, 2, 14, 0, 0, 0); // 14 Maret (bulan 2 karena index bulan mulai dari 0)

        if (now > birthday) {
            birthday.setFullYear(year + 1);
        }

        let timeDiff = birthday - now;
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `Hari Spesial Dalam: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

        if (timeDiff <= 0) {
            document.getElementById("countdown").innerHTML = "🎉 Selamat Ulang Tahun, Sayang! 🎂💖";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    document.getElementById("loveButton").addEventListener("click", function () {
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("surpriseContainer").style.display = "block";

        let text = "Happy Sweet Seventeen, sayang...🌷 Hari ini adalah hari spesial karena 17 tahun yang lalu, seseorang yang begitu berharga lahir ke dunia—dan aku bersyukur bisa mengenal dan menyayangimu. Semoga di usia baru ini, kamu semakin bahagia, semakin kuat menghadapi dunia, dan semakin dekat dengan impianmu. Aku akan selalu ada di sisimu, mendukungmu dalam setiap langkah. Terima kasih sudah menjadi dirimu, seseorang yang begitu berarti dalam hidupku. Happy Sweet Seventeen, semoga setiap harimu penuh kebahagiaan. Aku sayang kamu. ❤️";
        let i = 0;
        let speed = 50;

        function typeWriter() {
            if (i < text.length) {
                document.getElementById("loveLetterText").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();

        let pesan = "Hallo mas arief nya lia yang paling manis 💖, lia udah baca surat mas loh..., love u so much mas 🎂🥰";
        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(pesan)}`;
        document.getElementById("whatsappLink").href = url;

        startHeartAnimation();
        startCanvasHearts();
    });

    // ANIMASI HATI (LOVE PARTICLE)
    function startHeartAnimation() {
        const container = document.body;
        
        setInterval(() => {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("floating-heart");
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 500);
    }

    // ANIMASI HATI MENGGUNAKAN CANVAS
    function startCanvasHearts() {
        const canvas = document.getElementById("heartCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let hearts = [];

        function createHeart() {
            let x = Math.random() * canvas.width;
            let y = canvas.height + 10;
            let size = Math.random() * 5 + 5;
            let speed = Math.random() * 1 + 0.5;

            hearts.push({ x, y, size, speed });
        }

        function drawHearts() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            hearts.forEach((heart, index) => {
                ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
                ctx.font = heart.size + "px Arial";
                ctx.fillText("❤️", heart.x, heart.y);
                heart.y -= heart.speed;

                if (heart.y < -10) {
                    hearts.splice(index, 1);
                }
            });
        }

        function animateHearts() {
            drawHearts();
            requestAnimationFrame(animateHearts);
        }

        setInterval(createHeart, 200);
        animateHearts();
    }
});
