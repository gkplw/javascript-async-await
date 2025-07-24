//Exercise #1

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
function onSucess (data) {
  console.log(data)
}

function onFailure (error) {
  console.log(error)
}

getJohnProfile().then(onSucess).catch(onFailure)