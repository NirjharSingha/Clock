setInterval(() => {
  date = new Date();
  h = date.getHours() % 12;
  m = date.getMinutes();
  s = date.getSeconds();

  hRotation = 30 * h + m / 2 + s / 120;
  mRotation = 6 * m + s / 10;
  sRotation = 6 * s;

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
