import { LyricsType, MusicianType } from "../type";
export const allMusicianType: MusicianType = {
  band: "Ergin Mehmet Soyarslan,",
  dateComposition: "1992",
  artist: "Cem Karaca",
  record: "Cemaz-Ül-Evvel",
  musictype: "Turkish Rock",
  lyricsNumber: "261",
};

const allLyics: LyricsType[] = [
  {
    band: "Ergin Mehmet Soyarslan,",
    dateComposition: "1992",
    artist: "Cem Karaca",
    record: "Cemaz-Ül-Evvel",
    musictype: "Turkish Rock",
    lyricsNumber: "261",
    lyrics: [
      {
        id: "1",
        content:
          "Kjærlighet, hvor godt det klinger.Den er sendt fra Gud.Gode frukter den oss bringer,kjærlighet til Gud.",
        title: "1",
        isRef: false,
      },
      {
        id: "2",
        content:
          "	Kjærlighet, det er å giveselv sitt eget liv.Slik har Jesus først oss elsket.Derfor elsker vi.",
        title: "Ref",
        isRef: true,
      },
      {
        id: "3",
        content:
          "	Kjærligheten allting makter,selv å gi sitt liv.Kjærligheten alt foraktersom kan skape splid.",
        title: "2",
        isRef: false,
      },
      {
        id: "4",
        content:
          "Kjærligheten allting tåler,og utholder alt.Alle ting den også håper,og er tro i alt.",
        title: "3",
        isRef: false,
      },
      {
        id: "5",
        content:
          "	Kjærligheten blir ei bitter,gjemmer ei på ondt,men isteden fast den bindermed sitt gode bånd.",
        title: "4",
        isRef: false,
      },
      {
        id: "6",
        content:
          "	Ei usøm’lig den kan være,eget søker ei,søker kun sin nestes beste,tenker ei på seg.”",
        title: "5",
        isRef: false,
      },
    ],
  },
];
export default allLyics;
