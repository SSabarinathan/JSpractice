//setTimeout()- setting timeout for the function

function time_delay(name){
    console.log("This message is displayed after 3 seconds of time interval");
    console.log("This delay was set by " ,name);
}
setTimeout(time_delay,3000,"Sabari")

/////////////////////////////////////////////////////////////////////////////////////////////////////

//setInterval()- for the process running at continue manner

let count = 0;
function continous_delay() {
  console.log(
    "This piece of data get repeated at every regular time interval of 2 seconds"
  );
  console.log("This delay also set by Sabarinathan");
  count++;
  if (count > 2) {
    clearInterval(interval);
  }
};
const interval = setInterval(continous_delay, 1000);
