/* Scrooll Sections Active Link*/
Let Selection = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('headers nav a');

window.onscroll = () => {
        Selections .forEach(=> {
            Let top = window.scrollY;
            Let offset = sec.offsetTop - 150;
            Let height = sec.offsetHeigth;
            Let Id = sec.getAttribute('id');

            if (top >= offset && top <offset + height){
                navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
}

/*sticky navbar*/
header.classList.toggle('sticky', window.scrollY > 100); c 