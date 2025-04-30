const ques = document.querySelectorAll('.question');

ques.forEach((question) => {
  const opts = question.querySelectorAll('.option input');

  opts.forEach((radio) => {
    radio.addEventListener('change', () => {
      console.log(`Selected for ${question.id}:`, radio.value);
    });
  });
});
