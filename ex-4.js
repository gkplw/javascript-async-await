// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function getJohnData() {
  try {
    const onSucess = await getJohnProfile()
    console.log(onSucess)
  } catch(error){
    const onFailure = await getJohnProfile()
    console.log(onFailure)
  }
}

getJohnData()