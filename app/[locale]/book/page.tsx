<<<<<<< HEAD
import MainTemplate from "@/components/MainTemplate";
import BookContent from "./BookContent";
import BooksTitle from "./BooksTitle";
import NoteColBlk from "./widgets/NoteColBlk";
import BooksAnnotate from "@/components/book/BooksAnnotate/BooksAnnotate";
=======
'use client';

import MainTemplate from '@/components/MainTemplate';
import BookContent from './widgets/BookContent';
import BooksTitle from './widgets/BooksTitle';

>>>>>>> 590f01a95d9987524e167eccbac5cad57d1b1175
export default function Home() {
	return (
		<>
			<MainTemplate
				scroll
				TopSection={
					<BooksTitle
						bookTitle="Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan
			O.Smith"
<<<<<<< HEAD
            bookAuthor="Kare J. Smith"
          />
        }
        LeftColumn={<div />}
        RightColumn={<div />}
        MainSection={<BookContent />}
      /> */}
      <NoteColBlk
        title="‘Lorem ipsum dolor sit amet...’"
        content="Lorem ipsum dolor sit amet consectetur. Tortor vulputate cursus lobortis consequat congue."
        color="bg-pink-200"
        userName="Burcu A."
      />
      {/* <BooksAnnotate title="Hidden Treasure 1956 / 09" /> */}
    </>
  );
=======
						bookAuthor="Kare J. Smith"
					/>
				}
				LeftColumn={<div />}
				RightColumn={<div />}
				MainSection={<BookContent />}
			/>
		</>
	);
>>>>>>> 590f01a95d9987524e167eccbac5cad57d1b1175
}
