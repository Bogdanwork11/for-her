const fullText = "Любимая моя девочка, хочу сказать тебе спасибо за то, что ты есть. За то, что ты даришь мне улыбку с каждым воспоминанием о тебе, а это происходит примерно каждую секунду в моей жизни.\n\nЗа годы общения я понял, что ты у меня очень необычный и божественный ангелочек, который очень внимательный, милый, красивый...\n\nИ самое главное хочу тебе сказать: за 6 лет нашего общения мой интерес к тебе ни на секунду не угас, а наоборот — с каждым разом я в тебе вижу уже своего любимого и милого ангелочка, который становится всё краше.\n\nОгромное спасибо тебе за то, что даришь мне такую возможность ощущать, что такое настоящая любовь и понимание в отношениях. Люблю тебя очень сильно, симпатюля ❤️❤️❤️";

// Создаем аудио-объект (файл должен лежать в images/click.mp3)
const typingSound = new Audio('images/click.mp3');

function createFlowers() {
    const container = document.getElementById('flowers');
    const flowerImages = [
        'https://img.icons8.com/emoji/48/000000/rose-emoji.png',
        'https://img.icons8.com/emoji/48/000000/hibiscus.png',
        'https://img.icons8.com/emoji/48/000000/cherry-blossom.png'
    ];

    for (let i = 0; i < 40; i++) {
        let flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.backgroundImage = `url(${flowerImages[Math.floor(Math.random() * 3)]})`;
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.width = flower.style.height = (Math.random() * 25 + 25) + 'px';
        flower.style.animationDuration = (Math.random() * 3 + 4) + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(flower);
    }
}

function showLoveAlert() {
    alert("Ты самая милая у меня любимая ;) ❤️");
    document.getElementById('openBtn').classList.add('hidden');
    document.getElementById('nextMessageBtn').classList.remove('hidden');
}

document.getElementById('nextMessageBtn').onclick = function() {
    this.classList.add('hidden');
    document.getElementById('cmdWindow').classList.remove('hidden');
    typeWriter(fullText, 0);
};

function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        
        // Воспроизводим звук (сбрасываем время, чтобы звук частил)
        typingSound.currentTime = 0;
        typingSound.play().catch(e => console.log("Добавь click.mp3 в images!"));

        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

createFlowers();