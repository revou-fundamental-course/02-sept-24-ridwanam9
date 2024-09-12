// Event listener untuk form Luas segitiga
document.getElementById('area-form-tri').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit dan refresh halaman

    // Mengambil nilai input dari form
    const base = document.getElementById('tri-base').value.trim();
    const height = document.getElementById('tri-height').value.trim();

    // Mendapatkan elemen untuk menampilkan pesan error
    const errorBase = document.getElementById('error-tri-base');
    const errorHeight = document.getElementById('error-tri-height');

    // Bersihkan pesan error sebelumnya
    errorBase.textContent = '';
    errorHeight.textContent = '';

    // Memeriksa kondisi field kosong
    if (base === '' && height === '') {
        // Jika kedua field kosong
        errorBase.textContent = "Field masih kosong";
        errorHeight.textContent = "Field masih kosong";
        return; // Hentikan eksekusi lebih lanjut
    } else if (base === '') {
        // Jika hanya base yang kosong
        errorBase.textContent = "Field ini masih kosong";
        return; // Hentikan eksekusi lebih lanjut
    } else if (height === '') {
        // Jika hanya height yang kosong
        errorHeight.textContent = "Field ini masih kosong";
        return; // Hentikan eksekusi lebih lanjut
    }

    // Mengubah nilai input menjadi angka setelah validasi
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);

    // Menghitung area segitiga
    const area = (baseValue * heightValue) / 2;

    // Menampilkan hasil perhitungan
    document.getElementById('display-tri-base').textContent = baseValue.toFixed(1);
    document.getElementById('display-tri-height').textContent = heightValue.toFixed(1);
    document.getElementById('tri-area').textContent = area.toFixed(2);
});


// Event listener untuk form Keliling
document.getElementById('perimeter-form-tri').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah form untuk memuat ulang halaman saat melakukan pengiriman

    // ambil nilai input dari form
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    // // cek jika semua sisi segitiga valid
    // if (isValidTriangle(side1, side2, side3)) {

        // menghitung nilai keliling segitiga
        const perimeter = side1 + side2 + side3;

        // menampilkan hasil perhitungan
        document.getElementById('perimeter-result').textContent = perimeter.toFixed(2);
        
    // } else {
    //     alert('Nilai sisi-sisi tidak membentuk segitiga yang valid.');
    // }
});

// // fugsi untuk mengecek jika semua sisi segitiga valid
// function isValidTriangle(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
// }

// Event listener untuk form Luas jajar genjang
document.getElementById('area-form-par').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah form untuk memuat ulang halaman saat melakukan pengiriman

    // ambil nilai input dari form
    const parbase = parseFloat(document.getElementById('par-base').value);
    const parheight = parseFloat(document.getElementById('par-height').value);

    // Menghitung area jajar genjang
    const pararea = (parbase * parheight);

    // menampilkan hasil perhitungan
    document.getElementById('display-par-base').textContent = parbase.toFixed(1);
    document.getElementById('display-par-height').textContent = parheight.toFixed(1);
    document.getElementById('par-area').textContent = pararea.toFixed(2);
});


// Event listener untuk form Keliling Jajar Genjang
document.getElementById('perimeter-form-par').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah form untuk memuat ulang halaman saat melakukan pengiriman

    // ambil nilai input dari form
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    
    // menghitung nilai keliling jajar ganjang
    const perimeter = 2 * (side1 + side2);

    // menampilkan hasil perhitungan
    document.getElementById('perimeter-result-par').textContent = perimeter.toFixed(2);
    
});