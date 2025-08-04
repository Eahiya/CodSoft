        AOS.init({
            duration: 800,
            once: true
        });

        document.getElementById('nav-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        function checkScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        checkScroll();
    
        window.addEventListener('scroll', checkScroll);

        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (barPosition < windowHeight - 100) {
                    bar.style.transition = 'width 1.5s ease-out';
                }
            });
        }
        
  
        animateSkillBars();
        
       
        window.addEventListener('scroll', animateSkillBars);

      
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
         
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            
       
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
            
            this.reset();
        });

    
        window.addEventListener('scroll', function() {
            const scrollProgress = document.getElementById('scroll-progress');
            const windowHeight = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });

    
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', function() {
            if (themeIcon.classList.contains('fa-moon')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });