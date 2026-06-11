(function () {
    // ---- CONFIGURATION ----
    const START_CELL_SIZE = 168;
    const END_CELL_SIZE = 5;
    const ANIMATION_DURATION_MS = 900;

    // ---- DOM ELEMENTS ----
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');

    // Set fixed canvas size (340x340)
    canvas.width = 340;
    canvas.height = 340;

    // ---- IMAGE DATA ----
    let originalImageData = null;
    let imageLoaded = false;
    const img = new Image();
    const IMAGE_URL = "./images/about-me.jpg";   // change to your image path

    // ---- HELPER: average color of a region ----
    function getRegionAverageColor(data, w, h, x, y, regionW, regionH) {
        let r = 0, g = 0, b = 0, count = 0;
        const startX = Math.max(0, Math.floor(x));
        const startY = Math.max(0, Math.floor(y));
        const endX = Math.min(w, Math.floor(x + regionW));
        const endY = Math.min(h, Math.floor(y + regionH));
        for (let py = startY; py < endY; py++) {
            for (let px = startX; px < endX; px++) {
                const idx = (py * w + px) * 4;
                r += data[idx];
                g += data[idx + 1];
                b += data[idx + 2];
                count++;
            }
        }
        if (count === 0) return { r: 0, g: 0, b: 0 };
        return { r: r / count, g: g / count, b: b / count };
    }

    // ---- RENDER MOSAIC with given cell size ----
    function renderMosaic(cellSize) {
        if (cellSize <= END_CELL_SIZE) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height); return
        }
        if (!originalImageData) return;
        const w = canvas.width, h = canvas.height;
        const imgData = originalImageData;
        ctx.clearRect(0, 0, w, h);
        const cols = Math.ceil(w / cellSize);
        const rows = Math.ceil(h / cellSize);
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * cellSize;
                const y = row * cellSize;
                const cellW = Math.min(cellSize, w - x);
                const cellH = Math.min(cellSize, h - y);
                if (cellW <= 0 || cellH <= 0) continue;
                const avg = getRegionAverageColor(imgData, w, h, x, y, cellW, cellH);
                ctx.fillStyle = `rgb(${avg.r}, ${avg.g}, ${avg.b})`;
                ctx.fillRect(x, y, cellW, cellH);
            }
        }
    }

    // ---- RENDER ORIGINAL IMAGE ----
    function renderOriginal() {
        if (!imageLoaded) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // ---- ANIMATION ----
    let animFrameId = null;
    let hoverActive = false;
    let animStart = 0;

    function startGridAnimation() {
        if (!imageLoaded) return;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        hoverActive = true;
        animStart = performance.now();

        function animate(now) {
            if (!hoverActive) {
                if (animFrameId) cancelAnimationFrame(animFrameId);
                animFrameId = null;
                renderOriginal();
                return;
            }
            const elapsed = now - animStart;
            let progress = Math.min(1, elapsed / ANIMATION_DURATION_MS);
            const eased = 1 - Math.pow(1 - progress, 2);   // quad out
            let cellSize = START_CELL_SIZE + (END_CELL_SIZE - START_CELL_SIZE) * eased;
            cellSize = Math.max(END_CELL_SIZE, Math.min(START_CELL_SIZE, cellSize));
            renderMosaic(cellSize);
            if (progress < 1) {
                animFrameId = requestAnimationFrame(animate);
            } else {
                renderMosaic(END_CELL_SIZE);
                animFrameId = null;
            }
        }
        animFrameId = requestAnimationFrame(animate);
    }

    // ---- EVENT HANDLERS ----
    function onEnter() {
        if (!imageLoaded) return;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        hoverActive = true;
        renderMosaic(START_CELL_SIZE);
        startGridAnimation();
    }

    function onLeave() {
        hoverActive = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        animFrameId = null;
        renderOriginal();
    }

    // ---- LOAD IMAGE & INIT ----
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        originalImageData = new Uint8ClampedArray(imgData.data);
        imageLoaded = true;
        renderOriginal();
        canvas.addEventListener('mouseenter', onEnter);
        canvas.addEventListener('mouseleave', onLeave);
        canvas.style.cursor = 'pointer';
    };
    img.src = IMAGE_URL;
})();
// Carousel func
(function () {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;

        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        currentIndex = index;
    }

    document.getElementById('btn-prev').addEventListener('click', () => showImage(currentIndex - 1));
    document.getElementById('btn-next').addEventListener('click', () => showImage(currentIndex + 1));
})()