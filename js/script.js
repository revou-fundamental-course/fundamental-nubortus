//name
const username = prompt("Please enter your name:");
if (username) {
  document.getElementById('username').textContent = `Hello ${username}, Welcome to our website!`;
} else {
  alert('Entering as: Guest');
}
//tanggal
const tanggalLahirInput = document.getElementById('tanggal_lahir');


tanggalLahirInput.type = 'date';

//output 
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nama = document.getElementById('nama').value;
      const tanggalLahir = document.getElementById('tanggal_lahir').value;
      const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
      const pesan = document.getElementById('pesan').value;

      const currentTime = new Date().toString();

      document.getElementById('current-time').innerText = currentTime;
      document.getElementById('output-nama').innerText = nama;
      document.getElementById('output-tanggal-lahir').innerText = tanggalLahir;
      document.getElementById('output-jenis-kelamin').innerText = jenisKelamin;
      document.getElementById('output-pesan').innerText = pesan;
  });
});
