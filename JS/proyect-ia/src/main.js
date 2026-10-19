const input = document.getElementById("input");
const output = document.getElementById("output");
const lang = document.getElementById("lang");
const button = document.getElementById("button");

async function detectLanguage(text) {
   const detector = await LanguageDetector.create({
    expectedInputLanguages: ["en", "es", "de", "fr"],
  });
  const results = await detector?.detect(text);
  return results[0]?.detectedLanguage ?? 'en';
}

async function translate(text, input, output) {
  const translator = await Translator.create({
    sourceLanguage: input,
    targetLanguage: output,
  });
  return await translator.translate(text);
}

button.addEventListener("click", async () => {
  button.disabled = true;
  try {
    const text = input.value;
    const inputLang = await detectLanguage(text);
    const outputLang = lang.value;
    output.value = await translate(text, inputLang, outputLang);
  } catch (error) {
    output.value = error.toString();
  } finally {
    button.disabled = false;
  }
});