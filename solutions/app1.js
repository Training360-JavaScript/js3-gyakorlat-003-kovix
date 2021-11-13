const setCookie = (str) => {
  const now = new Date();
  now.setTime(now.getTime() + 15*60*1000);
  const sExpires = now.toUTCString();
  document.cookie=`token=${str};expires=${sExpires};path=/`;
}

 export default setCookie;
