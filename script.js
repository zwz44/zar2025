const gameId = Math.random().toString(36).substring(2, 6);
const inviteLink = `${window.location.href}?join=${gameId}`;
alert(`لینکی بانگهێشت: ${inviteLink}`);
