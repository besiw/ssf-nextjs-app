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
          <section
            className={`flex flex-col pl-6 text-base font-medium ${cormorant.className} `}>
            <p>Besteciler:{info.band}</p>
            <p>Çıkış tarihi:{info.dateComposition}</p>
            <p>Sanatçı:{info.artist}</p>
            <p>Albüm:{info.record}</p>
            <p>Tür:{info.musictype}</p>
            <div className="py-4">
              <hr className="w-16 border-PrimaryColor" />
            </div>
          </section>
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
