// Call to openApi
export async function apiFetch(prompt, engine = "text-ada-001") {
  const data = {
    prompt: `\n\nQ: ${prompt}\nA:`,
    temperature: 0.8,
    max_tokens: 300,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  let response = await fetch(
    `https://api.openai.com/v1/engines/${engine}/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    }
  ).catch((error) => {
    window.alert("Error! Sorry, something happened on our end, this has nothing to do with you! Please try again or wait a few minutes to let the elves fix the issue.")
  });
  
  let result = await response.json();
  return result.choices[0].text;
}
