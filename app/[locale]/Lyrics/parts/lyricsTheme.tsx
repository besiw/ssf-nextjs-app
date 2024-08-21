import { LyricsType } from "@/app/type";
import { cormorant, cormorant_Garamond } from "@/options/font";

const LyricsTheme: React.FC<LyricsType> = ({ lyrics }) => {
  return (
    <div>
      {lyrics?.map((s, i) => {
        return (
          <>
            <div className="pb-3 w-60 pl-6">
              <p
                key={i}
                className={` text-lg text-PrimaryColor dark:text-PrimaryColor-bgDark86 font-medium ${cormorant_Garamond.className}`}>
                {s.title}
              </p>
              <p className={`${cormorant.className} font-medium`}>
                {s.content}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default LyricsTheme;
