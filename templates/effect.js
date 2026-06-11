const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();

// Set the source and wait for it to load
img.src = "./images/about-me.jpg";
img.onload = () => {
    // Optionally, you can call gridEffect here or draw directly
    gridEffect();
};

export function gridEffect() {
    // Now the image is ready

}