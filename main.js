window.addEventListener("load", () => {
  const net = new brain.NeuralNetwork(); // Creates a classifier

  const trainingData = [
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
    { input: [0, 0], output: [0] },
  ];

  net.train(trainingData);

  const result = brain.likely([0, 1], net);

  this.document.getElementById("output").innerHTML =
    "The prediction is " + result;
});
