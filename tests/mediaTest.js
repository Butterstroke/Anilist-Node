const anilist = require("../lib/index");
const AniList = new anilist();

//Finds anime information. Should return information on Occultic;Nine.
AniList.media.anime(21708).then(console.log);

//Finds manga information. Should return information on Mahoutsukai no Yome.
AniList.media.manga(85435).then(console.log);
