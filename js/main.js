const userId = "499315885245464617";

async function fetchAvatar() {
  try {
    const res = await fetch("https://testeee-rtqe.onrender.com/api/user/" + userId);
    const data = await res.json();

    if (data.error) {
      console.error("Erro ao carregar avatar");
      document.getElementById("discord-avatar-small").src =
        "https://cdn.discordapp.com/embed/avatars/0.png";
      return;
    }

    const avatarURL = data.avatarURL || `https://cdn.discordapp.com/embed/avatars/0.png`;
    document.getElementById("discord-avatar-small").src = avatarURL;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    document.getElementById("discord-avatar-small").src =
      "https://cdn.discordapp.com/embed/avatars/0.png";
  }
}

window.onload = function () {
  updateVisitorCount();
  displayVisitorCount();
  fetchAvatar();
};
