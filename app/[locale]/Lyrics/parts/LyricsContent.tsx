import { LyricsType, MusicianType } from "@/app/type";
import { cormorant, cormorant_Garamond } from "@/options/font";
import LyricsTheme from "./lyricsTheme";
type LyricsList = {
  isFilterOpen?: boolean;
  list: LyricsType[];
  info: MusicianType;
};
const LyricsContent: React.FC<LyricsList> = ({ isFilterOpen, list, info }) => {
  return (
    <>
      <main className="md:flex flex-col justify-start items-center px-5 md:mb-10">
        <div className="flex items-center  md:max-w-xl w-full ">
          <div
            className={` text-2xl font-semibold ${cormorant_Garamond.className}`}>
            {info.lyricsNumber}
          </div>
          <hr className="w-full mx-5 border-PrimaryColor" />
        </div>
        <div className="md:hover:bg-PrimaryColor-12 md:bg-gray-30 md:max-w-xl md:w-full md:rounded-2xl md:mt-8">
          <h2
            className={`flex flex-col pl-6 text-base font-medium ${cormorant.className} `}>
            <div>Besteciler:{info.band}</div>
            <div>Çıkış tarihi:{info.dateComposition}</div>
            <div>Sanatçı:{info.artist}</div>
            <div>Albüm:{info.record}</div>
            <div>Tür:{info.musictype}</div>
            <div className="py-4">
              <hr className="w-16 border-PrimaryColor" />
            </div>
          </h2>
          {list.map((li, index) => {
            return (
              <>
                <LyricsTheme key={index} {...li} />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default LyricsContent;
