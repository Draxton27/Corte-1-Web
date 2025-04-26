document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const carrera = this.carrera.value.trim();
    const conferencias = Array.from(this.querySelectorAll('input[name="conferencias"]:checked'));
  
    if (!nombre || !correo || !carrera || conferencias.length === 0) {
      alert('Por favor complete todos los campos y seleccione al menos una conferencia.');
      return;
    }
  
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
      alert('Ingrese un correo válido.');
      return;
    }
  
    alert('Registro exitoso. Gracias por registrarse!');
    this.reset();
  });