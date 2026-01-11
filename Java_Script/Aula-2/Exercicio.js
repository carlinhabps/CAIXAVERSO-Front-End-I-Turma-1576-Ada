function calcularMedia() {
  const index = (select) => document.querySelector(select);

  const nomeAluno = index("#nomeAluno").value;

  console.log(nomeAluno);

  const notasAluno = [];

  notasAluno.push(parseFloat(index("#nota1").value));
  notasAluno.push(parseFloat(index("#nota2").value));
  notasAluno.push(parseFloat(index("#nota3").value));

  console.log(notasAluno);

  const media =
    (notasAluno[0] * 2 + notasAluno[1] * 3 + notasAluno[2] * 5) / 10;

  index(".nomeAluno").innerHTML = nomeAluno;

  index(".notasAluno").innerHTML = `
    <ul>
      <li>Nota 1: ${notasAluno[0]}</li>
      <li>Nota 2: ${notasAluno[1]}</li>
      <li>Nota 3: ${notasAluno[2]}</li>
    </ul>
  `;

  index(".media").innerHTML = media;
}
