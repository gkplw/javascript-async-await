// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function getJohnData() {
  try {
    const onSucess = await getJohnProfile()
    console.log(onSucess)
  } catch(error){
    console.log(error)
  }
}

getJohnData()