'use client';

import { useRef, useState } from 'react';
import './content.css';
import { useDimensions } from '@/components/useDimensions';
import { useWindowDimensions } from '@/components/useWindowDimensions';

export default function Content() {
	const [currentPage, setCurrentPage] = useState(0);
	const ref = useRef(null);
	const { width, height: totalHeight } = useDimensions(ref);
	const { height: windowHeight } = useWindowDimensions();
	console.log(width);
	console.log(totalHeight);
	console.log(windowHeight);
	let desiredWidth = width / 2 - 10;
	const desiredHeight = windowHeight - 100;
	const pageCount = Math.floor(totalHeight / desiredHeight) + 1;
	console.log(pageCount);
	const checkDark = () => {
		if (window.matchMedia) {
			// Check if the dark-mode Media-Query matches
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				console.log('dark');
				// Dark
			} else {
				console.log('light');
				// Light
			}
		} else {
			console.log('not supported');
			// Default (when Media-Queries are not supported)
		}
	};
	checkDark();
	return (
		<div className="w-full relative">
			<div ref={ref} className="">
				<h2>Tiden i Drøbak</h2>
				<p>
					<br />
				</p>
				<p>
					Vi bodde også noen år i Drøbak før vi flyttet til Oslo. Det var en
					veldig god tid med mange kjære gode venner, mye samfunn, trivsel og
					glad latter. Vennene var ekstra menneskekjærlige og gjorde veldig mye
					godt for oss som barn. Mor var også ekstra gjestfri og omsorgsfull.
					Hun likte å gjøre det godt og trivelig for vennene. Hjemme hadde vi
					ikke innlagt bad, og hver uke fikk vi komme i hjemmet til Ole
					Kristiansen for å bade. Jeg husker enda hvordan vi på vinterstid ble
					pakket inn i ulltepper og båret over til vårt hjem etter at vi var
					badet.
				</p>
				<p>
					Familien Kristiansen kan jeg også huske som et inderlig godt minne fra
					min barndom. De var ualminnelig barnekjære. Vi barna hadde det derfor
					veldig godt når de tok oss med på stranda og ellers brukte mye tid
					sammen med oss i lek og moro. Alt dette var med på å gi meg en lys og
					glad barndom. Både englene, Jesus og Gud sammen med alle vennene står
					for meg som en vakker hage i mitt indre.{' '}
				</p>
				<p>
					Fra denne tiden husker jeg gamle broder Thorolf Eriksen som en ekstra
					god og trivelig mann. Han arbeidet som los, og jeg husker spesielt en
					gang på en båttur at det ble høy sjø. Styrmannen ombord bad Eriksen
					overta roret. Jeg husker jeg så ham stå til rors så trygg og rolig.
					Når han var til stede, følte jeg at Jesus var til stede i båten og at
					han ville lose oss trygt i havn, noe han også gjorde.
				</p>
				<p>
					Da jeg var omtrent fem år gammel ramlet jeg ned fra en ca. fem meter
					høy fjellskrent bak lokalet i Drøbak. «Nå slår du deg fælt,» tenkte
					jeg, i det jeg datt ned fjellskrenten. Men noe forunderlig skjedde:
					Jeg kjente tydelig englenes hender ta i mot meg der jeg landet som i
					en dundyne. Jeg husker godt at jeg gledesstrålende løp hjem til mamma
					og sa: «Englene tok i mot meg! Jeg slo meg ikke!»
				</p>
				<p>
					I Drøbak hadde jeg min beste søndagsskolelærer. Han holdt nemlig de
					absolutt korteste talene, og derfor var det mye lettere å huske hva
					han sa. Lange taler husket jeg som regel svært lite av og de ble meg
					derfor heller ikke til hjelp. Mon tro om det ikke er slik med barn den
					dag i dag også?
				</p>
				<p>
					Det var også en butikk i Drøbak som står klart for meg som et kjært
					barndomsminne. Dette var en godteributikk som het «Barnas Paradis». I
					mitt barndomshjem var jeg vant til å forbinde paradis med himmelen.
					Jeg husker godt at jeg stod utenfor butikken og kikket inn gjennom
					utstillingsvinduet.{' '}
				</p>
				<p>
					Fantasien fikk temmelig fritt utløp. Jeg kunne levende forestille meg
					hvor herlig det var i himmelen. Her så jeg godterier i alle mulige
					farger og fasonger. Spesielt hadde jeg en forkjærlighet for gelè – det
					var yndlingsdesserten min. Jeg var sikker på at jeg skulle få spise
					gelè så mye og så ofte jeg ville når jeg kom til himmelen. Det tok noe
					tid før jeg skjønte at himmelen var noe mer enn gater av gull, liflig
					musikk og «Barnas Paradis»!{' '}
				</p>
				<p>
					Når det gjelder tiden i Drøbak, kan jeg på ingen måte glemme Elise
					Pettersen, som holdt barnemøter og søndagsskole for oss. Hun var
					ugift, og hennes gudhengivne liv har gjort et uutslettelig inntrykk på
					meg. Samtidig var hun svært enkel og naturlig i alt hun sa og gjorde.
					Hun hadde også en veldig god evne til å ta seg selv lite høytidlig –
					og lo hjertelig og godt av egne feiltrinn. I tillegg var hun
					fantastisk flink til å fortelle historier – spesielt bibelhistorier
					fra det gamle testamente. Dette gav meg tidlig innsikt i trosheltenes
					liv og virke. Ved sin levende gudstro var hun selv en veldig dragelse
					til Sønnen.{' '}
				</p>
				<p>
					På denne tiden mistet far snekkerverkstedet sitt. Det medførte at det
					ble lite med inntekter i en periode. En gang hadde vi så lite å spise
					at mor ikke visste hva hun skulle sette fram på bordet. På en slik
					dag, da mor hadde bedt til Gud fordi hun ikke visste sin arme råd hva
					hun skulle gi oss å spise, kom Elise Pettersen litt forlegen inn til
					oss. «Jeg kjøpte noe til deg som jeg tok med på veien,» sa hun litt
					stille. Gud hadde virket slik i hennes indre at hun hadde dratt innom
					en butikk og blant annet kjøpt melk, brød og pålegg. Hun kom virkelig
					som et sendebud i rette tid. Det var mange slike opplevelser med
					henne.
				</p>
				<p>
					Elise Pettersen bodde også tidvis hos oss – noen måneder om gangen –
					og hjalp min mor under store deler av min oppvekst. Hun stod som et
					fast tårn i mitt barnesinn – et tårn til tegn på Guds urokkelige
					godhet. Hun hadde lynende øyne som var nesten sorte, og kom det
					fremmede kamerater og spurte etter meg, satte hun øynene i dem. Noen
					av skolekameratene mine sa at de ikke torde å komme hjem til meg på
					grunn av de sorte øynene hennes. Dette gjorde hun selvfølgelig for å
					verne og bevare meg.
				</p>
				<p>
					Når hun hjalp mor i hjemmet, minnes jeg at hun alltid hadde Bibelen i
					den ene hånden når hun rørte i grytene. Hun lo, bad til Gud og hadde
					et fantastisk godt humør. Midt i arbeidet og møyen hadde hun tid for
					oss. For henne var det hele så naturlig og liketil.{' '}
				</p>
				<p>
					Da jeg var femten – seksten år gammel, fikk jeg en følelse av at det
					var en del mennesker som ikke var glad i meg. Dette var en vanskelig
					tid for meg. I den tiden bad Elise Pettersen meg innstendig om at jeg
					ikke måtte slutte å gå på møtene. Hun sa at jeg skulle få ti kroner
					hver måned hvis jeg fortsatte. Dette gjorde et veldig inntrykk på meg.
					Ikke så mye på grunn av ti-kroningen, men på grunn av hennes gode og
					varme hjerte, fortsatte jeg å gå på møtene.{' '}
				</p>
				<p>
					Dette kan jo være en vekker for mang en ugift søster. Betenk hvilken
					fantastisk virkning du kan ha på mennesker langt inn i framtiden når
					du lever for Gud i hjertets enfold!
				</p>
				<p>
					Jeg kjente at mange av de menneskene som gikk inn og ut av vårt
					barndomshjem hadde et skjult liv med Kristus i Gud, og at de ikke stod
					for menneskers åsyn. Dette gjorde et veldig inntrykk på meg som barn.
					De var som fyrtårn og fjell rundt Jerusalem – det var så godt og
					trygt. De var som et vern mot det onde ved det de sa og gjorde. Jeg er
					sikker på at mange av dem bokstavelig talt ville gitt sitt liv for å
					redde meg. Så håndpåtagelig kjente jeg deres kjærlighet.{' '}
				</p>
				<p>
					<br />
				</p>
			</div>
			{/* <div
				className="overflow-hidden relative"
				style={{
					width: width - 20,
					height: desiredHeight,
				}}
			>
				<div
					className="absolute"
					style={{
						left: currentPage === 0 ? 0 : -width * currentPage + 10,
						width: pageCount * desiredWidth,
						height: desiredHeight,
						WebkitColumnCount: pageCount,
					}}
				>
					<h2>Tiden i Drøbak</h2>
					<p>
						<br />
					</p>
					<p>
						Vi bodde også noen år i Drøbak før vi flyttet til Oslo. Det var en
						veldig god tid med mange kjære gode venner, mye samfunn, trivsel og
						glad latter. Vennene var ekstra menneskekjærlige og gjorde veldig
						mye godt for oss som barn. Mor var også ekstra gjestfri og
						omsorgsfull. Hun likte å gjøre det godt og trivelig for vennene.
						Hjemme hadde vi ikke innlagt bad, og hver uke fikk vi komme i
						hjemmet til Ole Kristiansen for å bade. Jeg husker enda hvordan vi
						på vinterstid ble pakket inn i ulltepper og båret over til vårt hjem
						etter at vi var badet.
					</p>
					<p>
						Familien Kristiansen kan jeg også huske som et inderlig godt minne
						fra min barndom. De var ualminnelig barnekjære. Vi barna hadde det
						derfor veldig godt når de tok oss med på stranda og ellers brukte
						mye tid sammen med oss i lek og moro. Alt dette var med på å gi meg
						en lys og glad barndom. Både englene, Jesus og Gud sammen med alle
						vennene står for meg som en vakker hage i mitt indre.{' '}
					</p>
					<p>
						Fra denne tiden husker jeg gamle broder Thorolf Eriksen som en
						ekstra god og trivelig mann. Han arbeidet som los, og jeg husker
						spesielt en gang på en båttur at det ble høy sjø. Styrmannen ombord
						bad Eriksen overta roret. Jeg husker jeg så ham stå til rors så
						trygg og rolig. Når han var til stede, følte jeg at Jesus var til
						stede i båten og at han ville lose oss trygt i havn, noe han også
						gjorde.
					</p>
					<p>
						Da jeg var omtrent fem år gammel ramlet jeg ned fra en ca. fem meter
						høy fjellskrent bak lokalet i Drøbak. «Nå slår du deg fælt,» tenkte
						jeg, i det jeg datt ned fjellskrenten. Men noe forunderlig skjedde:
						Jeg kjente tydelig englenes hender ta i mot meg der jeg landet som i
						en dundyne. Jeg husker godt at jeg gledesstrålende løp hjem til
						mamma og sa: «Englene tok i mot meg! Jeg slo meg ikke!»
					</p>
					<p>
						I Drøbak hadde jeg min beste søndagsskolelærer. Han holdt nemlig de
						absolutt korteste talene, og derfor var det mye lettere å huske hva
						han sa. Lange taler husket jeg som regel svært lite av og de ble meg
						derfor heller ikke til hjelp. Mon tro om det ikke er slik med barn
						den dag i dag også?
					</p>
					<p>
						Det var også en butikk i Drøbak som står klart for meg som et kjært
						barndomsminne. Dette var en godteributikk som het «Barnas Paradis».
						I mitt barndomshjem var jeg vant til å forbinde paradis med
						himmelen. Jeg husker godt at jeg stod utenfor butikken og kikket inn
						gjennom utstillingsvinduet.{' '}
					</p>
					<p>
						Fantasien fikk temmelig fritt utløp. Jeg kunne levende forestille
						meg hvor herlig det var i himmelen. Her så jeg godterier i alle
						mulige farger og fasonger. Spesielt hadde jeg en forkjærlighet for
						gelè – det var yndlingsdesserten min. Jeg var sikker på at jeg
						skulle få spise gelè så mye og så ofte jeg ville når jeg kom til
						himmelen. Det tok noe tid før jeg skjønte at himmelen var noe mer
						enn gater av gull, liflig musikk og «Barnas Paradis»!{' '}
					</p>
					<p>
						Når det gjelder tiden i Drøbak, kan jeg på ingen måte glemme Elise
						Pettersen, som holdt barnemøter og søndagsskole for oss. Hun var
						ugift, og hennes gudhengivne liv har gjort et uutslettelig inntrykk
						på meg. Samtidig var hun svært enkel og naturlig i alt hun sa og
						gjorde. Hun hadde også en veldig god evne til å ta seg selv lite
						høytidlig – og lo hjertelig og godt av egne feiltrinn. I tillegg var
						hun fantastisk flink til å fortelle historier – spesielt
						bibelhistorier fra det gamle testamente. Dette gav meg tidlig
						innsikt i trosheltenes liv og virke. Ved sin levende gudstro var hun
						selv en veldig dragelse til Sønnen.{' '}
					</p>
					<p>
						På denne tiden mistet far snekkerverkstedet sitt. Det medførte at
						det ble lite med inntekter i en periode. En gang hadde vi så lite å
						spise at mor ikke visste hva hun skulle sette fram på bordet. På en
						slik dag, da mor hadde bedt til Gud fordi hun ikke visste sin arme
						råd hva hun skulle gi oss å spise, kom Elise Pettersen litt forlegen
						inn til oss. «Jeg kjøpte noe til deg som jeg tok med på veien,» sa
						hun litt stille. Gud hadde virket slik i hennes indre at hun hadde
						dratt innom en butikk og blant annet kjøpt melk, brød og pålegg. Hun
						kom virkelig som et sendebud i rette tid. Det var mange slike
						opplevelser med henne.
					</p>
					<p>
						Elise Pettersen bodde også tidvis hos oss – noen måneder om gangen –
						og hjalp min mor under store deler av min oppvekst. Hun stod som et
						fast tårn i mitt barnesinn – et tårn til tegn på Guds urokkelige
						godhet. Hun hadde lynende øyne som var nesten sorte, og kom det
						fremmede kamerater og spurte etter meg, satte hun øynene i dem. Noen
						av skolekameratene mine sa at de ikke torde å komme hjem til meg på
						grunn av de sorte øynene hennes. Dette gjorde hun selvfølgelig for å
						verne og bevare meg.
					</p>
					<p>
						Når hun hjalp mor i hjemmet, minnes jeg at hun alltid hadde Bibelen
						i den ene hånden når hun rørte i grytene. Hun lo, bad til Gud og
						hadde et fantastisk godt humør. Midt i arbeidet og møyen hadde hun
						tid for oss. For henne var det hele så naturlig og liketil.{' '}
					</p>
					<p>
						Da jeg var femten – seksten år gammel, fikk jeg en følelse av at det
						var en del mennesker som ikke var glad i meg. Dette var en vanskelig
						tid for meg. I den tiden bad Elise Pettersen meg innstendig om at
						jeg ikke måtte slutte å gå på møtene. Hun sa at jeg skulle få ti
						kroner hver måned hvis jeg fortsatte. Dette gjorde et veldig
						inntrykk på meg. Ikke så mye på grunn av ti-kroningen, men på grunn
						av hennes gode og varme hjerte, fortsatte jeg å gå på møtene.{' '}
					</p>
					<p>
						Dette kan jo være en vekker for mang en ugift søster. Betenk hvilken
						fantastisk virkning du kan ha på mennesker langt inn i framtiden når
						du lever for Gud i hjertets enfold!
					</p>
					<p>
						Jeg kjente at mange av de menneskene som gikk inn og ut av vårt
						barndomshjem hadde et skjult liv med Kristus i Gud, og at de ikke
						stod for menneskers åsyn. Dette gjorde et veldig inntrykk på meg som
						barn. De var som fyrtårn og fjell rundt Jerusalem – det var så godt
						og trygt. De var som et vern mot det onde ved det de sa og gjorde.
						Jeg er sikker på at mange av dem bokstavelig talt ville gitt sitt
						liv for å redde meg. Så håndpåtagelig kjente jeg deres kjærlighet.{' '}
					</p>
					<p>
						<br />
					</p>
				</div>
			</div> */}
			<div className="flex w-full justify-between">
				<button
					onClick={() => {
						if (currentPage > 0) {
							setCurrentPage(currentPage - 1);
						}
					}}
				>
					Previous
				</button>
				<button
					onClick={() => {
						if (currentPage < pageCount - 1) {
							setCurrentPage(currentPage + 1);
						}
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
}
