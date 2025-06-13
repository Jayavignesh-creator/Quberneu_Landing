import './style.css'

// Add your JavaScript code here
console.log('Quberneu Landing Page loaded!')

// Example: Simple interactive element
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('#cta-button')
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      alert('Welcome to Quberneu! 🚀')
    })
  }
})