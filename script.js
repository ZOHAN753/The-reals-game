  const button = document.getElementById("animatedButton");

  button.addEventListener("click", () => {
    button.classList.remove("clicked");
    void button.offsetWidth;
    button.classList.add("clicked");

    
    setTimeout(() => {
      window.location.href = "https://drive.google.com/file/d/1cGlNycEV_Wh95ROgGV7ehVgSRcjBb3IY/view";
    }, 500);
  });