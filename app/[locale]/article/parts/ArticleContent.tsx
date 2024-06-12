import { cormorant_Garamond } from "@/options/font";

type BookContentProps = {
  FilteredName: string;
  year: string;
  moon: string;
  title: string;
  autor?: string;
  note?: string;
};
const ArticleContent: React.FC<BookContentProps> = ({
  FilteredName,
  year,
  autor,
  note,
  title,
  moon,
}) => {
  return (
    <>
      <div className=" hidden md:flex relative flex-col left-8 top-4">
        <div className={`${cormorant_Garamond.className}`}>
          Filtered: 2007 / 04
        </div>
        <div className="flex border-b-2 w-16 1.5xl:w-52 border-PrimaryColor"></div>
      </div>
      <div className="pr-5">
        <div className=" flex md:hidden justify-end w-full">
          <div className={`${cormorant_Garamond.className}`}>
            Filtered: 2007 / 04
          </div>
        </div>
        <div className="flex md:hidden  justify-end w-full pt-5">
          <div className="border-t-2 border-PrimaryColor flex justify-end w-19"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-3xl w-80 md:w-full flex-col">
          <span className="flex text-2xl font-semibold pb-6 justify-center 1.5xl:justify-start">
            Stammen og grenene
          </span>
          <span className="flex text-base font-medium ">
            I Joh. 15, 1-11 står det svært alvorlig om Faderen som
            vingårdsmannen, om Jesus som vintreets stamme og om hans disipler
            som vintreets grener. Vi vet at en gren er helt avhengig av å være
            på stammen ellers visner den veldig fort. Grenen visner i løpet av
            ganske få dager når den blir hugget av et tre fordi den mangler
            tilførsler i form av den saft som stammen hele tiden avgir. Hvordan
            kan vi få tilført denne næring (saft) når vi er en gren? Jo, ved
            bevisst å arbeide i bønn og hengivelse i troen. Hvis de kanaler som
            saften flyter igjennom fra stammen og til grenen tettes, da
            forsvinner kraften på forunderlig vis. Satan arbeider målbevisst på
            at forbindelsen mellom stammen og grenen svekkes og helst opphører
            helt.
          </span>
          <span className="flex text-base font-medium ">
            I Joh. 15, 1-11 står det svært alvorlig om Faderen som
            vingårdsmannen, om Jesus som vintreets stamme og om hans disipler
            som vintreets grener. Vi vet at en gren er helt avhengig av å være
            på stammen ellers visner den veldig fort. Grenen visner i løpet av
            ganske få dager når den blir hugget av et tre fordi den mangler
            tilførsler i form av den saft som stammen hele tiden avgir. Hvordan
            kan vi få tilført denne næring (saft) når vi er en gren? Jo, ved
            bevisst å arbeide i bønn og hengivelse i troen. Hvis de kanaler som
            saften flyter igjennom fra stammen og til grenen tettes, da
            forsvinner kraften på forunderlig vis. Satan arbeider målbevisst på
            at forbindelsen mellom stammen og grenen svekkes og helst opphører
            helt.
          </span>
          <span className="flex text-base font-medium ">
            I Joh. 15, 1-11 står det svært alvorlig om Faderen som
            vingårdsmannen, om Jesus som vintreets stamme og om hans disipler
            som vintreets grener. Vi vet at en gren er helt avhengig av å være
            på stammen ellers visner den veldig fort. Grenen visner i løpet av
            ganske få dager når den blir hugget av et tre fordi den mangler
            tilførsler i form av den saft som stammen hele tiden avgir. Hvordan
            kan vi få tilført denne næring (saft) når vi er en gren? Jo, ved
            bevisst å arbeide i bønn og hengivelse i troen. Hvis de kanaler som
            saften flyter igjennom fra stammen og til grenen tettes, da
            forsvinner kraften på forunderlig vis. Satan arbeider målbevisst på
            at forbindelsen mellom stammen og grenen svekkes og helst opphører
            helt.
          </span>
        </div>
      </div>
    </>
  );
};
export default ArticleContent;
