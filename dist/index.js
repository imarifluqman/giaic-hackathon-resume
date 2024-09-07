let nav = document.getElementById("nav");
if (nav) {
    const liElements = nav.querySelectorAll("li");
    liElements.forEach((li, index) => {
        li.addEventListener("click", () => {
            liElements.forEach((li) => {
                li.id = "";
            });
            const sections = document.querySelectorAll(`section`);
            if (sections) {
                sections.forEach((section) => {
                    section.style.display = "none";
                    if (section.classList.contains(li.innerText.toLowerCase())) {
                        section.style.display = "grid";
                        li.id = "active";
                    }
                });
            }
        });
    });
}
else {
    console.error("The <ul> element was not found.");
}
export {};
