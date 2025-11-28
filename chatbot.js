// chatbot.js
(function () {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.3/inject.js";
    script.onload = function () {
      window.botpress.init({
        botId: "11bbe16c-a9e8-406c-a143-924e75447810",
        clientId: "fb220fa4-d077-420d-9f65-de54ab0323fc",
        configuration: {
          composerPlaceholder: "Type your query here...",
          botName: "NPS Buddy",
          color: "#3B82F6",
          variant: "solid",
          themeMode: "light",
          fontFamily: "ibm",
          radius: 4,
          showPoweredBy: true
        }
      });
    };
    document.head.appendChild(script);
  })();
  