
function loadDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const wisata = urlParams.get("wisata");

  if (wisata === "baturraden") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/baturraden.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Lokawisata Baturraden</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Berada di ketinggian 640-750 mdpl, Lokawisata Baturraden menawarkan pemandangan Gunung Slamet serta memiliki udara sejuk. Kawasan wisata ini memiliki atraksi wisata alam dan buatan yang cocok untuk segala usia. Pengunjung bisa menyaksikan kesegaran air terjun alias Curug Gumawang dengan ketinggian 25 meter, seperti dikutip dari Visit Jateng. Adapula, Pancuran Pitu yakni pemandian air panas alami yang memiliki tujuh pancuran. Pengunjung dapat merendam kaki di kolam Pancuran Pitu yang diyakini mampu menyembuhkan penyakit lantaran mengandung belerang.
              </p>
              <p>
              Lokawisata Baturraden juga dilengkapi dengan danau buatan dengan air mancur di tengahnya. Wisatawan bisa mengelilingi danau dengan menaiki sepeda air. Bagi pengunjung anak-anak, tersedia waterpark yang dilengkapi permainan air seperti seluncuran, ember tumpah, dan sebagainya. Selain itu, masih ada spot foto Instagramable, sendang atau sumber mata air alami, warung kuliner, dan sebagainya. Dengan beragam daya tarik tersebut, tidak heran jika Lokawisata Baturraden merupakan salah satu obyek wisata populer di Jawa Tengah.
              </p>

              <h1>Lokasi</h1>
              <p>
              Jl. Raya Baturaden No.174, Dusun I Karangmangu, Karangmangu, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151
              </p>

              <a href="https://www.google.com/maps/place/Lokawisata+Baturraden/@-7.3133861,109.2265054,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x2e6ff501512be57d:0xbd28ab7f6dc75204!2sJl.+Raya+Baturaden+No.174,+Dusun+I+Karangmangu,+Karangmangu,+Kec.+Baturaden,+Kabupaten+Banyumas,+Jawa+Tengah+53151!2m2!1d109.2290803!2d-7.3133914!3m5!1s0x2e6ff501512be57d:0xbd28ab7f6dc75204!8m2!3d-7.3133914!4d109.2290803!16s%2Fm%2F01311v0j?entry=ttu" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else if (wisata === "taman-mas-kemambang") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/taman-mas-kemambang.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Taman Mas Kemambang</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Taman Apung Mas Kemambang merupakan objek wisata yang cocok dikunjungi untuk bersantai dan berfoto. Mengapa? Karena tempat ini rindang dan menyajikan cukup banyak tempat untuk duduk. Apa yang unik? Taman ini memiliki arti dari namanya “Bale” yakni bagian depan rumah, lalu “Kemambang” yang artinya terapung di atas air. Tempat ini juga dihiasi kolam ikan dan dilengkapi fasilitas taman bermain anak-anak serta fasilitas pendukung lainnya. Di sini kita juga bisa berfoto dengan view background Gunung Slamet loh, cukup eye catching bukan?
              </p>

              <h1>Lokasi</h1>
              <p>
              Jl. Karang Kobar No.9, Glempang, Bancarkembar, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53115
              </p>

              <a href="https://www.google.com/maps/place/Taman+Mas+Kemambang/@-7.3626993,109.1923102,13z/data=!4m6!3m5!1s0x2e655ef5da80facf:0xf820ee1813b8fc28!8m2!3d-7.4120017!4d109.2379376!16s%2Fg%2F1pzttlv37?entry=ttu" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else if (wisata === "telaga-sunyi") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/telaga-sunyi.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Telaga Sunyi</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Telaga Sunyi terkenal karena keindahan alamnya yang menenangkan dan suasana sunyinya yang menarik bagi pengunjung yang ingin bersantai atau bermeditasi. Di sekitar telaga ini juga terdapat pepohonan yang rindang dan udara yang segar, menciptakan suasana yang cocok untuk beristirahat dan melepas penat dari kegiatan sehari-hari. Sumber air telaga berasal dari mata air Gunung Slamet. Sebelum sampai ke telaga, pengunjung akan berjalan kaki melewati pedesaan dengan pemandangan yang alami. Air telaga jernih hingga dapat melihat bagian dasarnya. Namun pengunjung jangan terkecoh karena kedalaman telaga mencapai enam meter. Untuk pengunjung yang tidak piawai berenang tidak disarankan untuk masuk ke kolam kecuali ada pendamping.
              </p>

              <h1>Lokasi</h1>
              <p>
              Sawah & Hutan, Limpakuwus, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183
              </p>

              <a href="https://www.google.com/maps?sca_esv=c33f69b4e642d21b&output=search&q=telaga+sunyi+purwokerto&source=lnms&entry=mc&ved=1t:200715&ictx=111" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else if (wisata === "gunung-slamet") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/g-slamet.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Gunung Slamet</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Gunung Slamet merupakan gunung berapi yang terletak di Jawa Tengah, Indonesia, dan merupakan gunung tertinggi di Pulau Jawa dengan ketinggian sekitar 3.428 meter di atas permukaan laut. Berlokasi di sekitar wilayah Purwokerto, Purbalingga, dan Tegal, Gunung Slamet adalah salah satu gunung berapi paling aktif di Indonesia.
              </p>

              <h1>Lokasi</h1>
              <p>
              Dusun III Berubahan, Kemutug Lor, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151
              </p>

              <a href="https://www.google.com/maps/place/Basecamp+Pendakian+Gunung+Slamet+trek+Baturraden/@-7.3127949,109.2335269,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ff5c47d8e13d5:0x9310f67453dc4611!8m2!3d-7.3127949!4d109.2335269!16s%2Fg%2F11mvb0j43_?entry=ttu" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else if (wisata === "curug-carang") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/curug-carang.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Curug Carang</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Curug Carang adalah sebuah air terjun yang memukau dengan ketinggian sekitar 30 meter, terletak di lereng Gunung Slamet, dekat kota Purwokerto, Jawa Tengah. Akses ke air terjun ini melalui perjalanan trekking yang menantang, namun pengunjung akan disuguhi pemandangan alam yang segar dan indah di sepanjang perjalanan. Di sekitar Curug Carang, tersedia fasilitas dasar seperti area parkir, tempat istirahat, dan warung makan kecil untuk kenyamanan pengunjung.
              </p>

              <h1>Lokasi</h1>
              <p>
              Kemutug Kidul, Sawah, Kotayasa, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151
              </p>

              <a href="https://www.google.com/maps/place/Curug+Carang+(Purwokerto)/@-7.3395915,109.2395012,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ff59b9d93fe6d:0xe8ab31517fc3c453!8m2!3d-7.3395915!4d109.2420761!16s%2Fg%2F11c1qrzd5q?entry=ttu" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else if (wisata === "curug-jenggala-baturaden") {
    document.getElementById("detail-content").innerHTML = `
            <div class="card" style="max-width: 1000px;">
                <img src="images/curug-jenggala-baturaden.jpg" class="card-img-top" alt="Gambar">
                <div class="card-body text-center">
                  <p>Sumber:</p>
                  <h5 class="card-title">Curug Jenggala</h5>
                </div>
            </div>
            <div>
              <h1>Deskripsi</h1>
              <p>
              Curug Jenggala adalah sebuah air terjun yang terletak di lereng Gunung Slamet, dekat dengan kota Purwokerto, Jawa Tengah. Dikenal dengan keindahan alamnya, Curug Jenggala menawarkan pemandangan air terjun yang spektakuler dengan ketinggian sekitar 80 meter serta kolam alami yang memikat pengunjung untuk berenang dan bersantai. Akses ke Curug Jenggala memerlukan perjalanan pendakian yang menantang melalui jalur yang berliku di tengah hutan, namun keindahan alam yang ditawarkan membuatnya menjadi destinasi yang populer di kalangan wisatawan dan pendaki.
              </p>

              <h1>Lokasi</h1>
              <p>
              Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53152
              </p>

              <a href="https://www.google.com/maps/place/Curug+Jenggala/@-7.3090267,109.2062028,17z/data=!3m1!4b1!4m6!3m5!1s0x2e655f0383e97adb:0xcee2f85a2d8cf892!8m2!3d-7.3090267!4d109.2087777!16s%2Fg%2F11fj3m2mgz?entry=ttu" class="btn btn-success">
                Lihat Map 
              </a>
            </div>
        `;
  } else {
    document.getElementById(
      "detail-content"
    ).innerHTML = `<p>Detail wisata tidak ditemukan.</p>`;
  }
}

window.onload = loadDetail;
