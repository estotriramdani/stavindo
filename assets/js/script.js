$.ajax({
  url: "https://indonesia-covid-19.mathdro.id/api/",
  success: (r) => {
    const content = `
    <div class="row mb-3">
        <div class="col-12">
          <div class="content-card shadow-sm">
            <div class="angka">
              <h2>${r.jumlahKasus}</h2>
              <span>Total Kasus</span>
            </div>
            <p>Total Kasus</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="content-card shadow-sm container">
            <div class="angka">
              <h2>${r.sembuh}</h2>
              <span>kasus</span>
            </div>
            <p>Sembuh</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="content-card shadow-sm container">
            <div class="angka">
              <h2>${r.perawatan}</h2>
              <span>kasus</span>
            </div>
            <p>Perawatan</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="content-card shadow-sm container">
            <div class="angka">
              <h2>${r.meninggal}</h2>
              <span>kasus</span>
            </div>
            <p>Meninggal</p>
          </div>
        </div>
      </div>`;
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = content;
    let unix_timestamp = r.lastUpdate;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    var hari = date.getDay();
    var tanggal = date.getDate();
    var bulan = date.getMonth();
    var tahun = date.getFullYear();

    // Will display time in 10:30:23 format
    var formattedTime = `${tanggal}/${bulan + 1}/${tahun}`;
    $(".last-update").html(formattedTime);
  },
});
