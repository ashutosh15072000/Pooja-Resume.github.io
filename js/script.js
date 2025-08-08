
    // Scroll helper
    function scrollToSection(id){
      document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
    }

    // Reveal on scroll
    const revealItems = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.12});
    revealItems.forEach(el=>io.observe(el));

    // Skill meters animate
    window.addEventListener('load', () => {
      document.querySelectorAll('.meter > i').forEach((el, idx) => {
        const w = el.getAttribute('data-w') || '70%';
        setTimeout(()=> el.style.width = w, 250 + idx*80);
      });
    });

    // Contact form: client-side compose mailto
    function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Project inquiry from portfolio';
      const message = document.getElementById('message').value.trim();
      const formMsg = document.getElementById('formMsg');

      if(!name || !email || !message){
        formMsg.textContent = 'Please fill all required fields.';
        return false;
      }
      // Compose mailto (client-side)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:poojasingh12297@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      // open default mail client
      window.location.href = mailto;
      formMsg.textContent = 'Opening your mail client...';
      return false;
    }

    // Modal
    function openModal(title){
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').textContent = 'This is a placeholder project detail. Replace this with a short summary, tools used (Revit, AutoCAD, Lumion), team size, and a link to deliverables or images.';
      document.getElementById('modal').style.display = 'flex';
    }
    function closeModal(){ document.getElementById('modal').style.display = 'none' }

    // Accessibility: close modal with ESC
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeModal();
    });
