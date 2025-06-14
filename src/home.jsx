import './App.css';
import { useState } from 'react';

function Salam(props) {
  return <h2>Halo {props.nama}! {props.pesan}</h2>;
}

function Contoh() {
  const [jumlah,setJumlah] = useState(0);

  return (
    <div>
      <h2>Counter: {jumlah}</h2>
      <button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
      <button
        onClick={() => {
          if (jumlah > 0) {
            setJumlah(jumlah - 1);
          }
        }}
        disabled={jumlah === 0}
        >
          Kurang
        </button>
      <button onClick={() => setJumlah(0)}>Reset</button>
    </div>
  )
}

function InputNama() {
  const [nama, setNama] = useState("");

  const handleChange = (event) => {
    setNama(event.target.value);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Ketik Namamu..."
        value={nama}
        onChange={handleChange}
      />

      {/* Conditional Rendering */}
      {nama.length > 0 ? (
        <p>Halo, {nama}</p>
      ) : (
        <p>Silahkan Isi Nama Terlebih Dahulu</p>
      )}

      {/* Conditional Rendering */}
      {/* Mengganti kata sapaan jika terlalu panjang */}
      {nama.length >= 10 &&
        <p>Nama nya panjang juga yaa :v bisa sampai {nama.length} huruf</p>
      }
    </div>
  )
}

function DaftarSiswa() {
  const Siswa = ['Kazuhiko', 'Dudung', 'Adi', 'Siti', 'Budi'];

  return (
    <div>
      <h2>Daftar Siswa</h2>
      <ul>
        {Siswa.map((nama, index) => (
          <li key={index}>{nama}</li>
        ))}
      </ul>
      <p>Total Siswa : {Siswa.length}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2025 Kazuhiko. All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <h1>Halo semua</h1>
      <Salam nama="Kazuhiko" pesan="Selamat Datang" />
      <Contoh />
      <br />
      <InputNama />
      <DaftarSiswa />
      <Footer />
    </div>
  );
}

export default App;