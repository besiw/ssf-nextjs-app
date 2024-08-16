'use client';
import { Metadata } from 'next';
import { SearchResultsTitle } from './parts/SearchResultsTitle';
import SearchCorrelation from './parts/searchCorrelation';
import { useState } from 'react';

export default function Home() {
	const [showFilter, setShowFilter] = useState(false);
	const handleFilterClick = () => {
		setShowFilter(!showFilter);
	};
	return (
		<>
			<SearchResultsTitle
				onFilterClick={handleFilterClick}
				showFilter={showFilter}
			/>
			<div className="flex justify-center">
				<SearchCorrelation
					bookName={'Book/ Magazine title'}
					paragraphtitle={'Lorem ipsum dolor sit amet consectetur.'}
					SearchResults={'Rut'}
					paragraph={
						'I Joh. 15, 1-11 står det svært alvorlig om Faderen som vingårdsmannen, om Jesus som vintreets stamme og om hans disipler som vintreets grener. Vi vet at en gren er helt avhengig av å være på stammen ellers visner den veldig fort. Grenen visner i løpet av ganske få dager når den blir hugget av et tre fordi den mangler tilførsler i form av den saft som stammen hele tiden avgir. Hvordan kan vi få tilført denne næring (saft) når vi er en gren? Jo, ved bevisst å arbeide i bønn og hengivelse i troen. Hvis de kanaler som saften flyter igjennom fra stammen rut  grenen tettes, da forsvinner kraften på forunderlig vis. Satan arbeider målbevisst på at forbindelsen mellom stammen og grenen svekkes og helst opphører  rut.'
					}
					RelatedParagraph={
						'Lorem ipsum dolor sit amet consectetur. Duis consectetur dui dictumst sollicitudin faucibus.  Rut  viverra ultricies eu sapien amet in mi ut nullam.'
					}
					SearchQuantity={'1'}
					RelatedTitle={'Lorem ipsum dolor sit amet consectetur.'}
					RelatedBookName={'Book Title'}
					creationDate={'Author- 1920'}
				/>
			</div>
		</>
	);
}
